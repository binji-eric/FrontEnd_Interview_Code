// Promise.myAll = function(arr) {
// 	if(!Array.isArray(arr)) {
// 		throw new Error('input should be an array');
// 	}
// 	const res = [];
// 	let count = 0;
// 	return new Promise((resolve, reject) => {
// 		arr.forEach((item) => {
// 			Promise.resolve(item)
// 			.then(data => {
// 				res.push(data);
// 				count++;
// 				if(count == arr.length) {
// 					resolve(res);
// 				}
// 			})
// 			.catch((error) => {
// 				reject(error);
// 			})
// 		})
// 	})
// }

// var promise1 = Promise.resolve(3);
// var promise2 = 42;
// var promise3 = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.myAll(promise1).then(function(values) {
//   console.log(values);
// }).catch((e) => {
//   console.log(e)
// })

function myPromise(executor) {
  // let _this = this;
  this.$status = 'pending';
  this.successCallback = undefined;
  this.rejectCallback = undefined;
  this.error = undefined;
  
  executor(resolve.bind(this), reject.bind(this));
  
  function resolve(params){
    if(this.$status === 'pending') {
      this.$status = 'resolve';
      this.successCallback(params);
    }
  }
  function reject(params){
    if(this.$status === 'pending') {
      this.$status = 'reject';
      this.rejectCallback(params);
    }
  }
}

myPromise.prototype.then = function(full, rejectF){
  this.successCallback = full;
  this.rejectCallback = rejectF;
}


new myPromise(function(res, rej){
  setTimeout(() => res('sucess'), 1000)
}).then(res => console.log('first', res), rej => console.log('fail', ej))