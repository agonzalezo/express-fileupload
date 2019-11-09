#!/bin/bash
LOCAL_PATH=$(pwd)/
SERVER_PATH="src/server.js"
END_PATH="$LOCAL_PATH$SERVER_PATH"
echo "Bajando el servidor en la ruta $END_PATH"
PID=$(ps -fea|grep $SERVER_PATH|grep -v "grep"|awk '{print $2}')
echo "pid $PID"
kill $PID
