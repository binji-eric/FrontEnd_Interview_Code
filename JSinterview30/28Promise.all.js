
// 通过是否有then，决定是否是promise
function isPromise(data) {
	return typeof data.then === 'function'; // (123).then => undefined
}

Promise.all = function(promises) {
	const res = [];
	let index = 0;
	const processData = (key, data) => {
		res[key] = data;
		if(++index == promises.length) {
			resolve(res);
		}
	}
	return new Promise((resolve, reject) => {
		for(let i = 0;  i < promises.length; i++) {
			let result = promises[i];
			if(isPromise(result)) {
				result.then((data) => {
					processData(i, data)
				})
			} else {
				processData(i, result);
			}
		}
	});
}