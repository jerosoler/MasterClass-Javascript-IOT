const { Board, Joystick } = require("johnny-five");
const robot = require("robotjs");

const board = new Board();


board.on("ready", () => {
  // Create a new `joystick` hardware instance.
   var joystick = new Joystick({
     //   [ x, y ]
     pins: ["A0", "A1"]
   });

   joystick.on("change", function() {
     console.log("Joystick");
     console.log("  x : ", this.x);
     console.log("  y : ", this.y);
     console.log("--------------------------------------");


     if(this.x > 0.9) {
       robot.keyTap("up");
     }
     if(this.x < -0.9) {
       robot.keyTap("down");
     }
     if(this.y > 0.9) {
       robot.keyTap("right");
     }
     if(this.y < -0.9) {
       robot.keyTap("left");
     }
   });
});
