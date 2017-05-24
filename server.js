//This is the web server that will run alongside the IRC Bot.
var http = require('http');
var url = require('url');
var querystring = require('querystring');

console.log("server started")
var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
	var params = querystring.parse(url.parse(req.url).query);
    console.log(page);
    res.writeHead(200, {"Content-Type": "text/plain"});

        res.write("test server");
    res.end();
});

server.on('close', function() {
	console.log("server Terminated.")
})

server.listen(8080);

