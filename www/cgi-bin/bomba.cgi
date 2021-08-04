#!/bin/bash
gpio unexportall
gpio -g mode 23 out
gpio -g mode 24 out
gpio -g write 23 1
gpio -g write 24 0
