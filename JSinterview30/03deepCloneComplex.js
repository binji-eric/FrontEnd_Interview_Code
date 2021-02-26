function deepCopy(source, map = new WeakMap()) {
	// 引用对象
	if(source instanceof Object) {
		// 检查是否之前是否处理过，避免循环引用
		if(map.has(source)) {
			return map.get(source);
		} else {
			// 分别对应数组、函数、日期、正则、对象
			let dist
			if(source instanceof Array) {
				dist = [];
			} else if(source instanceof Function) {
				dist = function() {
					return source.apply(this, arguments);
				}
			} else if(source instanceof Date) {
				dist = new Date(source.getTime())
			} else if(source instanceof RegExp) {
				dist = new RegExp(source.source, source.flags);
			} else {
				dist = {};
			}
			// map中设置
			map.set(source, dist);
			// 针对对象 和 数组的情况
			for(let key in source) {
				if(source.hasOwnProperty(key)) {
					dist[key] = deepCopy(source[key], map);
				}
			}
			return dist;
		}
	}
	// 普通对象
	return source;
}

const source  = {
    name: 'Jack',
    meta: {
        age: 12,
        birth: new Date('1997-10-10'),
        ary: [1, 2, { a: 1 }],
        say() {
            console.log('Hello',this.age);
        },
        reg: /^\d+$/ig
    }
}
source.source = source;

console.log('原始数据', source)
const deepObject = deepCopy(source);
console.log('深拷贝数据', deepObject)
console.log('判断其中数据是否相同-1', deepObject.meta.ary[2] === source.meta.ary[2])
console.log('判断其中数据是否相同-2', deepObject.meta.say === source.meta.say)
console.log('判断其中数据是否相同-3', deepObject.meta.reg === source.meta.reg)
deepObject.meta.say();