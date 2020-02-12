# Ejemplo Joystic

![Image boards](https://github.com/jerosoler/MasterClass-Javascript-IOT/blob/master/docs/joystick.png)

## Problemas al instalar robotjs
* Windows
  * windows-build-tools npm package (`npm install --global --production windows-build-tools` from an elevated PowerShell or CMD.exe)
* Mac
  * Xcode Command Line Tools.
* Linux
  * Python (v2.7 recommended, v3.x.x is not supported).
  * make.
  * A C/C++ compiler like GCC.
  * libxtst-dev and libpng++-dev (`sudo apt-get install libxtst-dev libpng++-dev`).

Install node-gyp using npm:

```
npm install -g node-gyp
```

Then build:

```
node-gyp rebuild
```

See the [node-gyp readme](https://github.com/nodejs/node-gyp#installation) for more details.


## Simula las flechas del teclado
Arriba, Abajo, Derecha, Izquierda

## Arrancar
```
node examples/Joystick/index.js
```


## Test
[https://paper-io.com](https://paper-io.com)
