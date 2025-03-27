const repeatString = function(string, num) {
    let answer = ''

    if (num<0) {
        return 'ERROR'
    } else {
        for (let i = 1; i <= num; i++) {
        answer+=string;
        }
        return answer;
    }

};

repeatString('', 10)

// Do not edit below this line
module.exports = repeatString;
