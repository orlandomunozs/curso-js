export class Animal {

    constructor(name, species) {
        if (!name || !species) {
            throw new Error("Name and species are required");
        }
        this._name = name;
        this._species = species;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for name with validation
    set name(value) {
        if (!value) {
            throw new Error("Name cannot be empty");
        }
        this._name = value;
    }

    // Method to make a generic sound
    makeSound() {
        this._name + " makes a generic sound.";
        `${this._name} makes a generic sound.`

        console.log(`${this._name} makes a generic sound.`);
    }

    // Method to describe the animal
    describe() {
        return `${this._name} is a ${this._species}.`;
    }

}

export class Dog extends Animal {
    constructor(name) {
        if (!name) {
            throw new Error("Name is required");
        }
        super(name, 'dog')
    }
    toBark() {
        return 'bark';
    }

}

export class Pug extends Dog {

}
const Buddy = new Animal("Buddy", "dog");
// Buddy.toBark()
const lucas = new Dog('Lucas');
lucas.toBark();
const last_name = ''
// const momo = new Pug();


console.log(lucas._name, lucas._species)

// Example usage
// const myAnimal = new Animal("Buddy", "dog");
// console.log(myAnimal.describe()); // Buddy is a dog.
// myAnimal.makeSound();             // Buddy makes a generic sound.

// myAnimal.name = "Max";            // Using the setter
// console.log(myAnimal.name);       // Using the getter → Max