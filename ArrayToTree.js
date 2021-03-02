// 将输入的数组组装成一颗树状的数据结构，时间复杂度越小越好。

const arr = [ { id: 1, name: "i1" },
 			{ id: 2, name: "i2", parentId: 1 },
			{ id: 4, name: "i4", parentId: 3 },
			{ id: 3, name: "i3", parentId: 2 }];

function ArrayToTree(arr) {
	const map = new Map();
	let parentId = -1;
	// create the map
	for(let ele of arr) {
		// const obj = {};
		// obj.id = ele.id;
		// obj.name = ele.name;
		// if(ele.hasOwnProperty('parentId')) {
		// 	obj.parentId = ele.parentId;
		// } else {
		// 	parentId = ele.id;
		// }
		if(!ele.hasOwnProperty('parentId')) {
			parentId = ele.id;
		} 
		const obj = Object.assign({}, ele);
		// const obj = {...ele};
		map.set(obj.id, obj);
	}

	// connect the nodes
	for(let ele of arr) {
		if(ele.hasOwnProperty('parentId')) {
			const parent = map.get(ele.parentId);
			const child = map.get(ele.id);
			if(!parent.chidlren) {
				parent.children = [];
			}
			parent.children.push(child);
		}
	}
	return map.get(parentId);
}

console.log(ArrayToTree(arr));