StudentTestScores = [56, 79, 70, 34, 89, 90, 12, 34, 78]

function filteredTestScores(testScores) {
    let result = testScores.filter((scores) =>{return scores >= 70})
    return result;
}
console.log(filteredTestScores(StudentTestScores))

function addedTestScores(testScores) {
    let testResult = testScores.map((score) => {return score += 5})
    return testResult
}
console.log(addedTestScores(StudentTestScores))

function squareOfEachNumber(listOfInteger) {
    let eachSquaredNumber = listOfInteger.map((number) => {return number * number})
    return eachSquaredNumber
}
console.log(squareOfEachNumber(StudentTestScores))


collectionOfBooks = ["Math", "English", "Java", "Python"]
listOfmembers = ["Shakira", "Okikiola", "Bolanle", "Okikiola"]
function distributeBook(bookCollection, listOfMembers) {
    let distributeToEachMember = {}
    let bookIndex = 0;
    for(eachMember of listOfmembers) {
        distributeToEachMember[eachMember] = collectionOfBooks[bookIndex]
        bookIndex++
    }
    return distributeToEachMember;
}
console.log(distributeBook(collectionOfBooks, listOfmembers))

function filterAfternoonTime(arrayOfTime){
    return arrayOfTime.filter((time) => {
        return time.includes("P")
    })
}
let arrayOfTime = ["11:00 AM", "10:00 PM", "12:00 PM", "13:00 PM", "14:00 AM"];
console.log(filterAfternoonTime(arrayOfTime));

function calculateValues(objectExpenses){
    let totalExpenses = 0
    for (objectExpenses.values in objectExpenses){
        totalExpenses += objectExpenses[objectExpenses.values]
    }
    return totalExpenses
}

let expenses = {
    transport : 3000,
    food: 700,
    snacks: 300,
    water: 50
}

console.log(calculateValues(expenses));

module.exports = {filteredTestScores}