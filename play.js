const { stdin } = require('process');

const connect = require('./client').connect;

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true); //  removes ability to use ctrl+C to exit
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') { //  exits process when user inputs ctrl+C
    process.exit();
  }
};

stdin.on("data", handleUserInput);

console.log("Connecting ...");
connect();
setupInput();