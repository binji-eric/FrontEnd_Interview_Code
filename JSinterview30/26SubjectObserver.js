// 观察者需要放到被观察者中，被观察者的状态变化需要通知观察者 我变化了 内部也是基于发布订阅模式，收集观察者，状态变化后要主动通知观察者

// 被观察者
class Subject {
	constructor(name) {
		this.state = 'happy';
		this.observers = []; //存储所有的观察者
	}

	// 收集所有的观察者
	attach(observer) {
		this.observers.push(observer);
	}
	// 更新被观察者状态的方法 
	setState(newState) {
		this.state = newState;
		this.observers.forEach(observer => observer.update(this))
	}
}
// 观察者
class Observer {
	constructor(name) {
		this.name = name;
	}
	update(student) {
		console.log(`${this.name} has been informed, ths status of student is ${student.state}`)
	}
}

const student = new Subject('学生')
const parent = new Observer('父母')
const teacher = new Observer('老师')

student.attach(parent);
student.attach(teacher);
student.setState('被欺负了')