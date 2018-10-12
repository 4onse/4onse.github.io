.. _materials_common:

Materials
=========

This section list all the components that you need to build the 4onse-mod weather
station.

* :ref:`Sensors`
* :ref:`Control devices`
* :ref:`Items for solar shield`
* :ref:`Tools`

Sensors
--------

+------------------------+----------------------+---------------+---------------+-----------------------+--------------+
| Sensor name            | Observed property    |  Voltage      |  Datasheet    |  Photo                |  Price (USD) |
+========================+======================+===============+===============+=======================+==============+
| DS18B20                | Temperature          | from 3 to 5V  | `link1`_      | |ds18b20|             | ~ 3          |
+------------------------+----------------------+---------------+---------------+-----------------------+--------------+
| BME280                 | Pressure/humidity    | 5-3.3V        | `link2`_      | |bme280|              | ~ 11         |
+------------------------+----------------------+---------------+---------------+-----------------------+--------------+
| DHT11                  | Temperature/humidity | 5V            | `link3`_      | |dht11|               | ~ 5          |
+------------------------+----------------------+---------------+---------------+-----------------------+--------------+
| Wind speed             | Wind speed           | 5V            | `link4`_      | |wind_speed|          | ~ 25         |
+------------------------+----------------------+---------------+---------------+-----------------------+--------------+
| Wind direction         | Wind direction       | 5V            | `link4`_      | |wind_dir|            | ~ 26         |
+------------------------+----------------------+---------------+---------------+-----------------------+--------------+
| Davis aerocone 6465    | Pluviometer          | 5V            | `link5`_      | |davis6465|           | ~ 100        |
+------------------------+----------------------+---------------+---------------+-----------------------+--------------+
| YL-69                  | Soil moisture        | 5V            | `link6`_      | |yl69|                | ~ 1.5        |
+------------------------+----------------------+---------------+---------------+-----------------------+--------------+
| BH1750                 | Light                | 5V            | `link7`_      | |bh1750|              | ~ 5          |
+------------------------+----------------------+---------------+---------------+-----------------------+--------------+
| **Total price**        |  **~ 176.5 USD**                                                                            |
+------------------------+----------------------+---------------+---------------+-----------------------+--------------+

Return on top to :ref:`Materials`

Control devices
---------------

+------------------------+-----------------------+---------------+---------------+-----------------------+---------------+
| Sensor name            | Description           |  Voltage      |  Datasheet    |  Photo                |  Price (USD)  |
+========================+=======================+===============+===============+=======================+===============+
| LM393                  | Soil moisture adapter | 5V            | `link8`_      | |lm393|               | see YL-69     |
+------------------------+-----------------------+---------------+---------------+-----------------------+---------------+
| DS3231                 | RTC                   | 5V            | `link9`_      | |ds3231|              | ~ 5           |
+------------------------+-----------------------+---------------+---------------+-----------------------+---------------+
| OpenLog                | Data logger           | 5V            | `link10`_     | |openlog|             | ~ 15          |
+------------------------+-----------------------+---------------+---------------+-----------------------+---------------+
| SIM800                 | GPRS                  | 5V            | `link11`_     | |sim800|              | ~ 25          |
+------------------------+-----------------------+---------------+---------------+-----------------------+---------------+
| Step-down              | Step-down             | from 12 to 5V | `link11`_     | |step-down|           | ~ 7           |
+------------------------+-----------------------+---------------+---------------+-----------------------+---------------+
| Step-down              | Step-down             | from 12 to 7V | `link11`_     | |step-down|           | ~ 7           |
+------------------------+-----------------------+---------------+---------------+-----------------------+---------------+
| Arduino Mega 2560      | Microcontroller       | 7V            | `link12`_     | |arduino_mega|        | ~ 40          |
+------------------------+-----------------------+---------------+---------------+-----------------------+---------------+
| **Total price**        |  **~ 99 USD**                                                                                 |
+------------------------+-----------------------+---------------+---------------+-----------------------+---------------+

Return on top to :ref:`Materials`

Miscellaneous
-------------

