function $(id) {
	return document.getElementById(id);
}

const lis = $('title').getElementsByTagName('li');
const pages = $('content').getElementsByTagName('div');
for(let i = 0; i < lis.length; i++) {
	lis[i].onclick = function() {
		console.log(this.id);
		for(let j = 0; j < lis.length; j++) {
			lis[j].className = "";
			pages[j].style.display = "none";
		}
		lis[this.id].className = "select";
		pages[this.id].style.display = "block";
	}
}

$('content').onmouseenter = function() {
	document.body.className = "mask"
	
}

$('content').onmouseleave = function() {
	document.body.className = ""
}