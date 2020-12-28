class EventEmitter {
	constructor() {
		this.events = {}
	}

	on(event, handler) {
		this.events[event] = this.events[event] || []
		this.events[event].push(handler)
	}

	off(event, handler) {
		if(this.events[event]) {
			const index = this.events[event].indexOf(handler)
			this.events[event].splice(index, 1)
		}
	}

	emit(event, ...args) {
		const handlers = this.events[event]
		handlers.forEach(fn => {
			fn(...args)
		})
	}

	once(event, handler) {
		const fn = () => {
			handler()
			this.off(event, handler)
		}
		this.on(event, handler)
	}
}

const event = new EventEmitter()

const handle = (...pyload) => console.log(pyload)

event.on('click', handle)

event.emit('click', 100, 200, 300, 100)

event.off('click', handle)

event.emit('click', 199, 299)

event.once('dbclick', function() {
  console.log('click')
})

event.emit('dbclick', 100)



