function convertRomanToArabic() {
    var romanNumber = document.getElementById("romanNumber").value;
    var arabicNumber = romanToArabic(romanNumber);
    document.getElementById("arabicResult").innerHTML = arabicNumber;
}

function convertArabicToRoman() {
    var arabicNumber = document.getElementById("arabicNumber").value;
    var romanNumber = arabicToRoman(arabicNumber);
    document.getElementById("romanResult").innerHTML = romanNumber;
}

function romanToArabic(roman) {
    var romanDict = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    var arabic = 0;

    for (var i = 0; i < roman.length; i++) {
        if (i > 0 && romanDict[roman[i]] > romanDict[roman[i - 1]]) {
            arabic += romanDict[roman[i]] - 2 * romanDict[roman[i - 1]];
        } else {
            arabic += romanDict[roman[i]];
        }
    }

    return arabic;
}

function arabicToRoman(arabic) {
    var arabicDict = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    var roman = '';

    for (var i = 0; i < arabicDict.length; i++) {
        while (arabic >= arabicDict[i].value) {
            roman += arabicDict[i].symbol;
            arabic -= arabicDict[i].value;
        }
    }

    return roman;
}