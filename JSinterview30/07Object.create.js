// Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__

Object.create = function(prototype) {
	// 排除传入的对象是 null 和 非object的情况
	if(prototype === null || typeof prototype != 'object') {
		throw new TypeError('Object prtototype may only be an Object');
	}
	// 让空对象的 __proto__指向 传进来的 对象(prototype)
  	// 目标 {}.__proto__ = prototype
	function temp() {};
	temp.prototype = prototype;
	return new temp;
}