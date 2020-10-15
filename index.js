// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
    return array.slice(0,2)
}

const returnLastTwoDrivers = function(array){
    return array.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return function(fare){
        let cost = fare * multiplier
        return cost
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(array, func){
    return func(array)
}
    
