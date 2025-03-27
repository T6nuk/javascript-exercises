
const reverseString = function(string) {
    let reverseStr = ''
    for (let i = 1; i <= string.length; i++) {
        let letter = string.charAt(string.length-i);
        reverseStr += letter
    }
    return reverseStr
    // return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
