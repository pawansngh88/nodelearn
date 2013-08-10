var http = require('http');
function start() {
  http.createServer(function(req, res) {
    console.log("Request received.");
    res.writeHead(200,{"Content-Type": "text/plain"});
    res.write("Hello World");
    res.end();
    }).listen(8888);
  console.log("Server started.");
}
exports.start=start

