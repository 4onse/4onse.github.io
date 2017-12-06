.. _contol_dev:

Control unit instructions
==========================

Step-down converter preparation
*******************************

#. Follow this guide (:ref:`Buck converter soldering`) to prepare the buck converters
#. Follow this guide (:ref:`Buck converter calibration`) to configure the buck converters


Step by step guide
******************

#. Cut the board with the design measures (210 mm x 250 mm)
#. Print the holes schema and cut appropriately

   .. rst-class:: table-image

      +---------+
      | |holes| |
      +---------+

#. Stick the hole schema to the plastic board

   +----------------------+----------------------+
   | |plexi_holes_schema| | |holes_schema|       |
   +----------------------+----------------------+

#. Verify that the holes fit with your items (connectors,
   microprocessors and other components)
#. Eventually, in case of inconsistencies, make appropriate corrections using a colored mark
#. Drill the signed holes with the correct bit (3M & 2M)

   +----------------------+----------------------+
   | |drilling|           | |plexi_with_holes|   |
   +----------------------+----------------------+

   .. note::

      Prepare the screws and the spacers

#. Mount the M3 spacers for the Arduino, RTC, LM393 and the two buck converter on the back part of the plexi
#. Mount the M2 spacers for the SIM800 and DHT11
#. Mount the barrier connector with the right screws (M2.5)
#. Mount the internal components: Arduino, GPRS, OpenLog, RTC, DHT11 and LM393

   +------------------------+----------------------+
   | Front                  | Back                 |
   +========================+======================+
   | |front_mounted|        | |back_mounted|       |
   +------------------------+----------------------+

#. Follow the schema in the figures below to wire the cables for the power supply system.

   .. note::
     Please, at this step, do not plug the power cables to the hardware components

   +----------------------+----------------------+
   | Front                | Back                 |
   +======================+======================+
   | |front|              | |back|               |
   +----------------------+----------------------+

#. Mount the buck converters and plug them

   +---------------------+----------------------+
   | |converter_mounted| | |converter_plugged2| |
   +---------------------+----------------------+

#. Check that everything is disconneted apart of the buck converter

   +---------------------+----------------------+
   | |no_wired|          | |converter_plugged2| |
   +---------------------+----------------------+

#. Check that the right voltage reaches each connector.
   In the figure below, we checked the Arduino input current.

   +----------------------+
   | |check_arduino_jack| |
   +----------------------+

#. When you are more than sure that the power circuit is ok,
   disconnect the main current source and plug the power cables to the components

#. Following the above steps, the mid-result should be similar
   to this situation:

   +----------------------+----------------------+
   | Front                | Back                 |
   +======================+======================+
   | |front_power|        | |back_power|         |
   +----------------------+----------------------+

   .. note::
      We used some cable ties to better fix the red and black cables

#. Follow the schema below to build the data connection between the Arduino
   and the components using the Jumpers

   .. note::
      Pay attetion:
      * to the Arduino PIN number where the jumpers must be plugged
      * to the colors of the cables

   +----------------------+----------------------+
   | Front (Schema)       | Front (examples)     |
   +======================+======================+
   | |hookup|             | |front_example|      |
   +----------------------+----------------------+



**Go to** :ref:`sensor_dev`


.. references

.. |holes| image:: ../../../../_static/design/holes.png
    :width: 25%
    :target: ../../../../_static/design/holes.png

.. |plexi_holes_schema| image:: ../../../../_static/design/plexi_holes_schema.jpg
    :width: 25%
    :target: ../../../../_static/design/plexi_holes_schema.jpg

.. |holes_schema| image:: ../../../../_static/design/holes_schema.jpg
    :width: 25%
    :target: ../../../../_static/design/holes_schema.jpg

.. |drilling| image:: ../../../../_static/design/drilling.jpg
    :width: 25%
    :target: ../../../_static/design/drilling.jpg

.. |plexi_with_holes| image:: ../../../../_static/design/plexi_with_holes.jpg
    :width: 25%
    :target: ../../../../_static/design/plexi_with_holes.jpg

.. |front_mounted| image:: ../../../../_static/instructions/front_mounted.jpg
    :width: 25%
    :target: ../../../../_static/instructions/front_mounted.jpg

.. |back_mounted| image:: ../../../../_static/instructions/back_mounted.jpg
    :width: 25%
    :target: ../../../../_static/instructions/back_mounted.jpg

.. |front_example| image:: ../../../../_static/design/front_example.jpg
    :width: 25%
    :target: ../../../../_static/design/front_example.jpg

.. |hookup| image:: ../../../../_static/design/hookup.png
    :width: 25%
    :target: ../../../../_static/design/hookup.png

.. |front| image:: ../../../../_static/design/front.png
    :width: 25%
    :target: ../../../../_static/design/front.png

.. |back| image:: ../../../../_static/design/back.png
    :width: 25%
    :target: ../../../../_static/design/back.png

.. |converter_mounted| image:: ../../../../_static/converter/converter_mounted.jpg
    :width: 25%
    :target: ../../../../_static/converter/converter_mounted.jpg

.. |converter_plugged| image:: ../../../../_static/converter/converter_plugged.jpg
    :width: 25%
    :target: ../../../../_static/converter/converter_plugged.jpg

.. |converter_plugged2| image:: ../../../../_static/converter/converter_plugged2.jpg
    :width: 25%
    :target: ../../../../_static/converter/converter_plugged2.jpg

.. |no_wired| image:: ../../../../_static/converter/no_wired.jpg
    :width: 25%
    :target: ../../../../_static/converter/no_wired.jpg

.. |front_power| image:: ../../../../_static/design/front_power.jpg
    :width: 25%
    :target: ../../../../_static/design/front_power.jpg

.. |back_power| image:: ../../../../_static/design/back_power.jpg
    :width: 25%
    :target: ../../../../_static/design/front_power.jpg

.. |check_arduino_jack| image:: ../../../../_static/converter/check_arduino_jack.jpg
    :width: 25%
    :target: ../../../../_static/converter/check_arduino_jack.jpg
