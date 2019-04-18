"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomNumber = function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };
exports.randomNumber = randomNumber;
var blankArray = function (length) { return Array(length).fill(null); };
exports.blankArray = blankArray;
var randomLengthBlankArray = function (min, max) {
    var length = randomNumber(min, max);
    return blankArray(length);
};
exports.randomLengthBlankArray = randomLengthBlankArray;
var arrayOfNumbers = function (min, max, length) {
    var result = blankArray(length).map(function () { return randomNumber(min, max); });
    return result;
};
exports.arrayOfNumbers = arrayOfNumbers;
exports.default = {
    randomNumber: randomNumber,
    blankArray: blankArray,
    randomLengthBlankArray: randomLengthBlankArray,
    arrayOfNumbers: arrayOfNumbers,
};
//# sourceMappingURL=index.js.map