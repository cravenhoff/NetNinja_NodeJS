const fs = require("fs");
const path = require("path");

// Create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, err => {
//     if(err) {
//         throw err;
//     }

//     console.log("Folder created...");
// });

// Create and write to file
// fs.writeFile(path.join(__dirname, "/test", "hello.txt"), "Hello World!", err => {
//     if(err) {
//         throw err;
//     }
//     console.log("File written to...");
// })

// Updates / replaces any current file contents to the text included here
// fs.writeFile(path.join(__dirname, "/test", "hello.txt"), "I love Node.js!", err => {
//     if(err) {
//         throw err;
//     }
//     console.log("File written to...");

//     // Append a file instead of writing to it
//     fs.writeFile(path.join(__dirname, "/test", "hello.txt"), " We just appended the file :)", err => {
//         if(err) {
//             throw err;
//         }
    
//         console.log("Node.js in action...");
//     })
// })

// Read File
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
   if(err) {
       throw err;
   }

   console.log(data);
})

// Rename file
fs.rename(path.join(__dirname, "/test", "hello.txt"), path.join(__dirname, "/test", "helloword.txt"), err => {
    if(err) {
        throw err;
    }

    console.log("File renamed...");
})