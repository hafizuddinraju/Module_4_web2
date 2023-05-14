class Person{
    name:string;
    age:number;
    address:string;
    constructor(name:string, age:number,address:string){
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours: number): string {
        return `This ${this.name} will sleep for ${hours}`;
      }
}
class Student extends Person{
    constructor(name:string,age:number, address:string){
        super(name, age, address)
    }
    

}
const student1 = new Student('Raju', 24, 'Dhaka');
 const studentInfo = student1.makeSleep(2)
 console.log(studentInfo);

 class Teacher extends Person{
    dis:string;
    constructor(name:string, age:number, address:string, dis:string){
        super(name,age,address)
        this.dis = dis
    }
    takeAClass(numberOfClass: number):string{
        return `This ${this.name} will take ${numberOfClass} class`

    }
 }
 const teacher1 = new Teacher('Shanto', 28, 'love Road', 'Teacher');
 const teacherInfo = teacher1.takeAClass(4);
 console.log(teacherInfo);