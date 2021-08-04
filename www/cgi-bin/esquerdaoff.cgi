#!/bin/bash
gpio unexportall
gpio -g mode 08 out
gpio -g mode 07 out
gpio -g write 08 0
gpio -g write 07 0