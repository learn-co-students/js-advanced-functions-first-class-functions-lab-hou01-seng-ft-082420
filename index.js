// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    let [driver1, driver2] = drivers
    return [driver1, driver2]
}

const returnLastTwoDrivers = function(drivers) {
    let [driver1, driver2] = drivers.slice((drivers.length - 2))
    return [driver1, driver2]
}

const selectingDrivers = [
    returnFirstTwoDrivers, 
    returnLastTwoDrivers
]

const createFareMultiplier = function(integer) {
    return function(number) {
        return integer * number
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, selectDifferentDrivers){
    return selectDifferentDrivers(drivers)
}