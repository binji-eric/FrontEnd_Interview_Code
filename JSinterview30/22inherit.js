function Parent(name, actions) {
    this.name = name;
    this.actions = actions;
}

Parent.prototype.getName = function () {
    console.log(this.name + '调用了getName');
}

function Child() {
    Parent.apply(this, arguments);
}

// Child.prototype = Parent.prototype; // 一旦更改Child.prototype，Parent.prototype也会被修改。
Child.prototype = Object.create(Parent.prototype);

// 这里是组合继承的方式
// Child.prototype = new Parent(); 

// 这里是模拟Object.create()过程
// let TempFunction = function () {};
// TempFunction.prototype = Parent.prototype;
// Child.prototype = new TempFunction();

Child.prototype.constructor = Child;



// super() Child

const c1 = new Child('c1', ['eat']);
const c2 = new Child('c2', ['run']);
