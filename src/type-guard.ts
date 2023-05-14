type DataType = string | number
function add (param1:DataType, param2:DataType):DataType{
    if(typeof param1 === 'number' && typeof param2 === 'number'){
        return param1 +param2;
    }else{
        return param1.toString() + param2.toString()
    }

}
 const sum1 = add(3,5)
//  console.log(sum1);

 type NormalUser = {
    name:string
 }
 type AdminUser = {
    name:string;
    role:'Admin';
 }
 function getUser(user:NormalUser | AdminUser):string{
    if('role' in user){
        return ` I am ${user.role}`
    }
    else{
        return `I am a normal user`
    }
 }
 const data1:NormalUser = {name:'Rose'}
 const data2:AdminUser = {name:'Raju', role:'Admin'}

 const data3 = getUser({name:'Raju'})
 const data4 = getUser({name:'Raju', role:'Admin'})
//  console.log(data4);
//instaceof guard
class AnimalInfo {
    name: string;
    species: string;
    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
  
    makeSound() {
      console.log("I am making sound");
    }
  }
  class Dog extends AnimalInfo {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log(" I am barking");
    }
  }
  class Cat extends AnimalInfo {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeaw() {
      console.log("I am Meawing");
    }
  }
  function isDog(animal:AnimalInfo):animal is Dog{
    return animal instanceof Dog
  }
  function isCat(animal:AnimalInfo):animal is Cat{
    return animal instanceof Cat
  }
  function getAnimal (animal:AnimalInfo){
    if(isDog(animal)){
        animal.makeBark()
    }
    else if (isCat(animal)){
        animal.makeMeaw()
    }else{
        animal.makeSound()
    }
  }
  const animal1 = new Dog('Doggy', 'Dog')
  getAnimal(animal1)
  const animal2 = new Cat('Rose', 'Cat')
  getAnimal(animal2)