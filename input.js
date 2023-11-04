const { stdin } = require('process');
const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, SAY_MSG_01, SAY_MSG_02, SAY_MSG_03 } = require('./constants');

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
  if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
  }
  if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }
  if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }
  if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }
  if (key === SAY_MSG_01) {
    connection.write("Say: I'm a hungry boy");
  }
  if (key === SAY_MSG_02) {
    connection.write("Say: i luv u :3");
  }
  if (key === SAY_MSG_03) {
    connection.write("Say: tastes great");
  }
};

module.exports = { setupInput, };