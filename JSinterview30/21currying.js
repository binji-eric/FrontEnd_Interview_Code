function curry(fn) {
  // 保存预置参数
  const presetArgs = [].slice.call(arguments, 1)
  // 返回一个新函数
  function curried () {
    // 新函数调用时会继续传参
    const restArgs = [].slice.call(arguments)
    const allArgs = [...presetArgs, ...restArgs]
    return curry.call(null, fn, ...allArgs)
  }
  // 重写toString, 最终输出的一步，也就是执行fn
  curried.toString = function() {
    return fn.apply(null, presetArgs)
  }
  return curried;
}

function dynamicAdd() {
  return [...arguments].reduce((prev, curr) => {
    return prev + curr
  }, 0)
}
var add = curry(dynamicAdd);
add(1)(2)(3)(4) // 10
add(1, 2)(3, 4)(5, 6) // 21