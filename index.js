const returnFirstTwoDrivers = arr => arr.slice(0,2)

const returnLastTwoDrivers = arr => arr.slice(-2)

const  selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
    return fare => int * fare
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, fun){
    return fun(drivers)
}