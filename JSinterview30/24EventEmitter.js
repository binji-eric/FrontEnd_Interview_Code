class Emitter {
	constructor() {
		this.events = {};
	}
	on(eventName, callback) {
		if(!this.events[eventName]) {
			this.events[eventName] = [];
		}
		this.events[eventName].push(callback);
	}
	emit(eventName) {
		this.events[eventName] && this.events[eventName].forEach(cb => cb());
	}
}


// 测试用例
let em = new EventEmitter();

function workDay() {
  console.log("每天工作");
}
function makeMoney() {
    console.log("赚100万");
}
function sayLove() {
  console.log("向喜欢的人示爱");
}
em.on("money",makeMoney);
em.on("love",sayLove);
em.on("work", workDay);

em.emit("money");
em.emit("love");  
em.emit("work");  