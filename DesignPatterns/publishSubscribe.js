class EventEmitter {
	constructor() {
		this._events = this._events || new Map();
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
function fn1(){
	console.log('fn1');
}
function fn2(){
	console.log('fn2');
}
test.addListener('first', fn1);
test.addListener('first', fn2);
test.emit('first')
console.log("*********")
test.removeListener('first', fn1);
test.emit('first')