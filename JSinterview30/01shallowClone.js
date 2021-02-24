const shallowClone = (target) => {
	if(typeof target === 'object' && typeof target !== 'null') {
		const res = Array.isArray(target)? []: {};
		for(let key in target) {
			// 遍历对象自身可枚举属性（不考虑继承属性和原型对象）
			if(target.hasOwnProperty(key)) {
				res[key] = target[key];
			}
		}
		return res;
		
	} else {
		return target;
	}

}