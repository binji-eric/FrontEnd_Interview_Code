function _instanceOf(instanceObject, classFunc) {
	let proto = instanceObject.__proto__;  // 获取当前实例的原型
	while(proto) {
		if(proto === classFunc.prototype) { // 获得当前类的原型并且比较
			return true;
		}
		proto = proto.__proto__; // 沿着原型链向上查找
	}
	return false;
}

// __proto__ 在某些浏览器中可能不能用，需要Object.getPrototypeOf 获得某个实例对象的原型

function _instanceof (instanceObject, classFunc) {
 	let classFunc = classFunc.prototype; // 取得当前类的原型
  	let proto = Object.getPrototypeOf(instanceObject); // 取得当前实例对象的原型链上的属性
  
	while (true) {
	    if (proto === null) { // 找到了 Object的基类 Object.prototype.__proto__
	      return false;
	  	};
	    if (proto === classFunc) { // 在当前实例对象的原型链上，找到了当前类
	      return true;
	    }
	    proto = Object.getPrototypeOf(proto); // 沿着原型链__ptoto__一层一层向上查找
	 }
}