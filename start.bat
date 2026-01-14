@echo off
echo Installing dependencies...
pnpm install

echo.
echo Starting development servers...
echo.
echo The web app will be available at: http://localhost:3000
echo.
pnpm dev
