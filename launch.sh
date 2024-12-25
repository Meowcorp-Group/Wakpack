#!/bin/bash
set -euxo pipefail

java -jar packwiz-installer-bootstrap.jar -g -s ${PACKWIZ_SIDE} ${PACKWIZ_URL} &&

java \
	-Xms128M \
	-XX:MaxRAMPercentage=95.0 \
	-Dterminal.jline=false \
	-Dterminal.ansi=true \
	$( [[ -f unix_args.txt ]] && printf %s "@unix_args.txt" || printf %s "-jar ${SERVER_JARFILE}" ) \
	$( [[ -f user_jvm_args.txt ]] && printf %s "@user_jvm_args.txt" )
