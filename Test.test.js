const {calculateArea, convertToFahrenheit,  isEven, countvowelsarray}  = require('./FunctionTest.js');
test('that the area of 4 and 5 equals 20', () => {
    expect(calculateArea(5,4)).toBe(20);
});

test('test that temperature celcius convert to fahrenheit', () => {
    expect(convertToFahrenheit(5)).toBe(41);
})

test('test if a number is a even number', () => {
    expect(isEven(4)).toBe(true);
})

test('test that how many vowel are present in a letter', () => {
    expect(countvowelsarray("apple")).toBe(2);
})