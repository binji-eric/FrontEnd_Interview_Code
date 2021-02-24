// Promise.allSettled跟Promise.all类似, 其参数接受一个Promise的数组, 
// 返回一个新的Promise, 唯一的不同在于, 其不会进行短路, 
// 也就是说当Promise全部处理完成后我们可以拿到每个Promise的状态, 而不管其是否处理成功。

function isPromise(val) {
	return typeof val.then === 'function';
}

Promise.allSettled = function(arr) {
	return new Promise((resolve, reject) => {
		let arr = [];
		let times = 0;
		const setData = (index, data) => {
			arr[index] = data;
			if(++times === arr.length) {
				resolve(arr);
			}
		}

		for(let i = 0; i < arr.length; i++) {
			let current = arr[i];
			if(isPromise(current)) {
				current.then((data) => {
					setData(i, {status: 'fulfilled', value: data})
				}, err => {
					setData(i, {status: 'rejected', value: err})
				})
			} else {
				setData(i, {staus: 'fulfilled', value: current})
			}
		}
	})
}