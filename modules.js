/* MODULES AND REQUIRE */
// const peopleInfo = require("./people.js");

// console.log(peopleInfo);
// console.log(peopleInfo.people);
// console.log(peopleInfo.ages);

// Importing (requiring) just the properties of the people module
const {persons} = require("./people.js"); // Only the "persons" property is available in modules.js
console.log(persons);

const {ages} = require("./people.js"); // Importing the "ages" property too
console.log(ages);

// The above two properties can be easily combined to be retrieved together in one call
const personsInfo = require("./people.js");
console.log(personsInfo);