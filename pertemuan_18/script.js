// Class
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    displayFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

class Student extends Person{
    constructor(firstName, lastName, NIM){
        super(firstName, lastName);
        this.NIM = NIM;
    }

    displayNIM() {
        console.log(`Your NIM is ${this.NIM}`);
    }
    static sayHello() {
        console.log(`Hello World`)
    }

    //Setter and Getter
    set studentScore(score){
        this.score = score;
    }
    get studentScore(){
        return this.score;
    }
}

const john = new Student("John", "Doe", "112233");
john.displayFullName();
john.displayNIM();
Student.sayHello();

john.studentScore = 90;
console.log(john.studentScore);