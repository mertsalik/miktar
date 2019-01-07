'use strict';


var singleDigitMap = {
    "0": null,
    "1": "bir",
    "2": "iki",
    "3": "üç",
    "4": "dört",
    "5": "beş",
    "6": "altı",
    "7": "yedi",
    "8": "sekiz",
    "9": "dokuz"
}
var doubleDigitMap = {
    "0": null,
    "1": "on",
    "2": "yirmi",
    "3": "otuz",
    "4": "kırk",
    "5": "elli",
    "6": "altmış",
    "7": "yetmiş",
    "8": "seksen",
    "9": "doksan"
}
var highDigitsMap = {
    "0": null,
    "1": null,
    "2": "iki",
    "3": "üç",
    "4": "dört",
    "5": "beş",
    "6": "altı",
    "7": "yedi",
    "8": "sekiz",
    "9": "dokuz"
}

exports._ = function (textOrNumber) {
    if (textOrNumber !== null) {
        return textOrNumber;
    }
    return "";
}

exports.amount2Text = function (amount) {
    amount = Number(amount);
    var amountInString = String(amount);
    if (!amountInString.length) {
        return "";
    }
    // split the fractional part
    var fractional_part = amountInString.split(".")[1]
    amountInString = amountInString.split(".")[0]
    if (fractional_part != undefined){

        if (fractional_part.length == 1){
            // fill right part with zero.
            fractional_part = fractional_part + "0";
        }
        else if (fractional_part.length >= 2){
            fractional_part = fractional_part.slice(0, 2);
        }
        else{
            // bug or input like "127." or "5."
        }

        return this.amount2Text(amountInString) + "TL," + this.amount2Text(fractional_part) + "kr.";
    }
    if (amountInString.length == 1) {
        return this._(singleDigitMap[amount]);
    }

    else if (amountInString.length == 2) {
        return this._(doubleDigitMap[amountInString[0]]) + this._(singleDigitMap[amountInString[1]]);
    }

    else if (amountInString.length == 3) {
        return this._(highDigitsMap[amountInString[0]]) + "yüz" + this._(doubleDigitMap[amountInString[1]]) + this._(singleDigitMap[amountInString[2]]);
    } 
    
    else if (amountInString.length == 4) {
        var right = amountInString.slice(amountInString.length - 3);
        return this._(highDigitsMap[amountInString[0]]) + "bin" + this.amount2Text(right);
    }

    else if (amountInString.length > 4 && amountInString.length <=6) {
        var left = amountInString.slice(0, amountInString.length - 3);
        var right = amountInString.slice(amountInString.length - 3);
        var mid = left == Number(left) ? "bin": ""
        return this.amount2Text(left) + "bin" + this.amount2Text(right);
    }
    else if (amountInString.length == 7){
        var right = amountInString.slice(1);
        return  this._(singleDigitMap[amountInString[0]]) + "milyon" + this.amount2Text(right);
    }
    else if (amountInString.length > 7 && amountInString.length <= 9){
        var left = amountInString.slice(0, -6);
        var right = amountInString.substr(amountInString.length - 6);
        return this.amount2Text(left) + "milyon" + this.amount2Text(right);
    }
    else if (amountInString.length == 10){
        var right = amountInString.slice(1);
        return  this._(singleDigitMap[amountInString[0]]) + "milyar" + this.amount2Text(right);
    }
    else if (amountInString.length > 10 && amountInString.length <= 12){
        var left = amountInString.slice(0, -9);
        var right = amountInString.substr(amountInString.length - 9);
        return this.amount2Text(left) + "milyar" + this.amount2Text(right);
    }
};