+-----------------------+-------------------------------------------------+------------+---------------+
| Item                  | Type                                            | Pieces     | Price ~ (USD) |
+=======================+=================================================+============+===============+
| Screw                 | M3 x 6 mm                                       | 24 pcs     | 1             |
+-----------------------+-------------------------------------------------+------------+---------------+
| Spacer                | M3 x 10 mm - Female/Female                      | 12 pcs     | 0.9           |
+-----------------------+-------------------------------------------------+------------+---------------+
| Screw                 | M2 x 6 mm                                       | 14 pcs     | 1             |
+-----------------------+-------------------------------------------------+------------+---------------+
| Spacer                | M2 x 10 mm - Female/Female                      | 7 pcs      | 0.7           |
+-----------------------+-------------------------------------------------+------------+---------------+
| Screw                 | M2 x 16 mm                                      | 14 pcs     | 2             |
+-----------------------+-------------------------------------------------+------------+---------------+
| Bolt                  | M2                                              | 14 pcs     | 1.2           |
+-----------------------+-------------------------------------------------+------------+---------------+
| Screw                 | Size as needed to fix plexi to the box          | 2 pcs      | 1             |
+-----------------------+-------------------------------------------------+------------+---------------+
| Terminal              | Terminal block, barrier 12POS                   | 5 pcs      | 7             |
+-----------------------+-------------------------------------------------+------------+---------------+
| Corrugated tube       | M20 x 20 m                                      | 1 pcs      |               |
+-----------------------+-------------------------------------------------+------------+---------------+
| Plexiglass            | 4x210x250 mm                                    | 1 pcs      | 6             |
+-----------------------+-------------------------------------------------+------------+---------------+
| Plastic box           | 300x220x120 mm                                  | 1 pcs      | 20            |
+-----------------------+-------------------------------------------------+------------+---------------+
| Cable                 | 5 meters black and red                          | 1 pcs      | 4             |
+-----------------------+-------------------------------------------------+------------+---------------+
| Jumpers               | Black male/female (20 cm)                       | 5 pcs      | 0.5           |
+-----------------------+-------------------------------------------------+------------+---------------+
| Jumpers               | Red male/female (20 cm)                         | 8 pcs      | 0.9           |
+-----------------------+-------------------------------------------------+------------+---------------+
| Jumpers               | Blue male/female (20 cm)                        | 4 pcs      | 0.4           |
+-----------------------+-------------------------------------------------+------------+---------------+
| Jumpers               | Green male/male (20 cm)                         | 2 pcs      | 0.2           |
+-----------------------+-------------------------------------------------+------------+---------------+
| Jumpers               | White male/male (20 cm)                         | 2 pcs      | 0.2           |
+-----------------------+-------------------------------------------------+------------+---------------+
| Jumpers               | Green male/female (10/11 cm)                    | 1 pcs      | 0.05          |
+-----------------------+-------------------------------------------------+------------+---------------+
| Jumpers               | White male/female (10/11 cm)                    | 1 pcs      | 0.05          |
+-----------------------+-------------------------------------------------+------------+---------------+
| Jumpers               | Violet male/female (20 cm)                      | 2 pcs      | 0.2           |
+-----------------------+-------------------------------------------------+------------+---------------+
| Jumpers               | Orange male/female (20 cm)                      | 2 pcs      | 0.2           |
+-----------------------+-------------------------------------------------+------------+---------------+
| Jumpers               | Yellow male/female (20 cm)                      | 2 pcs      | 0.2           |
+-----------------------+-------------------------------------------------+------------+---------------+
| Jumpers               | Black male/female (10/11 cm)                    | 1 pcs      | 0.2           |
+-----------------------+-------------------------------------------------+------------+---------------+
| Jumpers               | Red male/female (10/11 cm)                      | 1 pcs      | 0.2           |
+-----------------------+-------------------------------------------------+------------+---------------+
| Resistor              | 4.7 kΩ                                          | 1 pcs      |               |
+-----------------------+-------------------------------------------------+------------+---------------+
| Resistor              | 10 kΩ                                           | 2 pcs      |               |
+-----------------------+-------------------------------------------------+------------+---------------+

Return on top to :ref:`Materials`

Items for solar shield
----------------------

+-----------------------+-------------------------------------------------+------------+---------------+
| Item                  | Type                                            | Pieces     | Price ~ (USD) |
+=======================+=================================================+============+===============+
| Threaded rod          | M3 x 20cm                                       | 3 pcs      | 6.2           |
+-----------------------+-------------------------------------------------+------------+---------------+
| Bolt                  | M3                                              | 3 pcs      | 0.2           |
+-----------------------+-------------------------------------------------+------------+---------------+
| Blind bolt            | M3                                              | 3 pcs      | 0.2           |
+-----------------------+-------------------------------------------------+------------+---------------+
| Screw                 | M3 x 5 mm                                       | 2 pcs      | 0.2           |
+-----------------------+-------------------------------------------------+------------+---------------+
| Spacer                | M3 x 10 mm - Female/Female                      | 1 pcs      | 0.1           |
+-----------------------+-------------------------------------------------+------------+---------------+
| White plant saucer    | diameter 20 cm                                  | 7 pcs      | 11            |
+-----------------------+-------------------------------------------------+------------+---------------+
| Junction box          | D80 mm x H50 mm                                 | 1 pcs      | 5.5           |
+-----------------------+-------------------------------------------------+------------+---------------+
| Cable gland joint     | M20                                             | 3 pcs      | 1             |
+-----------------------+-------------------------------------------------+------------+---------------+
| Plastic tube          | 6M x 1 m                                        | 1 pcs      |               |
+-----------------------+-------------------------------------------------+------------+---------------+

