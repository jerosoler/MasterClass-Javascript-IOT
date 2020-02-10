# Ejemplo NeoPixel

![Image neopixel](https://github.com/jerosoler/MasterClass-Javascript-IOT/blob/master/docs/neopixel.jpeg)

## Instalación
Documentación: [https://github.com/ajfisher/node-pixel/blob/master/docs/installation.md](https://github.com/ajfisher/node-pixel/blob/master/docs/installation.md)

```
npm install -g nodebots-interchange
interchange install git+https://github.com/ajfisher/node-pixel -a uno --firmata
```

## Problemas:
`NoWritablePortError: Node Pixel FIRMATA controller requires IO that can write out`
[https://github.com/ajfisher/node-pixel/issues/148](https://github.com/ajfisher/node-pixel/issues/148)
Solución:
`npm install firmata@1.0.0`


## Conexión:
![Image neopixel](https://github.com/jerosoler/MasterClass-Javascript-IOT/blob/master/docs/neopixel.png)


```
node examples/Neopixel/index.js
```
