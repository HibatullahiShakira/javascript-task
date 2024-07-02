function calculateArea(width, height) {
    return width * height
}

function convertToFahrenheit(temperatureCelcius){
    return Fahrenheit = temperatureCelcius * (9/5) + 32
}

function isEven(number) {
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

function countVowels(letter){
    let count = 0
    for(let vowels in letter){
        if(letter[vowels] === "a" ||
            letter[vowels] === "e" ||
            letter[vowels] === "i" ||
            letter[vowels] === "o" ||
            letter[vowels] === "u"
        )
            count +=1
    }
    return count;
}

function countvowelsarray(word){
    let vowels = ['a','i','e','o','u']
    let count = 0
    for(let alphabet in vowels) {
        for(let letter in word){
            if(vowels[alphabet] === word[letter]){
                count += 1
            }
        }
    }
    console.log(count)
}

console.log(countvowelsarray("apple"))
//console.log(countVowels("apple"))
//console.log(isEven(5))
//console.log(convertToFahrenheit(5))
//console.log(calculateArea(4,5));
module.exports = {calculateArea, convertToFahrenheit,isEven,countvowelsarray}