Return on top to :ref:`Materials`

Tools
------

+-----------------------+-------------------------------------------------+------------+
| Item                  | Type                                            | Pieces     |
+=======================+=================================================+============+
| Screwdriver           | precision set                                   | 1 pcs      |
+-----------------------+-------------------------------------------------+------------+
| Multimeter            | to check voltge/current                         | 1 pcs      |
+-----------------------+-------------------------------------------------+------------+
| Cable stripper/cutter |                                                 | 1 pcs      |
+-----------------------+-------------------------------------------------+------------+
| Drill                 | bits M2, M2.5, M3, M4                           | 1 pcs      |
+-----------------------+-------------------------------------------------+------------+
| Welder                |                                                 | 1 pcs      |
+-----------------------+-------------------------------------------------+------------+
| Pond for welding      |                                                 | 1 pcs      |
+-----------------------+-------------------------------------------------+------------+

Return on top to :ref:`Materials`

.. References

.. _link1: https://datasheets.maximintegrated.com/en/ds/DS18B20.pdf
.. _link2: https://ae-bst.resource.bosch.com/media/_tech/media/datasheets/BST-BME280_DS001-11.pdf
.. _link3: http://www.micropik.com/PDF/dht11.pdf
.. _link4: https://www.sparkfun.com/datasheets/Sensors/Weather/Weather%20Sensor%20Assembly..pdf
.. _link5: https://www.davisnet.com/product_documents/weather/manuals/07395-334_IM_7852.pdf
.. _link6: https://www.amazon.it/Gaoxing-Tech-igrometro-rilevazione-intelligente/dp/B06XCLCM7H/ref=sr_1_7?s=electronics&ie=UTF8&qid=1502281430&sr=1-7&keywords=soil+moisture
.. _link7: http://cpre.kmutnb.ac.th/esl/learning/bh1750-light-sensor/bh1750fvi-e_datasheet.pdf
.. _link8: https://www.amazon.it/Gaoxing-Tech-igrometro-rilevazione-intelligente/dp/B06XCLCM7H/ref=sr_1_7?s=electronics&ie=UTF8&qid=1502281430&sr=1-7&keywords=soil+moisture
.. _link9: https://datasheets.maximintegrated.com/en/ds/DS1307.pdf
.. _link10: https://www.sparkfun.com/products/13712
.. _link11: http://simcom.ee/documents/SIM800/SIM800_Hardware%20Design_V1.08.pdf
.. _link12: https://store.arduino.cc/usa/arduino-mega-2560-rev3

.. |ds18b20| image:: ../../../../_static/sensors/DS18B20.jpg
    :scale: 100%
    :align: middle
    :target: ../../../../_static/sensors/DS18B20.jpg

.. |bme280| image:: ../../../../_static/sensors/BME280.jpg
    :width: 150px
    :target: ../../../../_static/sensors/BME280.jpg

.. |dht11| image:: ../../../../_static/sensors/DHT11.jpg
    :width: 150px
    :target: ../../../../_static/sensors/DHT11.jpg

.. |wind_speed| image:: ../../../../_static/sensors/wind_speed.jpg
    :width: 150px
    :target: ../../../../_static/sensors/wind_speed.jpg

.. |wind_dir| image:: ../../../../_static/sensors/wind_dir.jpg
    :width: 150px
    :target: ../../../../_static/sensors/wind_dir.jpg

.. |davis6465| image:: ../../../../_static/sensors/davis6465.jpg
    :width: 150px
    :target: ../../../../_static/sensors/davis6465.jpg

.. |yl69| image:: ../../../../_static/sensors/YL-69.jpg
    :width: 150px
    :target: ../../../../_static/sensors/YL-69.jpg

.. |bh1750| image:: ../../../../_static/sensors/BH1750.jpg
    :width: 150px
    :target: ../../../../_static/sensors/BH1750.jpg

.. |lm393| image:: ../../../../_static/components/lm393.png
    :width: 150px
    :target: ../../../../_static/components/lm393.png

.. |ds3231| image:: ../../../../_static/components/rtc.png
    :width: 150px
    :target: ../../../../_static/components/rtc.png

.. |openlog| image:: ../../../../_static/components/openlog.png
    :width: 150px
    :target: ../../../../_static/components/openlog.png

.. |sim800| image:: ../../../../_static/components/sim800.png
    :width: 150px
    :target: ../../../../_static/components/sim800.png

