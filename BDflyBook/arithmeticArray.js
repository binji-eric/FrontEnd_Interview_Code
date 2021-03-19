// 链接：https://www.nowcoder.com/discuss/477747?type=post&order=time&pos=&page=1&channel=-1&source_id=search_post_nctrack&subType=2

// 1. 给一个无序数组，让你判断能否组成一个等差数列（排序算法很简单，不排序呢）。
// 排序算法，先排序，取最小值及次小值 ，相减得差，挨个便利数组元素比差。
// 非排序算法，第一次遍历取最小值，第二次遍历取次小值，数组中每个元素与最小值的差 除以 次小值跟最小值的差是整数倍，通过一个数组记录其是否出现过。

// 排序实现
const isArithmeticSequence = function (arr) {
    let len = arr.length;
    if (len <= 2) {
        return true;
    }
    arr.sort((a, b) => a - b);
    let gap = arr[1] - arr[0];
    for (let i = 2; i < len; i++) {
        if (arr[i] - arr[i - 1] !== gap) {
            return false;
        }
    }
    return true;
}
let arr = [2, 4, 6, 10, 8, 12];
console.log(isArithmeticSequence(arr)); // true
console.log(isArithmeticSequence([2, 5, 6, 8, 10])); // false


// 非排序实现
const isArithmeticSequence = function (arr) {
    let len = arr.length;
    if (len <= 2) {
        return true;
    }
    let min1 = Math.min(...arr);
    let minIndex = arr.indexOf(min1);
    let min2 = Math.min(...arr.slice(0, minIndex), ...arr.slice(minIndex + 1));
    let gap = min2 - min1;
    let set = Array(len).fill(0);
    // 计算出每个差值是不是gap的整数倍
    for (let num of arr) {
        let times = (num - min1) / gap;
        if (set[times] === 0) {
            set[times] = 1;
        } else {
            return false;
        }
    }
    return true;
}
let arr = [2, 4, 6, 10, 8, 12];
console.log(isArithmeticSequence(arr)); // true
console.log(isArithmeticSequence([2, 5, 6, 8, 10])); // false