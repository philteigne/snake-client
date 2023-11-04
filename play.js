const { stdin } = require('process');

const connect = require('./client').connect;
const input = require('./input');

console.log("Connecting ...");
connect();
input();