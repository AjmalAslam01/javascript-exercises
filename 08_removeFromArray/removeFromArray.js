const removeFromArray = function(arr, ...numToRemove) {

    return arr.filter(num => !numToRemove.includes(num));
    
};

// Do not edit below this line
module.exports = removeFromArray;
