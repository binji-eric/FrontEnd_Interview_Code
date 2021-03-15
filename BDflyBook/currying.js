// 3.函数柯里化，要求实现
// add(1,2,3).sumof()     //6
// add(1)(2)(3).sumof()  //6
// add(1,2)(3).sumof()   //6 

const add = (...args) => {
    const sum = (args) => {
        return args.reduce((prev, cur) => {
            return prev + cur;
        }, 0);
    }

    const func = (...addition) => {
        const concatArgs = args.concat(addition);
        return add(concatArgs);
    }

    func.sumOf = function () {
        const res = sum.apply(this, args);
        console.log(res);
    }
    return func;
}