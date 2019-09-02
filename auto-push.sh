#!/bin/sh
msg1=$1
msg2=$2
if [ -z $msg1 ]; then
    echo "warn: Empty summary passed! Using default message..."
    msg1="Auto commit summary"
elif [ -z $msg2 ]; then
    echo "warn: Empty description passed! Using default message..."
    msg2="Auto commit description"
fi
git add * -f && git commit -m "$msg1" -m "$msg2" && git push origin master
