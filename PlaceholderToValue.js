function transform(str, obj) {
	const reg = /\{(\w+)\}/;
	let template = str;
	while(reg.test(template)) {
		const key = reg.exec(template)[1];
		// 替换掉template中reg的内容
		template = template.replace(reg, obj[key]);
	}
	return template;
}

const str =  'Hello {name}, good {time}!'
const obj  =  { 
				name: "ZhangSan",
			 	time: "morning"
			}

console.log(transform(str, obj));
