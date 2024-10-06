// Code your solution here
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.startsWith(letters));
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}

const drivers = ["Stacy", "Aleyo", "Ochieng", "Stephanie", "Cleo", "Marchel"];

console.log(findMatching(drivers, "Aleyo")); 

console.log(fuzzyMatch(drivers, "A")); 

const driverObjects = [
  { name: "Stacy", hometown: "Nairobi" },
  { name: "Aleyo", hometown: "Mombasa" },
  { name: "Ochieng", hometown: "Nakuru" }
];

console.log(matchName(driverObjects, "Aleyo")); 
