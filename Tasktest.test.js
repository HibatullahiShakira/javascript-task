const scoreCollection = require("./Task");
//const test = require("node:test");
    test("that the array of student collection return an array of grades",  () => {
       expect(scoreCollection([95, 78, 85, 60, 45, 92])).toEqual(['A', 'C', 'B', 'F', 'F', 'A']);
    })