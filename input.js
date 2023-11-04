const { stdin } = require('process');

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
const interpretInput = function(key) {
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
  if (key === 'j') {
    connection.write("Say: I'm a hungry boy");
  }
  if (key === 'k') {
    connection.write("Say: i luv u :3");
  }
  if (key === 'l') {
    connection.write("Say: tastes great");
  }
};

module.exports = { setupInput, };