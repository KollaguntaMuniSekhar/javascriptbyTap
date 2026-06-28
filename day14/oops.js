class Employee{
    name;
    department;
    #salary;//private
    constructor(name,department,salary){
         this.name=name;
         this.department=department;
         this.#salary=salary;
    }

    set salary(newSalary){
        this.#salary=newSalary
    }
    get salary(){
        return this.#salary
    }
    getDetails(){
        console.log(`${this.name} || ${this.department} ||${this.#salary}`);
    }
}
const e1=new Employee("Ash","dev",8000);
console.log(e1);
console.log(e1.salary);
e1.getDetails();

class Demo{
    constructor(name){
        if(this.constructor===Demo){
            throw  new Error("cannot Instanciate abstract class");
        }
        this.name=name;
    }
    work(){
       throw new Error("work must be  Implemented");
    }
}
class child extends Demo{

}
const c=new Child();
console.log(c);