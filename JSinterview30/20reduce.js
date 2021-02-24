// 初始值不传时的特殊处理：会默认使用数组中的第一个元素
// 函数的返回结果会作为下一次循环的prev
// 回调函数一共接受四个参数
// （arr.reduce(prev, cur, currentIndex, array))）
// prev：上一次调用回调时返回的值
// cur: 正在处理的元素
// currentIndex: 正在处理的元素的索引
// array: 正在遍历的集合对象
Array.prototype.myReduce = function(fn, prev) {
	for(let i = 0; i < this.length; i++) {
		if(prev === 'undefined') {
			prev = fn(this[i], this[i+1], i+1, this);
			i++;
		} else {
			prev = fn(prev, this[i], i, this);
		}
	}
	return prev;
}