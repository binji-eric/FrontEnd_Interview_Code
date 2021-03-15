// 写一个节流函数 限制一个ip地址一分钟内只允许被请求60次 

class Request {
    constructor(ip) {
        this.ip = ip;
        this.time = new Date.getTime();
    }
    getIP() {
        return this.ip;
    }
    getTime() {
        return this.time;
    }
}

function throttle(fn, delay, maxRequest) {
    // key: ip, value: array
    const map = new Map();
    return (ip) => {
        const curTime = new Date.getTime();
        if(!map.has(ip)) {
            // 执行
            fn.call(this, ip);
            const arr = [];
            arr.push(new Request(ip));
            map.set(ip, arr);
        } else {
            const arr = map.get(ip);
            if(arr.length < maxRequest) {
                fn.call(this, ip);
                arr.push(new Request(ip));
            } else {
                // 过期的跳过
                while(arr.length && (curTime - arr[0].getTime()) > delay) {
                    arr.shift();
                }
                if(arr.length > maxRequest) {
                    // 不执行
                    return;
                } else {
                    fn.call(this, ip);
                    arr.push(new Request(ip));
                }
            }
        }
    }
}
// 允许一分钟内访问60次指定的ip值
const func1 = throttle(function(ip) {
    console.log(ip);
    // this should be the function to visted ip
}, 60*1000, 60)