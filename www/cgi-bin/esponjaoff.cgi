#!/bin/bash
gpio unexportall
gpio -g mode 17 out
gpio -g mode 27 out
gpio -g write 17 0
gpio -g write 27 0
