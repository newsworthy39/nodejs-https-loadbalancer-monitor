var http = require('http');
var request = require('request');

const PORT = process.env.PORT || 8080;
const IP   = process.env.IP || "localhost"
const DEBUG = process.env.DEBUG || false

var myjsonobject = { "backend":`http://${IP}:${PORT}`}
var global = {};

// Register shutdown-function.
var register = function(callback) {
	var myjsonobject = { "backend":`http://${IP}:${PORT}`}
	var backendid = 888;
	request.post("https://api.clouddom.eu/loadbalancer/11/backends", { 
		headers: {
			"accesskey" : "test",
			"secret":"test"	
		},
		json: true,
		body: myjsonobject,
	},function(error, response, body) {
		callback(body);
	});

}


// Register shutdown-function.
var shutdown = function() {
	var mypath = "https://api.clouddom.eu/loadbalancer/11/backends/" + global.backend;
	request.delete(mypath, { 
		headers: {
			"accesskey" : "test",
			"secret":"test"	
		},
	},function(error, response, body) {
		process.exit();
	});
}
process.on( "SIGINT", shutdown);


// Setup server-part.
const app = require('http').createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html', 'X-ServedBy': IP + ":" + PORT });
    res.end("This is a monitor-api.");
});

app.listen(PORT, () => {
	console.log(`The server is listening on *:${PORT}`);
	register( function(body) {
		var id = body.backendid
		global.backend = id;
	});
});
	

