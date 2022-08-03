const http = require('http');
const Abc = require('./Abc');
const Server = http.createServer(Abc);

Server.listen(3000,console.log("app is running"));