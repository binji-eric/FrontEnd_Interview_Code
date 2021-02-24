function throttle(fn, delay) {
  let previous = 0 // 缓存上一次的时间戳
  return (...args) => {
    const now = + new Date()
    // （+）一元加运算符：可以把任意类型的数据转换成（数值），结果只能是（数值）和（NaN）两种
    // 获取现在的时间戳，即距离1970.1.1 00:00:00的毫秒数字
    // 注意：单位是毫秒数，和定时器的第二个参数吻合，也是毫秒数
    if (now - previous > delay) {
     // 第一次：now - previous > delay是true，所以立即执行一次
     // 然后 previous = now
     // 第二次：第二次能进来的条件就是差值毫秒数超过delay毫秒
     // 这样频繁的点击时，就能按照固定的频率执行，当然是降低了频率
      fn.call(this, ...args)
      previous = now // 注意：执行完记得同步时间
    }
  }
}


function throttle(fn, delay) {
    let isRun = false // 标志位
    return (...args) => {
      if (isRun) { // false则跳出函数，不再向下执行
        return
      }
      isRun = true // 立即改为false，则下次不会再执行到定位器，直到定时器执行完，isRun为true，才有机会执行到定时器
      let timer = setTimeout(() => {
        fn.call(this, ...args)
        isRun = false
        clearTimeout(timer) // 执行完所有操作后，清除定时器
      }, delay)
    }
  }