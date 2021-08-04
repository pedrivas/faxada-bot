#!/bin/bash
gpio unexportall
gpio -g mode 26 out
gpio -g mode 19 out
gpio -g write 26 1
gpio -g write 19 0
