@echo off
setlocal enabledelayedexpansion

cd /d "%~dp0"

echo ========================================
echo   Git publish helper
echo ========================================
echo.

git rev-parse --is-inside-work-tree >nul 2>&1
if errorlevel 1 (
  echo [ERROR] Current folder is not a git repository.
  pause
  exit /b 1
)

for /f %%i in ('git status --porcelain ^| find /c /v ""') do set CHANGES=%%i
if "%CHANGES%"=="0" (
  echo [INFO] No changes to commit.
  pause
  exit /b 0
)

set /p COMMIT_MSG=Enter commit message: 
if "%COMMIT_MSG%"=="" (
  echo [ERROR] Commit message cannot be empty.
  pause
  exit /b 1
)

echo.
echo [1/4] Staging files...
git add .
if errorlevel 1 goto :fail

echo [2/4] Creating commit...
git commit -m "%COMMIT_MSG%"
if errorlevel 1 goto :fail

echo [3/4] Pushing to origin/main...
git push origin main
if errorlevel 1 goto :fail

echo [4/4] Done. Current status:
git status -sb
echo.
echo [OK] Published successfully.
pause
exit /b 0

:fail
echo.
echo [ERROR] Publish failed. Check messages above.
git status -sb
pause
exit /b 1
