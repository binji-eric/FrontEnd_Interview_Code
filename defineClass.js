class Person {
    #age = 0;
    constructor(name) {
        this.name = name;
    }
    setAge(age) {
        this.#age = age;
    }
    getAge() {
        return this.#age;
    }
}

class Teacher extends Person {
    #studentCount = 0;
    constructor(name) {
        super(name)
        this.setStudentCount = function(count) {
            this.#studentCount = count;
        }
        this.getStudentCount = function () {
            return this.#studentCount;
        }
    }
}

const jack = new Teacher('jack');
jack.setStudentCount(200);
console.log(jack.name);
console.log(jack.getAge());
console.log(jack.getStudentCount());