// https://juejin.cn/post/6916317088521027598
// 实现一个批量请求函数 multiRequest(urls, maxNum)，要求如下：
// • 要求最大并发数 maxNum
// • 每当有一个请求返回，就留下一个空位，可以增加新的请求
// • 所有请求完成后，结果按照 urls 里面的顺序依次打出

// 串行
var p = function() {
    return new Promise(function(resolve, reject)  {
        setTimeout(() => {
            console.log('1000')
            resolve();
        }, 1000)
    });
}

var p1 = function() {
    return new Promise(function(resolve, reject)  {
        setTimeout(() => {
            console.log('2000')
            resolve();
        }, 2000)
    });
}

var p1 = function() {
    return new Promise(function(resolve, reject)  {
        setTimeout(() => {
            console.log('3000')
            resolve();
        }, 3000)
    });
}

p.then(() => {
    return p1()
}).then(() => {
    return p2()
}).then(() => {
    console.log('end')
})

// 并行
var promises = function () {
    return [1000, 2000, 3000].map((current) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(current);
                resolve();
            }, current)
        })
    })
}

Promise.all(promises()).then(() => {
    console.log('the end');
})


// 这时候考虑一个场景：如果你的promises数组中每个对象都是http请求，而这样的对象有几十万个。

// 那么会出现的情况是，你在瞬间发出几十万个http请求，这样很有可能导致堆积了无数调用栈导致内存溢出。



// Promise.all并发限制指的是，每个时刻并发执行的promise数量是固定的，
// 最终的执行结果还是保持与原来的Promise.all一致。

function multiRequest(urls = [], maxNum) {
    // 请求的总数量
    const len = urls.length;
    // 根据请求数量
    const results = new Array(len).fill(false);
    // 当前完成的数量
    let count = 0;
    // 请求maxNum个
    while(count < maxNum) {
        next();
    }

    function next() {
        let current = count++;
        if(current >= len) {
            // 请求全部完成就将promise置为成功状态, 然后将result作为promise值返回
            !result.includes(false) && resolve(results);
            return;
        }
        const url = urls[current];
        console.log(`{current} 开始了，开始时间为`, new Date().toLocaleDateString());
        fetch(url)
            .then((res) => {
                // 保存请求结果
                results[current] = res;
                console.log(`{current} 结束了，结束时间为`, new Date().toLocaleDateString());
                // 请求没有全部完成, 就递归
                next();
            })
            .catch((err) => {
                results[current] = err;
                console.log(`{current} 结束了，结束时间为`, new Date().toLocaleDateString());
                // 请求没有全部完成, 就递归
                next();
            });
    }
}

