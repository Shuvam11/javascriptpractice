const http = require("http");
const date = require("./myModule");

const myFunction = (req, res) => {
    const dateTime = date();
    res.end(`${dateTime}`);
};
http.createServer(myFunction).listen(4000);
console.log("App is running on port 3000");