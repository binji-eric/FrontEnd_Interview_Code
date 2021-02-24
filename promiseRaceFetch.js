const fetch = require("node-fetch");

function promiseRace(arr) {
	const len = arr.length;
	let index = 0;
	return new Promise((resolve, reject) => {
		for(let i = 0; i < len; i++) {
			fetch(arr[i])
			.then(res => {
				resolve(res.responseText)
			})
			.catch(error => {
				index++;
				if(index == len) {
					reject(error)
				}
			})
		}
	});
}

const arr = [
	'www.baidu.com',
	'www.bing.com'
]

promiseRace(arr).then((content) => {
	console.log(content)
})