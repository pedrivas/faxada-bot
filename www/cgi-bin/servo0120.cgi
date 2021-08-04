#!/bin/bash
cd /PiBits/ServoBlaster/user
sudo ./servod --p1pins=7
echo P1-7=100 >/dev/servoblaster