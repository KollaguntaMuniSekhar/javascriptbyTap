
class Student{
    constructor(name,age,skill){
        this.name=name;
        this.age=age;
        this.skill=skill;
        // Student.prototype.Introduce=function(){
        //     console.log(`Hi I am ${name} I am ${this.age} years old`);
        //     console.log(`I have ${this.skill} skill`);
        // };
    }

         Introduce(){
            console.log(`Hi I am ${this.name} I am ${this.age} years old`);
            console.log(`I have ${this.skill} skill`);
        }
    
}
const s1=new Student("Darshan",23,"JS");
const s2=new Student("Vaishu",22,"java");
s1.Introduce();
s2.Introduce();