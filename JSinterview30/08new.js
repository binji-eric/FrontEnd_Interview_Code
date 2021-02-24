/**
  * Func: 要操作的类（最后要创建这个类的实例）
  * args：存储未来传递给Func类的实参
  */
function _new(Func, ...args) {
	let obj = {};
	// 创建一个Func的实例对象（实例.____proto____ = 类.prototype）
	obj.__proto__ = Func.prototype;
	// 把Func当做普通函数执行，并改变this指向
	const res = Func.apply(obj, args);
	// 分析函数的返回值
	if(res !== null && typeof res === 'object'){
		return res;
	}
	return obj;
}

// __proto__在IE浏览器中不支持, 所以使用Object.create进行优化
function _new(Func, ...args) {
  
  // let obj = {};
  // obj.__proto__ = Func.prototype;
  // 创建一个Func的实例对象（实例.____proto____ = 类.prototype）
  let obj = Object.create(Func.prototype);
  
  // 把Func当做普通函数执行，并改变this指向
  let result = Func.call(obj, ...args);
  
  // 分析函数的返回值
  if (result !== null && /^(object|function)$/.test(typeof result)) {
    return result;
  }
  return obj;
}