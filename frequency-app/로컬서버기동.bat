@echo off
cd /d "%~dp0"
title NovaCell Bio-Frequency Studio Local Server
echo ============================================================
echo  NovaCell Therapy Bio-Frequency Studio 로컬 서버 가동 중...
echo  주소: http://127.0.0.1:8899/
echo  이 창을 닫지 마시고 웹브라우저에서 사용하세요.
echo ============================================================
echo.

start http://127.0.0.1:8899/

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0start-server.ps1"
pause
