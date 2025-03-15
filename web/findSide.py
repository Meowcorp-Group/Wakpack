#!/usr/bin/env python3
import os
import tomllib

files = os.listdir('mods')

for file in files:
	with open('mods/' + file, 'rb') as f:
		data = tomllib.load(f)
		if data['side'] != 'both':
			print(data['side'], file)