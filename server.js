var http = require('http');
var url  = require('url');
function start() {
  http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log("Request for "+pathname+" received.");
    res.writeHead(200,{"Content-Type": "text/plain"});
    res.write("Hello World");
    res.end();
    }).listen(8888);
  console.log("Server started.");
}
exports.start=start

