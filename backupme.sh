#!/bin/bash
t="/tmp/exclude.$$"
source ~/.backup.conf
touch $t
for w in $WHATNOT
do
	echo "$w" >> $t
done
rsync "$opt" -avr --exclude-format-$t "$WHAT" "$SERVER:$WHERE"
rm -rf "$t"
