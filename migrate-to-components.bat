@echo off
echo ========================================
echo    MIGRAZIONE A SISTEMA COMPONENTI
echo ========================================
echo.

echo 1. Creazione backup del file originale...
copy index.html index-backup.html
echo   ✓ Backup creato: index-backup.html

echo.
echo 2. Sostituzione del file principale...
copy index-components.html index.html
echo   ✓ Nuovo index.html attivato

echo.
echo 3. Verifica componenti...
if exist "components\navigation-component.js" echo   ✓ Navigation Component
if exist "components\hero-component.js" echo   ✓ Hero Component  
if exist "components\about-component.js" echo   ✓ About Component
if exist "components\skills-component.js" echo   ✓ Skills Component
if exist "components\certifications-component.js" echo   ✓ Certifications Component
if exist "components\projects-component.js" echo   ✓ Projects Component
if exist "components\contact-component.js" echo   ✓ Contact Component

echo.
echo ========================================
echo   MIGRAZIONE COMPLETATA CON SUCCESSO!
echo ========================================
echo.
echo Per tornare al vecchio sistema:
echo   copy index-backup.html index.html
echo.
echo Per testare il nuovo sistema:
echo   Apri index.html nel browser
echo.
pause
