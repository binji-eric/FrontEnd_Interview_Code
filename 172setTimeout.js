
// setInterval(function(){ 
//   let j = 0
//   while(j++ < 100000000){}
// }, 0)

const interval = 1000
let ms = 50000  // 从服务器和活动开始时间计算出的时间差，这里测试用 50000 ms
let count = 0 // 第几次倒计时
const startTime = new Date().getTime()
let timeCounter
if( ms >= 0) {
  timeCounter = setTimeout(countDownStart, interval)
}
 
function countDownStart () {
 	// 第count次
   count++
   // 当前实际时间 - 预期时间（start + 次数*间隔） = offset
   const offset = new Date().getTime() - (startTime + count * interval) 
   let nextTime = interval - offset
   if (nextTime < 0) { 
         nextTime = 0 
   }
   ms -= interval
   console.log(`误差：${offset} ms，下一次执行：${nextTime} ms 后，离活动开始还有：${ms} ms`)
   if (ms < 0) {
     clearTimeout(timeCounter)
   } else {
     timeCounter = setTimeout(countDownStart, nextTime)
   }
//  }

/*

 // 利用setTimeout实现setInteral
 function mySetInterval(fn, s) {
 	timeout = (fn, s) => {
 		setTimeout(() => {
 			fn();
 			timeout(fn, s)
 		}, s)
 	}
 	timeout(fn, s);
 }
*/
 // mySetInterval(() => {console.log('helllo every second')}, 1000)