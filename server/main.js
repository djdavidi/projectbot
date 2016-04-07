'use strict';
var chalk = require('chalk');

// Requires in ./db/index.js -- which returns a promise that represents
// mongoose establishing a connection to a MongoDB database.
var startDb = require('./db');

// Create a node server instance! cOoL!
var server = require('http').createServer();

var createApplication = function () {
    var app = require('./app');
    server.on('request', app); // Attach the Express application.
    // require('./io')(server);   // Attach socket.io.
};

var startServer = function () {

    // var PORT = process.env.PORT || 1337;
    var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
	var PORT = process.env.OPENSHIFT_NODEJS_PORT || 1337;

    server.listen(PORT,ipaddress, function () {
        console.log(chalk.blue('Server started on PORT', chalk.magenta(PORT)));
    });

};

startDb.then(createApplication).then(startServer).catch(function (err) {
    console.error(chalk.red(err.stack));
    process.kill(1);
});
