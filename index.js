// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => {
    return arr.slice(0,2)
}

const returnLastTwoDrivers = (arr) => {
    return arr.slice(-2)
}

// don't use (), that invokes, while we just want to store
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (int) => {
    return function(fare){
        return fare * int
    }
}

const fareDoubler = (fare) => createFareMultiplier(2)(fare)


const fareTripler = (fare) => createFareMultiplier(3)(fare)

const selectDifferentDrivers = (drivers, func) => {
    return func(drivers)
}
