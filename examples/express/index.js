const { Board, Led } = require("johnny-five");
const board = new Board();

const express = require('express');

  let app = express();


board.on("ready", () => {
  const led = new Led(13);

  app.get('/on', function (req, res) {
    led.on();
    res.send(true);
  });

  app.get('/off', function (req, res) {
    led.off();
    res.send(true);
  });

});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
