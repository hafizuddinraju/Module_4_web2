class Animal{
    // name:string;
    // spes:string;
    // sound:string;

    constructor(public name:string,  public spes:string,  public sound:string){
        // this.name = name;
        // this.spes = spes;
        // this.sound = sound;

    }
    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`);
    }
}
const dog = new Animal('doggy', 'Dog', 'Ghew Ghew')
dog.makeSound()