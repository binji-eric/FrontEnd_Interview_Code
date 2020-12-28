class EventEmitter {
	constructor() {
		this._events = new Map();
		// this._maxListeners = this._maxListeners || 10;
	}
}

EventEmitter.prototype.addListener = function(type, fn) {
	if(this._events.has(type)) {
		const handlers = this._events.get(type);
		handlers.push(fn);
	} else {
		const handlers = [];
		handlers.push(fn);
		this._events.set(type, handlers);
	}
}

EventEmitter.prototype.emit = function(type, ...args) {
	if(!this._events.has(type)) {
		return false
	}
	const handlers = this._events.get(type);
	handlers.forEach((handler) => {
		handler.apply(this, args);
	})
	return true;
}

EventEmitter.prototype.removeListener = function(type, fn) {
	if(!this._events.has(type)) {
		return false;
	}
	const handlers = this._events.get(type);
	for(let i = 0; i < handlers.length; i++) {
		if(handlers[i] === fn) {
			handlers.splice(i, 1);
			break;
		}
	}
	if(handlers.length == 0) {
		this._event.delete(type);
	}
	return true;
}

const test = new EventEmitter();
function fn1(arg){
	console.log('fn1', arg);
}
function fn2(arg){
	console.log('fn2', arg);
}
test.addListener('first', fn1);
test.addListener('first', fn2);
test.emit('first', 'eric')
test.removeListener('first', fn1);
test.emit('first')