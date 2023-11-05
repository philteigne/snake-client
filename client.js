const net = require("net");
const { IP, PORT, PLAYER_INITIALS } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT  // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log(`${PLAYER_INITIALS} Successfully connected to game server`);
    conn.write(`Name: ${PLAYER_INITIALS}`);
  });

  conn.on("data", (data) => {
    // prints data recieved from server
    console.log(data);
  });

  return conn;
};

module.exports = { connect };