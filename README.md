# Plants Watering Machine

Server for Raspberry Pi to transform it to plant watering machine.

Servo should be installed to some water sprinkle and sensor should be placed near plant to watch humidity in area. Sensor reads humidity every 5 seconds and if humidity is lower then defined value then servo push sprinkle. Humidity value is loged to database every sensor data reading. Led blinks after every succesfull logging. 

## Hardware

1. Paspberry Pi Model B+
2. Temperature & Humidity Sensor (AM2302)
3. Led
4. Servo (TGY-390DMH)

![Screenshots](/src/README/board.jpg)

## How to Connect

1. Sensor:
    - 39 phisical pin (GND)
    - 7 phisical pin (GPIO 4)
    - 17 phisical pin (3.3v)
2. Servo:
    - 2 phisical pin (5v)
    - 6 phisical pin (GND)
    - 12 phisical pin (GPIO 18)
3. Led:
    - 9 phisical pin (GND)
    - 13 phisical pin (GPIO 27)

- install Rasbian OS to MiniSD Card
- install card to Raspbery
- Connect LAN to Raspberry and micro USB for charging
- in terminal run `arp -a` to display all devices in your network and find your Raspberry
- connect to Raspberry via ssh `ssh pi@<your raspberry IP>` ('raspberry' is default password)
- install NodeJS to Raspberry
- clone repo
- install [BCM2835](http://www.airspayce.com/mikem/bcm2835/) library
- install dependencies `npm i`
- run server with root `sudo PORT=<port> NODE_ENV=<env> MONGODB_USER=<user> MONGODB_PASSWORD=<password> node index.js` (MONGODB_USER and MONGODB_PASSWORD are required)