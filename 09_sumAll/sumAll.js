const sumAll = function(min, max) {
    let sum = 0;
    
    if(min > max){
        [min, max] = [max, min];
    }

    if(!Number.isInteger(min) || !Number.isInteger(max) || (min || max) < 0){
        return "ERROR";
    }
    
    for(; min <= max; min++){
        sum += min;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
