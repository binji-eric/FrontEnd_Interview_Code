// 数据整合

// method1
let input = [{ count: 1, value: 2 }, { count: 3, request: 2}, { response: 0 } ];  // => {count: 4, value: 2 ......}
const addAll = function (input) {
    return input.reduce(function (prev, cur) {
        Object.keys(cur).forEach((key) => {
            if(prev[key] !== undefined) {
                prev[key] += cur[key];
            } else {
                prev[key] = cur[key];
            }
        })
        return prev;
    },{})
}

const res = addAll(input);
console.log(res);


// method2
let input = [{ count: 1, value: 2 }, { count: 3, request: 2}, { response: 0 } ];  // => {count: 4, value: 2 ......}
const addAll = function (input) {
  let res = {};
  input.forEach((obj) => {
    Object.keys(obj).forEach((k) => {
      if (res[k] === undefined) {
        res[k] = obj[k];
      } else {
        res[k] += obj[k];
      }
    })
  })
  return res;
}
console.log(addAll(input)); // { count: 4, value: 2, request: 2, response: 0 }