.. |step-down| image:: ../../../../_static/components/step_down.jpg
    :width: 150px
    :target: ../../../../_static/components/step_down.jpg

.. |arduino_mega| image:: ../../../../_static/components/arduino_mega.jpg
    :width: 150px
    :target: ../../../../_static/components/arduino_mega.jpg

..
  Nome	Funzione	Datasheet	Link	Commento
  DS18B20	Temperatura	https://datasheets.maximintegrated.com/en/ds/DS18B20.pdf	https://www.amazon.it/WINOMO-DS18B20-temperatura-impermeabile-trasduttori/dp/B015E41GR2/ref=sr_1_1?ie=UTF8&qid=1502279305&sr=8-1&keywords=ds18b20
  BME280	Pressione/umidità	https://ae-bst.resource.bosch.com/media/_tech/media/datasheets/BST-BME280_DS001-11.pdf	https://www.amazon.it/Wingoneer-gy-bme280-3-3-BME280-pressione-atmosferica-sensore-Arduino/dp/B06XHHWVKP/ref=sr_1_1?s=tools&ie=UTF8&qid=1502279388&sr=1-1&keywords=bme280	Esiste una breakout board con il BME280 che è compatibile sia con i 3.3v che con i 5v, ma è poco accessibile e troppo costosa
  Davis AeroCone 6465 Pluviometer Vantage Pro 2	Pluviometro	https://www.davisnet.com/product_documents/weather/manuals/07395-334_IM_7852.pdf	https://www.amazon.it/Davis-AeroCone-6465-Pluviometer-Vantage/dp/B071V74BYQ/ref=sr_1_2?s=tools&ie=UTF8&qid=1502279504&sr=8-2&keywords=davis+pluviometro
  Wind direction	Direzione vento	https://www.sparkfun.com/datasheets/Sensors/Weather/Weather%20Sensor%20Assembly..pdf	https://www.amazon.it/gp/product/B00QDMBQGG/ref=oh_aui_detailpage_o05_s00?ie=UTF8&psc=1	Di solito ha uno spinotto RJ11
  Wind speed	Velocità vento	https://www.sparkfun.com/datasheets/Sensors/Weather/Weather%20Sensor%20Assembly..pdf	https://www.amazon.it/gp/product/B00QDMBU80/ref=oh_aui_detailpage_o05_s00?ie=UTF8&psc=1	Di solito ha uno spinotto RJ11
  DHT11	Temperatura interna del box	http://www.micropik.com/PDF/dht11.pdf	https://www.amazon.it/SODIAL-temperatura-umidita-relativa-sensore/dp/B00K67YK6M/ref=sr_1_cc_2?s=aps&ie=UTF8&qid=1502279948&sr=1-2-catcorr&keywords=dht11
  BH1750	Sensore luminosità	http://cpre.kmutnb.ac.th/esl/learning/bh1750-light-sensor/bh1750fvi-e_datasheet.pdf	https://www.amazon.it/WINGONEER-Intensit%C3%A0-GY-302-BH1750-Illuminazione/dp/B01M9EVG0N/ref=sr_1_1?ie=UTF8&qid=1502280662&sr=8-1&keywords=bh1750
  YL-69	Umidità suolo		https://www.amazon.it/Gaoxing-Tech-igrometro-rilevazione-intelligente/dp/B06XCLCM7H/ref=sr_1_7?s=electronics&ie=UTF8&qid=1502281430&sr=1-7&keywords=soil+moisture
  LM393	Adapter for soil moisture		https://www.amazon.it/Gaoxing-Tech-igrometro-rilevazione-intelligente/dp/B06XCLCM7H/ref=sr_1_7?s=electronics&ie=UTF8&qid=1502281430&sr=1-7&keywords=soil+moisture
  DS1307	RTC	https://datasheets.maximintegrated.com/en/ds/DS1307.pdf	https://www.amazon.it/gp/product/B00Y7ZBZW6/ref=oh_aui_detailpage_o07_s02?ie=UTF8&psc=1
  OpenLog	SD card logger	https://www.sparkfun.com/products/13712	https://www.amazon.it/SparkFun-DEV-13712-Openlog-registratore-dati/dp/B01J7NU212/ref=sr_1_1?s=electronics&ie=UTF8&qid=1502280838&sr=1-1&keywords=openlog+sd
  SIM800	GPRS	http://simcom.ee/documents/SIM800/SIM800_Hardware%20Design_V1.08.pdf	https://www.amazon.it/auricolare-Comunicazione-eccellente-Ventilatori-elettronici/dp/B01MQFT4DT/ref=sr_1_1?s=electronics&ie=UTF8&qid=1502280906&sr=8-1&keywords=drok+sim800
  Arduino MEGA	Microcontroller
