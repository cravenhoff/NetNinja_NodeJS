const fs = require("fs");

// // Reading files
// fs.readFile("./docs/blog1.txt", (err, data) => {
//     if(err) {
//         console.log(err);
//     }

//     // sends out a buffer instead of the actual contents of the file it's reading
//     console.log(data.toString()); // toString() is used to convert the buffer into a string
// });

// // Showing how the fs methods are "asynchronous"
// console.log("last line...");

// // Writing files
// fs.writeFile("./docs/blog1.txt", "hello, world", (err, data) => {
//     if(err) {
//         console.log(err);
//     }

//     console.log("file was written...");
// })

// // Created a file that did not exist
// fs.writeFile("./docs/blog2.txt", "hello, ninjas", (err, data) => {
//     if(err) {
//         console.log(err);
//     }

//     console.log("file was written...");
// })

// Create and Delete Directories
if(!fs.existsSync("./assets")) { // existsSync() is synchronous
    fs.mkdir("./assets", (err) => {
        if(err) {
            console.log(err);
        }
    
        console.log("folder created...");
    })
} else {
    console.log("folder already exists...");
    fs.rmdir("./assets", (err) => {
        if(err) {
            console.log(err);
        }
        console.log("folder deleted...");
    })
}

// Delete files