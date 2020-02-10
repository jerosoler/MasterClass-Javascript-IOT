# Ejemplo ESP8266

![Image boards](https://github.com/jerosoler/MasterClass-Javascript-IOT/blob/master/docs/ESP8266.jpg)
Conectar LED en PIN 2 (D4).

## Configurar Entorno arduino
[ESP8266 arduino](https://github.com/esp8266/Arduino)

- Install the current upstream Arduino IDE at the 1.8.7 level or later. The current version is on the [Arduino website](https://www.arduino.cc/en/main/software).
- Start Arduino and open the Preferences window.
- Enter ```https://arduino.esp8266.com/stable/package_esp8266com_index.json``` into the *Additional Board Manager URLs* field. You can add multiple URLs, separating them with commas.
- Open Boards Manager from Tools > Board menu and install *esp8266* platform (and don't forget to select your ESP8266 board from Tools > Board menu after installation).

## Configurar wifconfig.h
- STEP 3: SSID
- STEP 4: Static IP, MASK, Gateway
- STEP 6: WPA Passphrase


## Arrancar
```
node examples/ESP8266/index.js
```
