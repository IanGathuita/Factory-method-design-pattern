/*Unlike simple factory which  describes a class that has one creation method WITH A CONDITIONAL,
this one provides an interface for creating objects  but allows subclasses to alter the type of an object that will be created. */
interface Animal{
    printAnimalType():void;
    printAnimalSound():void;
}

class Dog implements Animal{
    printAnimalType() {
        console.log("I am a dog");
    }
    printAnimalSound(): void {
        console.log("Woof woof");
    }
}

class Cat implements Animal{
    printAnimalType() {
        console.log("I am a cat");
    }
    printAnimalSound(): void {
        console.log("Meowww");
    }
}

interface AnimalFactory{  
    //factory method that subclasses will use to create objects  
    makeAnimal():Animal;
}

class DogFactory implements AnimalFactory{    
    makeAnimal() {
        return new Dog();        
    }
}

class CatFactory implements AnimalFactory{   
    makeAnimal(){
        return new Cat();
    }
}


//client code
let  myCat:Animal = new CatFactory().makeAnimal();
let myDog:Animal = new DogFactory().makeAnimal();

myCat.printAnimalSound();
myCat.printAnimalType();

myDog.printAnimalSound();
myDog.printAnimalType();