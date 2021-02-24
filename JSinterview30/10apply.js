Function.prototype.apply = function(context, ...args) {

	 //  null，undefined，和不传时，context为 window
	 // 必须保证 context 是一个对象类型
	context = context? Object(context): window;

	 // 把函数作为对象的某个成员值
	context.fn = this;
	const res = context.fn(...args);
	 // 设置完成员属性后，删除
	delete context.fn;
	return res;
}