const {filteredTestScores} = require('.\ArrayMethod.js');

test("test that function return array of score greater than or equal 70", () => {
    expect(filteredTestScores([56, 79, 70, 34, 89, 90, 12, 34, 78])).toBe([ 79, 70, 89, 90, 78 ]);
})