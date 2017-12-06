.. _sensor_dev:

Sensor instruction
==================

Now, we are going to prepare the connections between the control unit and the sensors.
The image below can help you in the hookup of the sensors.

+-----------------------+
| |hookup_sensors|      |
+-----------------------+

DS18B20
-------

The temperature sensor usually comes with a cable length of about 90 cm.
You may need to extend the calble to fit to the distance between the
main box installation and the place where you will install the temperature sensor.
We generally extend it with a 1.5 meter cable by soldering.

From DS18B20 to connector:

* GND (black) --> M05 (black)
* VIN (red) --> M06 (red)
* DATA (blue or yellow) --> M07 (blue) -->  D9 (Arduino PIN)

.. note::
   The **DS18B20** needs a **4.7 kΩ** resistor between the data (yellow or blue)
   and the VIN (red) cable. You can solder it or plug and lock it directly in the
   terminal block.

   +-----------------------+
   | |ds18b20_wired|       |
   +-----------------------+

BME280
------

This sensor uses the I2C (`link`_) connection. It needs 5V as input voltage.
Use a *4 core cable* to connect the sensor breakout board and the control unit.

From BME280 to connector:

* GND (black) --> M09 (black)
* 5V or VIN or VCC (red) --> M10 (red)
* SDI or SDA (green) --> M11 (green) --> SDA (Arduino PIN)
* SCK or SCL (white) --> M12 (white) --> SCL (Arduino PIN)

+-----------------------+
| |BME280_pinout|       |
+-----------------------+

BH1750
------

This sensor uses the I2C connection.
Use a *4 core cable* to connect the sensor breakout board and the control unit.

From BH1750 to connector:

* GND (black) --> M15 (black)
* 5V or VIN or VCC (red) --> M16 (red)
* SDI or SDA (green) --> M13 (green) --> SDA (Arduino PIN)
* SCK or SCL (white) --> M14 (white) --> SCL (Arduino PIN)

+-----------------------+
| |BH1750_pinout|       |
+-----------------------+

RAIN COLLECTOR
--------------

The rain sensor DAVIS Aerocone 6465 has a RJ11 connector. If you do not have
an adapter cut it and prepare the connection as follow.

From Davis AeroCone to connector (terminal block barrier):

* DATA1 (red) --> M20 (black)
* DATA2 (green or yellow) --> M19 (blue) --> D2 (Arduino PIN)

.. note::
   The **rain collector** needs a **47 Ω** resistor between the data (green or yellow)
   and the VIN (red) input connector of the M22.

ANEMOMETER
----------

The anemometer, which is composed by wind direction and speed, has the
following pinout from anemometer to terminal block barrier:

* GND and 5V (black and red) --> M21 (black)
* speed data (yellow) --> M24 (blue) --> D3 (Arduino PIN)
* direction data (green) --> M23 (yellow) --> A0 (Arduino PIN)

.. note::
   The **wind direction** needs a **10 kΩ** resistor between the data (green)
   and the VIN (red) input connector of the M22.
   The **wind speed** needs a **47 Ω** resistor between the data (yellow)
   and the VIN (red) input connector of the M22.

+-----------------------+
| |wind_pinout|         |
+-----------------------+

..
  YL-69
  ------

  The soil moisture sensor needs only two data cables.

  From terminal block barrier to YL-69:

  * data1 --> SX PIN
  * data2 --> DX PIN

  +-----------------------+
  | |ds18b20_wired|       |
  +-----------------------+

**Go to** :ref:`code`

.. references

.. _link: https://en.wikipedia.org/wiki/I%C2%B2C

.. |ds18b20_wired| image:: ../../../../_static/sensors/ds18b20_wired.jpg
  :width: 25%
  :target: ../../../../_static/sensors/ds18b20_wired.jpg

.. |wind_pinout| image:: ../../../../_static/sensors/WIND_pinout.jpg
  :width: 25%
  :target: ../../../../_static/sensors/WIND_pinout.jpg

.. |BME280_pinout| image:: ../../../../_static/sensors/BME280_pinout.jpg
  :width: 25%
  :target: ../../../../_static/sensors/BME280_pinout.jpg

.. |BH1750_pinout| image:: ../../../../_static/sensors/BH1750_pinout.jpg
  :width: 25%
  :target: ../../../../_static/sensors/BH1750_pinout.jpg

.. |hookup_sensors| image:: ../../../../_static/instructions/hookup_sensors.png
  :width: 70%
  :target: ../../../../_static/instructions/hookup_sensors.png
