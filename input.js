const { moveDown, moveLeft, moveRight, moveUp, taunt } = require("./constants");

let connection;

  const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    (handleUserInput(key));
  }) 
  const handleUserInput = function (key) {
    if (key === moveUp) {
      conn.write('Move: up');
    }
  
    if (key === moveLeft) {
      conn.write('Move: left');
    }
  
    if (key === moveDown) {
      conn.write('Move: down');
    }
  
    if (key === moveRight) {
      conn.write('Move: right');
    }

    if (key === taunt) {
      conn.write("Big Shimmy Incomming");
    }
  
    if (key === '\u0003') {
      process.exit();
    }
  };



  return stdin;
};


module.exports = {
  setupInput,
};