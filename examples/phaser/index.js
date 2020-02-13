const { Board, Proximity } = require("johnny-five");
const board = new Board();

const express = require('express');
let app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http);


app.use(express.static(__dirname + '/public'));

//SOCKET
io.on('connection', function(socket){
});

function sendposition(centimeters){
  io.emit('position', centimeters);
}

//JOHNNY FIVE
board.on("ready", () => {
  const proximity = new Proximity({
    controller: "HCSR04",
    pin: 7,
    freq: 1
  });


  proximity.on("change", () => {

    const {centimeters, inches} = proximity;
    /*console.log("Proximity: ");
    console.log("  cm  : ", centimeters);
    console.log("  in  : ", inches);
    console.log("-----------------"); */
    sendposition(centimeters);
  });
});






http.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
