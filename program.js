class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    greet = ()=>{
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

class Employee extends Person{
    constructor(name,age,title){
        super(name,age)
        this.title=title
    }
    work = ()=>{
        console.log(`${this.name} is working as a ${this.title}`)
    }
}

let person1= new Person("Amit",28)
let employee1 = new Employee("Santosh",27,"SDE1")
person1.greet();
employee1.greet();
employee1.work();