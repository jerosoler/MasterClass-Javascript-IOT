const { Board, Led } = require("johnny-five");
const board = new Board();

board.on("ready", () => {
  const led = new Led(13);

  // This will grant access to the led instance
  // from within the REPL that's created when
  // running this program.
  board.repl.inject({
    on: function() {
     led.on();
   },
   off: function() {
     led.off();
   }
  });


//>> off()  // to shut it off (stop doesn't mean "off")
//>> on()   // to turn on, but not blink

});
