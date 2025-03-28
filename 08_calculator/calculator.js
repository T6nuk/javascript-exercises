const add = function(num1, num2) {
    return num1+num2;
};

const subtract = function(num1, num2) {
    return num1 - num2
};

const sum = function(...numbers) {
    let arr = numbers[0];
    let sum = 0;
    console.log(typeof(sum));
    
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        console.log(typeof(arr[i]));
        sum = arr[i] + sum
    }
    return sum; 
};

const multiply = function(...numbers) {
    let arr = numbers[0];
    let sum = 1;
    console.log(typeof(sum));
  
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        console.log(typeof(arr[i]));
        sum = arr[i] * sum
    }
    return sum; 
};

const power = function(num, toPower) {
    return Math.pow(num, toPower)
};

const factorial = function(num) {
    if (num < 0) return -1;
    if (num == 0) return 1;
    else {
      return (num * factorial(num-1));
    }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
