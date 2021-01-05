function sum(...args1) {
    let x = args1.reduce((prev, next) => {return prev +next}) 
    return function(...args2) {
        if(args2.length == 0) return x;
        let y = args2.reduce((prev, next) => {return prev + next;})
        return sum(x+y);
    }
}

console.log(sum(1,2,3)(5)(9)());


// function curry(){
//     //首先收集当前第一次传来的参数
//     let _args = Array.prototype.slice.call(arguments)
//     //收集二次或多次函数调用参数
//     let _collectArgs = function (){
//         _args.push(...arguments)
//         return _collectArgs
//     }
//     //难点 _collectArgs.toString()这样直接返回当前的函数的字符串 例如@1 
//     //难点  _collectArgs.toString = function(){} 返回这个函数会在自己执行
//     //难点toString隐式转换的特性
//     //闭包缓存当前参数
//     //还可以通过fn.length做性能优化
//     _collectArgs.toString = function(){
//         return _args.reduce((a,b)=>{
 
//             return a+b
//         })
//     }
//     return _collectArgs
// }
// // 如果后面不加 + “”, 不会触发toString方法，因为console.log可以输出任何类型的数据
// // 浏览器中alert智能输出toString，alert(curry(1,2,3))就可以
// console.log(curry(1)(2)(3) + "")
