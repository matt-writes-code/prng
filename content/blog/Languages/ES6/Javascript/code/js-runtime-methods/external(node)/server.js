/*jshint esversion: 6 */


// ----------------------------------------------
// SO NN TRAINING ETC ETC HAPPENS FIRST
// THEN HTML IS SERVED
// THEN CERTAIN THINGS ARE LISTENED TO FROM HTML
// ----------------------------------------------

// -------------------------------------------------------------
// SERVER SIDE
// -------------------------------------------------------------


// THIS IS THE PART THAT RUNS HTTP AND SERVES HTML
// -------------------------------------------------------------
var fs = require("fs");
var http = require("http");
var url = require("url");

http.createServer(function (request, response) {

    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    response.writeHead(200);

    if(pathname == "/") {
        html = fs.readFileSync("index.html", "utf8");
        response.write(html);
    } else if (pathname == "/client.js") {
        script = fs.readFileSync("client.js", "utf8");
        response.write(script);
    }

    response.end();
}).listen(8888);

console.log("Listening to server on 8888...");

