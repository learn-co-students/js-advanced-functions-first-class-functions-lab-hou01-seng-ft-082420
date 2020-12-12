const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(drivers.length-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (multi) => {
    return function(fare){
        return fare * multi
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers,selection){
    return selection(drivers)
}