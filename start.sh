#!/bin/bash
LOCAL_PATH=$(pwd)
END_PATH="$LOCAL_PATH/src/server.js"
echo "Iniciando servidor en la ruta $END_PATH"
nohup node $END_PATH &
date >> nohup.out
echo " Servidor subiendo..." >> nohup.out
