//require varibles
const http = require("http");
const fs = require('fs');

//set the local host location and port
const hostname = "127.0.0.1";
const port = 3200;

//varibles for each page
const homepage = fs.readFileSync("./home.html");
const aboutpage = fs.readFileSync("./about.html");
const portfoliopage = fs.readFileSync("./portfolio.html");
const contactpage = fs.readFileSync("./contact.html");

//redirectes user to the requested page
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(homepage);
    } else if (req.url === "/home.html") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(homepage);
    }else if (req.url === "/about.html") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(aboutpage);
    } else if (req.url === "/portfolio.html") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(portfoliopage);
    } else if (req.url === "/contact.html") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(contactpage);
    }
    else if (req.url.match("\.jpg$")) {
        try {
            res.statusCode = 200;
            res.setHeader("Content-Type", "image/jpg");
            imgLoc = req.url.replace("/", "./");
            console.log(imgLoc);
            image = fs.readFileSync(imgLoc);
            res.end(image);
        } catch {
            res.statusCode = 404;
            res.write("404");
            console.log(req.url);
        }
    } else {
        //if the page cannot be found run error
        res.statusCode = 404;
        res.write("404");
        console.log(req.url);
    }
    res.end();
});
//Runs servers
server.listen(port, hostname, () => {
    console.log("Server is now running");
});