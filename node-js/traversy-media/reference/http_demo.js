const http = require("http");
// console.log(http);

// Create server object
http.createServer((req, res) => {
    // Write a response
    res.write("Hello World");
    res.end();
}).listen(5000, () => {
    console.log("Server running...");
})