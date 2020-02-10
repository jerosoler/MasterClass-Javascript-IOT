const {Board, Servo} = require("johnny-five");
const board = new Board();

board.on("ready", () => {
  const servo = new Servo(10);

  servo.sweep();
});
