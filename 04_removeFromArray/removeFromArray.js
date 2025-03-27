const removeFromArray = function(array, ...args) {

    let arr = array;
    // console.log(arr);
    
    for (let i = 0; i < args.length; i++) {
        // if (arr.includes(args[i])) {
        // }
        while (arr.includes(args[i])) {
            arr.splice(arr.indexOf(args[i]), 1)
        }

    }
    console.log('arr: ' +arr);
    return arr
    
    
};
// Do not edit below this line
module.exports = removeFromArray;
