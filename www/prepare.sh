#!/bin/bash

sudo cd /home/pi/mjpg-streamer
sudo ./mjpg_streamer -i "./input_uvc.so -f 10 -r 640x320 -n -y" -o "./output_http.so -w ./www -p 81"

sudo cd /PiBits/ServoBlaster/user
sudo ./servod --p1pins=