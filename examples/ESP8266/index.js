var five = require('johnny-five');
var Firmata = require("firmata");
var EtherPortClient = require('etherport-client').EtherPortClient;

var board = new five.Board({
    port: new EtherPortClient({
        host: "192.168.1.110",
        port: 3030
    }),
    timeout: 1e5,
    repl: false
});

board.on("ready", function() {
    console.log("READY!");
    var led = new five.Led(2);
    led.blink(500);
});
