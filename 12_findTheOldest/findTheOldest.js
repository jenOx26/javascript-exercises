const findTheOldest = function(people) {
    people = people.sort(function(a, b) {
        if (people.yearOfDeath === undefined) {
            const lastPerson = 2022 - a.yearOfBirth;
            const nextPerson = 2022 - b.yearOfBirth;
        } else {
            const lastPerson = a.yearOfDeath - a.yearOfBirth;
            const nextPerson = b.yearOfDeath - b.yearOfBirth;
            return lastPerson > nextPerson ? -1 : 1;
        }
    }) 
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
