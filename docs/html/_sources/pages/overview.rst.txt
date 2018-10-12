.. _general_overview:

Overview
---------

The proposed weather station is a cost-effective solutions that
includes different sensors connected to the Arduino Mega 2560 board
that manages the data collection, logging and communication trough a
GPRS module (SIM800). Measures are automatically sent to the
istSOS_ open platform that enable data
management and distribution using the Sensor Observation Service (SOS_)
open standard from the Open Geoscpatial Consortium (OGC_).

The following climatic parameters are observed:

* External air temperature (**DS18B20**)
* External air humidity (**BME280**)
* Barometric Pressure (**BME280**)
* Precipitation (**Davis AeroCone collector**)
* Wind speed and direction (**SEN-08942**)
* Soil moisture (**YL-69**)

.. foto complete e del box interno
.. diverse versioni stazioni... prevedere sezionamento per diverse stazioni  supsi, tecinvent srilanka

Currently, we are developing two versions based on the same components, but with different building strategies.

+----+---------------------+-----------------------------+-----------------+-----------------+-------------+
| n° | Name                | Link to manual              | Building effort | Reproducibility | Price (USD) |
+====+=====================+=============================+=================+=================+=============+
| #1 | 4onse-mod           |  :ref:`index-supsi-user`    | 4/5             | 4/5             | xxx         |
+----+---------------------+-----------------------------+-----------------+-----------------+-------------+
| #2 | 4onse-pcb           |  :ref:`index-uom`           | 3/5             | 3/5             | xxx         |
+----+---------------------+-----------------------------+-----------------+-----------------+-------------+

.. | #3 | TECinvent           |  :ref:`index-tec`      | 2/5             | 2/5             |
.. +----+---------------------+------------------------+-----------------+-----------------+

.. _istSOS: http://www.istsos.org

.. _SOS: http://www.opengeospatial.org/standards/sos

.. _OGC: http://www.opengeospatial.org
