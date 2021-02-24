function deepCopy(source, map = new WeakMap()) {
	if(source instanceof Object) {
		if(map.has(source)) {
			return map.get(source);
		} else {
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
			
			map.set(source, dist);
			for(let key in source) {
				if(source.hasOwnProperty(key)) {
					dist[key] = deepCopy(source[key], map);
				}
			}
			return dist;
		}
	}
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