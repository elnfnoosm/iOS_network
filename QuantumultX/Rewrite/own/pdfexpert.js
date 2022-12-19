#!name=https://raw.githubusercontent.com/langkhach270389/Surge-LK/main/scripts/langkhach/pdfexpert.js
#!desc=Documents-PdfExpert-Scaner Pro
[MITM]
hostname = %APPEND% license.pdfexpert.com
[Script]
Documents-PdfExpert = type=http-response,pattern=^https:\/\/license\.pdfexpert\.com\/api\/.+\/subscription\/(refresh$|check$),requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/documents.js,script-update-interval=-1
