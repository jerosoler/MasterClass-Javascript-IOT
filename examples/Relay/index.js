const { Board, Relay } = require("johnny-five");
const board = new Board();

board.on("ready", () => {

  var relay = new Relay(10);

  board.repl.inject({
    on: function() {
     relay.on();
   },
   off: function() {
     relay.off();
   }
  });


});
