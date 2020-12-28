class myClass {
  constructor(name) {
    this.name = name;
  }	
  method1() {
  	console.log('this is method1', this.name)
	}
}

const class1 = new myClass('eric')
const class2 = new myClass('david')
class1.method1();
class2.method1();
// to prove that methods in class is loadded to the prototype
console.log(class1.method1 == class2.method1)