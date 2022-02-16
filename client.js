const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Successfully connected to game server')
  })

  conn.on('connect', () => {
    conn.write('Name: MAZ');
  });

  // conn.on('connect', () => {
  //   conn.write('Move: up');
  // });

  // conn.on('connect', () => {
  //  setInterval(() => conn.write('Move: right'), 1000);
  // });

  conn.on("data", (data) => {
    console.log('this is the data', data);
  });

  

  return conn;
};

module.exports = {
  connect
};