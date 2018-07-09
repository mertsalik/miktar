# miktar
Fatura, senet ve benzeri mali dökümanlarda kullanılmak üzere hazırlanmış, miktarı Türkçe yazı ile görüntülemeye yardımcı olan bir yazılım paketi. Şimdilik sadece Javascript.

## install
npm install

## test 
npm test

## usage
```
var chai = require('miktar');
var ikiyuz = miktar.amount2Text(200);  
console.log(ikiyuz);  
```

	"ikiyüz"
