const leapYears = function(year) {

    const divideByFour = year % 4 === 0;
    const divideBy400 = year % 400 === 0;
    const divideBy100 = year % 100 === 0;

    if(divideByFour && (divideBy400 || !divideBy100)){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
