// Code your solution here

function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase() == string.toLowerCase());
}

function fuzzyMatch(drivers, string) {
    const charArr = string.split('');
    return drivers.filter(driver => charArr.some( char => char == driver.charAt(0)));
}

function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string);
}