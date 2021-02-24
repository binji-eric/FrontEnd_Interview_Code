const myFlat = arr => {
	return arr.reduce((pre, cur) => {
		return pre.concat(Array.isArray(cur)? myFlat(cur): cur);
	}, []);
};

console.log(myFlat(arr));