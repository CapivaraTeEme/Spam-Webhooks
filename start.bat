@echo off
echo Closing CMD
taskkill /F /IM cmd.exe >nul 2>&1

echo idk
start cmd /k "node main.js"
title Spammer by C4PTM
exit
