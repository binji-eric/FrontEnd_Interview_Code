function myNew() {
  const obj = {};
  const constructor = Array.prototype.shift.call(arguments);
  obj.__proto__ = constructor.prototype;
  const res = constructor.apply(obj,arguments);
  return typeof res == 'object' ? res: obj;
}

function test1() {
	this.name = 'eric'
}


const newTest1 = myNew(test1);
console.log(newTest1);