const path = require("path");

// Basename Method: Gets the base filename
console.log(path.basename(__filename)); // outputs path_demo.js

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename)); // Outputs .js

// Create path object
console.log(path.parse(__filename)); // Outputs the .js file object
// console.log(path.parse(__filename).dir); // Outputs the directory
// console.log(path.parse(__filename).base); // Outputs the base name
// console.log(path.parse(__filename).ext); // Outputs the file extension (.js)
// console.log(path.parse(__filename).name); // Outputs the file name (path_demo)

// Concatenate paths: works well for delimiters as different OS handle them differently
console.log(path.join(__dirname, "test", "hello.html")); // Creates the folder structure: test/hello.html