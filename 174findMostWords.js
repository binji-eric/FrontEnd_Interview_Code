function findMostWords(article) {
	if(!article) {
		return null;
	}
	// 参数处理, 将article头尾空格，然后转化为小写，依然是数组
	article = article.trim().toLowerCase();

	// 设置单词至少为2个字母起， wordlist是返回的数组， newArticle是拼接后的string
	let wordList = article.match(/[a-z]{2,}/g), visited = [], maxNum = 0, maxWord = "";
	const newArticle = " " + wordList.join(" ") + " ";
	console.log('wordList', wordList);
	console.log('newArticle', newArticle);
	wordList.forEach( item => {
		// 第一次出现时
		if(visited.indexOf(item) == -1) {
			visited.push(item);
			const wordRegExp = new RegExp(" " + item + " ", "g");
			// 求出符合匹配规则数组的长度
			const num = newArticle.match(wordRegExp).length;
			if(num > maxNum) {
				maxNum = num;
				maxWord = item;
			}
		}
	});
	return maxWord + " " + maxNum;
}


const article = "This is a good day, how are you!" + 
				" I haven't seen you for a long time. Would you like to have a beer with me"
console.log(findMostWords(article));
