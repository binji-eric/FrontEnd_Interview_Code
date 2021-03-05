class Queue{
	constructor(){
		this.taskList = []
	}
	task(delay,fn){
		function callback(){
			return new Promise(function(res,rej){
				setTimeout(() => {
					fn()
					res()
				}, delay);
			})
		}
		this.taskList.push(callback)
		return this
	}
	async start(){
		while(this.taskList.length){
			await this.taskList.shift()()
		}
	}
}
new Queue()
	.task(1000, () => {
		console.log(1)
	})
	.task(2000, () => {
		console.log(2)
	})
	.task(1000, () => {
		console.log(3)
	})
	.start()

