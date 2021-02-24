Function.prototype.apply = function(context, args) {
	context = context? Object(context): window;
	context.fn = this;
	const res = context.fn(...args);
	delete context.fn;
	return res;
}