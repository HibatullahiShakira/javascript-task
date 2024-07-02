/*
  function reverse_word_to_array_of_character(reverse_word){
     let  reverse_word_array = [];
      for(let letter = reverse_word.length -1; letter >= 0; letter-- ) {
          reverse_word_array.push(reverse_word[letter])
      }
      return reverse_word_array
 }
  console.log(reverse_word_to_array_of_character("semicolon"));
 function evenNumbers(numbers){
     let arrayOfEvenNumbers = [];
     for(let number = 0; number < numbers.length; number++){
         if(numbers[number] % 2 === 0){
             arrayOfEvenNumbers.push(numbers[number]);
         }
     }
             return arrayOfEvenNumbers;

 }
 console.log(evenNumbers([1,2,3,4,5,6,7,8,9]));
 function evenNumbers(numbers){
     let arrayOfEvenNumbers = [];
     for(let number of numbers){
         if(number % 2 === 0){
             arrayOfEvenNumbers.push(number);
         }
     }
     return arrayOfEvenNumbers;
 }
 console.log(evenNumbers([1,2,3,4,5,6,7,8,9]));
slice
let arrayOfNumbers = [1,8,3,9,5,6,7,8,9];
arrayOfNumbers.splice(0,3)
console.log(arrayOfNumbers.slice(5));
arrayOfNumbers.splice(3,0, "badAfeez")
console.log(arrayOfNumbers)
arrayOfNumbers.forEach((number) => {let answer = number * 2;
    console.log(answer)
})
const answer = arrayOfNumbers.filter((number) => {
   return number > 3;
})
console.log(answer);
 function listToObject(collection) {
    let objectOutput = {}
    for (let key of collection) {
       if (key in objectOutput) {
          objectOutput[key] += 1;
       } else {
          objectOutput[key] = 1;
       }
    }
    return (objectOutput)
 }
      if (collection.hasOwnProperty(key)) {
         objectOutput[key] = collection[key];
*/

/**
 * when ever you pass in function has an argument it's a called a callback function
 * everytime you use map you must pass in a function has an argument
 * map can only work on an array
 * map must take in a function
 */

/**
 * longer and more explicit way of doing a call back function in a map
 * let multiplyNumbers = function (number) {
 * return number * 2
 * }
 * const listOfNumbers = [2,3,4,5,1]
 * let result = listOfNumbers.map(multiplyNumbers)
 */

/**
 * let arr = [2, 3, 5, 3, 3, 2, 5]
 * console.log(listToObject(arr));
 * let result = arr.map((detail) => {
 *    return detail * 2});
 * console.log(result)
 */

/**
 * FIND returns only the first element that obey your condition
 * FIND also takes a call back function
 */

/**
 * const answer = listOfNumbers.find((number) => {return number > 2 })
 * console.log(answer)
 */

/**
 * FIND INDEX find print the index of the element
 */

/**
 * const answer = listOfNumbers.findIndex((number) => {return number > 2})
 * console.log(answer)
 */

/**
 * const scores = [95, 78, 85, 60, 45, 92];
 *
 * function scoreCollection(studentScores) {
 *    let result = studentScores.map((score) => {
 *       if (score >= 90 && score <= 100) {
 *          return "A";
 *       } else if (score <= 89 && score >= 80) {
 *          return "B";
 *       } else if (score <= 79 && score >= 70) {
 *          return "C";
 *       } else if (score <= 69 && score >= 60) {
 *          return "D";
 *       } else if (score < 60) {
 *          return  "F";
 *       }
 *    });
 *    return result;
 * }
 * console.log(scoreCollection(scores))
 */


/**
 * function scoreCollection(studentScores) {
 *    let result = studentScores.map((score) => {
 *       return score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score > 60 ? "D" : "F"
 *    });
 *    return result;
 * }
 *
 * const scores = [95, 78, 85, 60, 45, 92];
 *  console.log(scoreCollection(scores))
 * module.exports = scoreCollection
 */

/**
 * const array = [2, 3, 5, 3, 3, 2, 5];
 * function arrayToObjectOutput(inputArray) {
 *     let objectToArray = {}
 *     inputArray.forEach((key) => {
 *             if (key in objectToArray) {
 *                 objectToArray[key]++
 *             } else {
 *                 objectToArray[key] = 1;
 *             }
 *     })
 *     return objectToArray;
 * }
 */

/**
 * function arrayToObjectOutput(inputArray) {
 *    let  objectToArray = {}
 *     for(key of inputArray) {
 *         if(key in objectToArray) {
 *             objectToArray[key]++
 *         }
 *         else{
 *             objectToArray[key] = 1;
 *         }
 *     }
 *     return objectToArray;
 * }
 */

//console.log(arrayToObjectOutput(array));



    //honk : function () {
       // console.log("Beep Beep")
   // }
//}

//console.log(car)



/**
 * function carFunction(object, key) {
 *     for(let currentKey in object){
 *         if (currentKey === key) {
 *             return object[currentKey];
 *         }
 *     }
 * }
 *
 * const car = {
 *     maker: "Toyota",
 *     colour: "blue",
 *     year: "2009"
 * }
 */

//console.log(carFunction(car, 'model'))

const car = {
    maker: "Toyota",
    colour: "blue",
    year: "2009",
    honk : function() {
        console.log("Beep beep") 
    },
    setYear: function(newYear) {
        this.year = newYear;
    }
}

car.setYear(2021);
console.log(car.year);




