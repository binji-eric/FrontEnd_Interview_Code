function myNew() {
	// 1，创建空对象，作为将要返回的实例对象
	const obj = {};
	const constructor = Array.prototype.shift.call(arguments);
	if(typeof constructor !== 'function ') {
		console.log('constructor should be function');
		return;
	}
	// 2，将空对象的原型指向构造函数的prototype属性
	obj.__proto__ = constructor.prototype;
	// 3， 让构造函数this指向这个对象，并且执行构造函数内部的代码
	const res = constructor.call(obj, arguments);

	// 4， 如果构造函数返回对象，就返回对象，否则空对象也就是this对象
	return res && (typeof res === 'object' || typeof res === 'function')? res: obj;
}