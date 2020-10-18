/*

    NOTE:
    When working with modules or "file modules", node wraps all the code within modules in something called a "Module Wrapper".
    
    Syntax / Format:
    MODULE WRAPPER FUNCTION
    function wrapper(exports, require, module, __dirname, __filename) {
        // Module code wrapper in here
    }

    To prove that this exists, refer to the console.log() function on line 21.    

*/

// const person = {
//     name: "John Doe",
//     age: 30
// };

// Testing the module wrapper function
// console.log(__dirname, __filename);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}.`);
    }
}

// // Creating the above class using Function Constructors
// function Human(name, age) {
//     this.name = name;
//     this.age = age;

//     function greeting() {
//         console.log(`My name is ${this.name} and I am ${this.age}.`);
//     }
// }
// module.exports = Human;

module.exports = Person;

/* 

    --- CRASH COURSE 01: IMPORTING MODULE FILES ---

    const Person = require("./person"); // Called "Common JS"
    // const Human = require("./person");

    const person1 = new Person("John Doe", 30);
    person1.greeting(); 

    // const human1 = new Human("Max Payne", 25);
    // human1.greeting();

    // console.log(person);
    // console.log(person.name);
    // console.log(person.age);

*/