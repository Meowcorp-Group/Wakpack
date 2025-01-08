#!/usr/bin/env python3
import tomllib
import hashlib
import json

def main():
	# load pack.toml
	with open('pack.toml', 'rb') as packFile:
		pack = tomllib.load(packFile)
	
	# load index.toml and verify it's hash
	with open('index.toml', 'rb') as indexFile:
		sha256 = hashlib.sha256(indexFile.read()).hexdigest()
		if sha256 == pack['index']['hash']:
			indexFile.seek(0)
			index = tomllib.load(indexFile)
		else:
			print('index.toml hash mismatch')
			exit(1)

	mods = []
	for file in index['files']:
		if file['file'].startswith('mods/'):
			mods.append(file['file'].removeprefix('mods/').removesuffix('.pw.toml'))

	# output number of mods
	with open('web/modCount.txt', 'w') as modCountFile:
		modCountFile.write(str(len(mods)))
	# output mod list
	with open('web/modList.json', 'w') as modListFile:
		json.dump(mods, modListFile)

if __name__ == '__main__':
	main()