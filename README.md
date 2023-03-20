
# Hospitality Occupancy Sensor Documentation

**Prepared For**

Luis Garcia

Corserva/EntryReady

**Prepared By**

Jack Edwards

Florida Polytechnic University
# A Letter to Corserva

Dear Luis Garcia and and rest of Corserva/EntryReady,

You may find the assembly instructions on both the software and hardware sides of the occupancy sensor project you have sponsored below. We may add more sections and information about what this document contains as we proceed further into writing.

You would have noticed already that some text (including this) is highlighted. This is the highlighting system that was used previously for the final report written last December and will be used in other documentation for this project until said documents are complete. Feel free to add your own highlighting if something needs to be brought to attention and add a comment if necessary.

We’ll also include a disclaimer about how Corserva plans to use the sensors with a server instead of a Raspberry Pi which is what we have used for this project. We’ll add some heartfelt letter about how it was an honor to work for you on our Senior Design project here, but that’ll be later.

This document is a work in progress, so if you have any concerns to address, highlighting and commenting on this document will be much faster than by email or by addressing it in the weekly meeting.

Yours Truly,

Jack Edwards

# Sections List

1. Physical Assembly

1.1 - Materials List

1.2 - Wiring

1.3 - Assembly Instructions

2. Software Assembly

2.1 - Home Assistant

-- 2.1.1 - Home Assistant Materials
	
-- 2.1.2 - Installing Home Assistant Operating System

-- 2.1.3 - Home Assistant Onboarding

2.2 - ESPHome & MMWave Code

3. Website Connection Setup


## 1. Physical Assembly

This section contains the steps used to physically assemble the sensor created for this project. The materials used, the wiring done, and the assembly itself is written here.

## 1.1 - Materials List
Here are the materials used to compose the sensor:
* D1 Mini
* DFRobot SEN0395
* Mini USB cable & USB power supply
    * A phone charger or similar charger can be used for this material.
* Soldering Iron
* 2 Inches of Wire
* 3D Printed Case
    * These cases should already be provided for you.

## 1.2 - Wiring
Using the pins that come with the D1 Mini, the following wiring was done:
(Sensor Pin to D1 Mini Pin is what the following format is.)

TX to D1

RX to D2

IO1 is not connected

IO2 to D0 using the wire

G to G

V to 5V

The D1, D2, G, and 5V pins use soldered header and pin connections while the D0 pin uses a soldered wire connection.

## 1.3 - Assembly Instructions

This section goes through how to assemble the sensor step by step.

1. Solder the header connectors and the single wire to the D1 Mini as per the “Wiring” section.
2. Cut a half inch of insulation from the loose wire end.
3. Solder the pins on the TX, RX, G, and V pins on the sensor.
4. Solder the loose wire end to the sensor’s IO2 pin.
5. Plug the sensor into the D1 Mini while ensuring the sensor’s V pin is aligned to the D1 Mini’s 5V pin.

# 2. Software Assembly

This section contains the instructions for how to set up the software components of the project. This includes how to set up Home Assistant on a Raspberry Pi, ESPHome, the mmWave code, and configuring Home Assistant parameters.

## 2.1 - Home Assistant
Section 2.1 covers the materials and assembly instructions used to start Home Assistant on a Raspberry Pi. 

### 2.1.1 - Home Assistant Materials
The following materials were used to start setting up Home Assistant:
- Raspberry Pi 4

- Power Supply for Raspberry Pi 4

- Micro SD Card

- Ethernet Cable

    - An ethernet cable is required for the initial connection.

### 2.1.2 - Installing Home Assistant Operating System
These are the instructions used to install the Home Assistant operating system on a Raspberry Pi 4.

1. Insert the SD card into your computer.

2. Download and start Balena Etcher (Link: www.balena.io/etcher). Enable administrator privileges if requested.

3. From the resulting window, a three-step diagram will appear. From the leftmost icon, click on the “Flash from URL” button.

4. Copy and paste the following link for the image URL, then click on the “OK” button: https://github.com/home-assistant/operating-system/releases/download/9.5/haos_rpi4-64-9.5.img.xz
5. Wait for Balena to download the image. When it has done so, the middle icon will light up. Click on the “Select Target” button from the center icon.
6. Select the SD card you have inserted earlier, then click on the “Select” button.
7. The rightmost icon should brighten now. Click on the “Flash!” button to write the Raspberry Pi image to the SD card.
8. When you see a confirmation screen, eject your SD card from your computer and insert it into your Raspberry Pi.
9. Plug in the ethernet cable from the network to the Pi and then power the Pi.
10. Wait for a few minutes before checking to see if Home Assistant is accessible. After waiting, go to a web browser and paste homeassistant.local:8123 into the webpage bar. If you reach a web page, the installation was successful.
If you have a stricter network configuration, enter http://X.X.X.X:8123 into the webpage bar instead, replacing “X.X.X.X” with the Raspberry Pi’s IP address.

### 2.1.3 - Home Assistant Onboarding
After installing and accessing the Home Assistant operation system as described in 2.1.2, these are the instructions to start configuring Home Assistant.

1. The first screen presented will be an account creation page. This will be the account used to access Home Assistant. Enter your name, username, and password you will use for Home Assistant, then click on the “Create Account” button.
2. The next screen will be setting up your home location. You can click on the “Detect” link to allow Home Assistant to retrieve your current location, time zone, elevation, and unit system, but these values can be manually filled as well. When you filled out the values, click on “Next”.
3. You will now be presented to the devices screen. You can set up devices that Home Assistant detects (you are looking for an “ESPHome” device), but if you don’t see your device in the screen, it can be connected later. Click on the “Finish” link to finish initial configuration.
4. You will now be presented to the Home Assistant dashboard. To connect any devices not connected initially, go to “Settings” -> “Devices & Services” from the left column. You may find your device in the “Discovered” section, but if not, click on the “Add Integration” button and find your device there.


## 2.2 - ESPHome & MMWave Code


# 3. Website Connection Setup

We will write this section when the MQTT Broker is operating successfully.
