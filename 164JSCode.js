// 定义了一个叫Foo的函数
function Foo() {
    getName = function () { alert (1); };
    return this;
}
// Foo创建了一个叫getName的静态属性存储了一个匿名函数
Foo.getName = function () { alert (2);};
// oo的原型对象新创建了一个叫getName的匿名函数
Foo.prototype.getName = function () { alert (3);};
// 函数变量表达式创建了一个getName的函数
var getName = function () { alert (4);};
// 声明一个叫getName函数
function getName() { alert (5);}
 
//请写出以下输出结果：
Foo.getName();  		// answer:2   		Q1
getName();    			// answer:4			Q2
Foo().getName();  		// answer:1			Q3
getName();  			// answer:1			Q4
new Foo.getName();  	// answer:2			Q5
new Foo().getName();  	// answer:3			Q6
new new Foo().getName(); //answer:3			Q7

/*
Q1 访问静态方法， print 2

Q2 关键点: 函数表达式和函数声明的区别，变量提升(hoisting)
	第四句是函数表达式，第五句是函数声明
	函数声明会被提升到作用域的最前面，即使写代码的时候是写在最后面，也还是会被提升至最前面
	函数表达式创建的函数是在运行时进行赋值，且要等到表达式赋值完成后才能调用
	所以虽然第五句在后面声明的，却是相当于在最前面声明，后面被第四句的表达式重写
	所以print 4

Q3 关键点： 变量作用域， this的指向问题
	执行Foo函数，调用返回对象的getName属性函数; 
	this的指向是由所在函数的调用方式决定的。而此处的直接调用方式，this指向window对象。
	由于getName没有var声明，所以先向当前Foo函数作用域内寻找getName变量，没有。再向当前函数作用域上层
	最外面的getName再次被重写，print 1

Q4 直接调用getName, 相当于window.getName(), 与前一步一样，直接print 1

Q5 关键点：运算符优先级问题
	优先级的第18和第17都出现关于new的优先级，new (带参数列表)比new (无参数列表)高比函数调用高，跟成员访问(.)同级
    new Foo.getName() ==  new (Foo.getName)(); // . 成员访问 > new 无参数列表 > 函数执行
    执行静态方法，print 2
06 关键点： 运算符优先级问题 原型链问题
	new Foo().getName() == (new Foo()).getName() // new有参数列表(18)->.成员访问(18)->()函数调用(17)
	this指向实例化的对象，实例上没有该方法，就去原型链上寻找， print 3

07 关键点： 运算符优先级问题 原型链问题
	new new Foo().getName() == new ((new Foo()).getName)();
	先初始化Foo的实例化对象，然后将其原型上的getName函数作为构造函数再次new，所以最终结果为3
*/

/*
// https://github.com/Wscats/articles/issues/85

function User(name) {
	var name = name; 		//私有属性, 无法从外界访问
	this.name = name; 		//公有属性， 或者称作实例属性，可以通过实例来访问
	function getName() { 	//私有方法
		return name;
	}
}
User.prototype.getName = function() { //公有方法/原型对象的方法
	return this.name;
}
User.name = 'Wscats';		 	//静态属性
User.getName = function() {		//静态方法
	return this.name;
}
var Wscat = new User('Wscats');  //实例化

// 调用公有方法，公有属性，我们必需先实例化对象，也就是用new操作符实化对象，
// 就可构造函数实例化对象的方法和属性，并且公有方法是不能调用私有方法和静态方法的
// 静态方法和静态属性就是我们无需实例化就可以调用
// 而对象的私有方法和属性,外部是不可以访问的

*/
