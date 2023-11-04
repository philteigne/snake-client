const { stdin } = require('process');
const { INPUT_MAP } = require('./constants');

// Stores the active TCP connection object.
let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') { //  exits process when user inputs ctrl+C
    process.exit();
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true); //  removes ability to use ctrl+C to exit
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  stdin.on("data", interpretInput);
  return stdin;
};

// interpret user input as directional movements in the game

const interpretInput = (key) => {
  connection.write(INPUT_MAP[key]);
};

module.exports = { setupInput, };