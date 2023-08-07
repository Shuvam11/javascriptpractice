const http = require("http");
const date = require("./myModule");

const myFunction = (req, res) => {
    const dateTime = date();
res.send("hello world");
};
http.createServer(myFunction).listen(3000);
console.log("App is running on port 3000");