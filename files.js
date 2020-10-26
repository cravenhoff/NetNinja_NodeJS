const fs = require("fs");

// Reading files
fs.readFile("./docs/blog1.txt", (err, data) => {
    if(err) {
        console.log(err);
    }

    // sends out a buffer instead of the actual contents of the file it's reading
    console.log(data.toString()); // toString() is used to convert the buffer into a string
});

// Showing how the fs methods are "asynchronous"
console.log("last line...");

// Writing files


// Create and Delete Directories


// Delete files