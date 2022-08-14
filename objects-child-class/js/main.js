//Create an a class and extend it - Can be anything you would like it to be! 
// parent class
class Animal {
    constructor(name, age, farmName){
        this._name = name;
        this._age = age;
        this._farmName = farmName;
    }
    get name(){
        return this._name;
    }
    get age(){
        return this._age;
    }
    get farmName(){
        return this._farmName;
    }
    speak(){
        console.log(`${this._name} makes a sound`);
    }
}
// domesticated animal class
class Domesticated extends Animal {
    constructor(name, age, farmName, breed){
        super(name, age, farmName);
        this._breed = breed;
    }
    get breed(){
        return this._breed;
    }
}
// wild animal class
class Wild extends Animal {
    constructor(name, age, farmName, species){
        super(name, age, farmName);
        this._species = species;
    }
    get species(){
        return this._species;
    }
}
// child class
class Dog extends Domesticated {
    constructor(name, age, farmName, breed){
        super(name, age, farmName, breed);
    }
    speak(){
        super.speak();
        console.log(`${this._name} barks`);
    }
}
// child class
class Cat extends Domesticated {
    constructor(name, age, farmName){
        super(name, age, farmName);
    }
    speak(){
        super.speak();
        console.log(`${this._name} meows`);
    }
}
// child class
class Bird extends Wild {
    constructor(name, age, farmName, species){
        super(name, age, farmName, species);
    }
    speak(){
        super.speak();
        console.log(`${this._name} chirps`);
    }
}

let simba = new Dog('Simba', 5, 'Dog', 'Sheperd');
let oliver = new Cat('Oliver', 6, 'Cat', 'Tomcat');
let jill = new Bird('Jill', 2, 'Bird', 'Cardinal');

let farmAnimals = [simba, oliver, jill];

for(a of farmAnimals){
    a.speak();
}