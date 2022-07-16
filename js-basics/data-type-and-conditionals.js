// Javascript Stuff

// *****************   DO THIS ALWAYS *****************

// any syntax that you don't know, "ALWAYS ALWAYS ALWAYS" google it so you have a better understanding of it, in case something breaks, you know how to fix it

// ****************************************************

//  =======  Variable Declaration ========

var random1; // Don't use var b/c it makes you seem like a nub! <== I joke ** var is part of vanilla js and is no longer used after the introduction of let and const.

let random2; // let variables are mutable (can be changed)
const random3 = "cant be changed"; // const variables are imutable (cannot be changed) and must contain a value;

const dontChange = 200;
let score = 100;
console.log({ score, dontChange });
score -= 25;
// since you cannot change a const variable, the below will happen to dontChange;
// const dontChange = 30; // this will give you a SyntaxError: Identifier 'dontChange' has already been declared
// dontChange = 30 // this will give you TypeError: Assignment to constant variable
console.log({ score, dontChange });

// **** vairables should not start with symbols or numbers (you'll get syntax errors); ****

// =======================================

// =========== Data Types ================

const blah1 = 1; // number
const blah2 = "1"; // string
const blah3 = true; // boolean
const blah4 = 7 * "54"; // NaN
const blah5 = undefined; // undefined
const blah6 = null; // null
const blah7 = []; // array
const blah8 = {}; // object
const blah9 = () => "function"; // function

console.log({
    blah1: typeof blah1,
    blah2: typeof blah2,
    blah3: typeof blah3,
    blah4,
    blah5: typeof blah5,
    blah6,
    blah7,
    blah8: typeof blah8,
    blah9: typeof blah9,
});

// =======================================

// ================ Math =================

const math1 = 1 + 4; // addition
const math2 = 50 - 66; // subtraction
const math3 = 4 * 5; // multiplication
const math4 = 72 / 9; // division

const math5 = 5 ** 2; // exponent (to the power of)
const math6 = 4 % 2; // modulo

const mathRes1 = 30 % 5 === 0;

const result1 = 0;
console.log({ result1: mathRes1, result2: !mathRes1, mathResult: !!result1 });

let score1 = 100;

// score1 = score1 - 25;
score1 -= 25; // this syntax can be used for all multiplication

// =======================================

// ============= Conditionals ============

if (
    (result1 !== undefined && result1 !== null && result1 > 0) ||
    (typeof result1 === "string" && result1.length > 0)
) {
    // if (typeof result1 === 'string' && result1.length > 0) {
    console.log({ thisIsScoreOne: result1 });
} else {
    console.log("score one failed me!!!");
    // }
}

// this is the es9 syntax for the conditional above ^^
// if(!!result1) {
//   console.log({thisIsAlsoScoreOne: result1})
// } else {
//   console.log('score still failed me!!')
// }

// what is the difference between == and === ?
console.log({ myRes: "1" == 1 });
// == checks is the values are the same
console.log({ myRes: "1" === 1 });
// === checks if the value and data type are the same

//  >>>>>>  If ElseIf Else <<<<<<

const myValue = "blah"; // using .split('') makes the word an array ['b', 'l', 'a', 'h']

// .split() is used to convert string to an array
// .join() is used to convert array to a string
// .includes() works for both strings and arrays and it uses the value passed to it in order to check if the string or array contains the value passed.

// you always want to put the strictest condition as the first if statements in your conditionals

if (myValue.length === 4 && myValue.includes("b")) {
    console.log("This word is 4 characters long and has the letter b");
} else if (myValue.length < 4) {
    console.log("short word");
} else if (myValue.length >= 4) {
    console.log("long word");
} else {
    console.log(myValue.split(""));
}

// >>>>>>>>>>  Switch Statement <<<<<<<<<
// switch statements are used to determnine the value of a single element.
let myValue2 = 6;

// with switch statements always have a break, add your default (this is the same as an else), the cases (same as if conditions) check for value of the parameter (the word declared within () after the word switch()), add : after your case condition and your default.
switch (typeof myValue2) {
    case "number":
        console.log("My Value is a number!");
        break;
    case "string":
        console.log("My Value is a string!");
        break;
    case "boolean":
        console.log("My Value is a boolean!");
        break;
    case 15:
    case 16:
    case 17:
        console.log("My Value is between 15 and 17");
        break;
    default:
        console.log("My Value did not meet any of my conditions!");
        break;
}
// switch statements are used to check multiple values for a on value and can be strict where as an if condition will allow you to add multiple conditions to check for and give you more freedom when checking types and values together.

// =======================================

// =============== Loops =================

// ***  Learn one loop well b4 jumping in to using other types of loops. Use the oe you feel most comfortable with first even though they have their own use case ***

// >>>>> Types of Loops <<<<<<
// 1. for loop (your basic loop)
// > for of loop (don't use this till you learn for loop correctly ** mainly used for arrays)
// > for in loop (don't use this till you learn for loop correctly ** mainly used for objects)
// 2. while loop (not used so commonly / similar to for but syntax is different)
// 3. for each loop (replacement for for loop)
// 4. map loop (same syntax as for each but used for arrays)
// 5. filter loop (same syntax as for each but used to filter content from arrays)

// loops are normally used to loop through arrays or till a condition is met or not met (depends on how the loop is coded)
const myArray = [3, 53, 43, 26, 79, 84, 2, 15, 22, 28];
// arrays have indexes, and first element is always starting at index 0. So if an array length is 10, the index for the last element in the array would be 9.

// >>>>>>>  for loop <<<<<<<
// array.length is a number, you can replace array.length with a number of your choosing
// for (let i = 0; i < myArray.length; i++) {
for (let i = myArray.length - 1; i > 5; i--) {
    // console.log('Infinite Loop :', myArray.length + ' : ' + i);
    // myArray[i] = myArray[i] * 3;
    myArray[i] *= 3;
    console.log(`Infinite Loop : ${myArray.length} : ${i} : ${myArray[i]}`);
}

// >>>>>>>> While Loop <<<<<<<<
// similar to a for loop, except that the main iterator is outside the loop
let myWhileScore = 25;

// while(myWhileScore > 0) {
//   let myRandomNum = Math.ceil(Math.random() * 25);
//   console.log(`My Score is : ${myWhileScore} : ${myRandomNum}`)

//   if(myRandomNum % 2 === 0) {
//     myWhileScore -= 5;
//   } else {
//     myWhileScore += 2;
//   }
// }

// >>>>  Fizz Buzz <<<<
// if i is a multiple of 3 console.log('Fizz');
// if i is a multiple of 5 console.log('Buzz');
// if i is a multiple of 15 console.log('FizzBuzz');

for (let i = 0; i < 35; i++) {
    // if (i % 15 === 0) {
    //   console.log('FizzBuzz');
    // } else if(i % 3 === 0) {
    //   console.log('Fizz');
    // } else if (i % 5 === 0) {
    //   console.log('Buzz');
    // } else {
    //   console.log(i)
    // }
    fizzOrBuzz(i);
}

// 'HOISTING' vanilla function are hoisted to the top of the file when created.
function fizzOrBuzz(number) {
    if (number % 15 === 0) {
        return console.log("FizzBuzz");
    } else if (number % 3 === 0) {
        return console.log("Fizz");
    } else if (number % 5 === 0) {
        return console.log("Buzz");
    } else {
        return console.log(number);
    }
}

// >>>>>>>  For Each Loop <<<<<<<

const randomArray = ["Romina", "Mitchel", "Nick", "Jonas"];

// console.log({sortedArray: randomArray.sort()})

// for (let i = 0; i < randomArray.length; i++) {
//   randomArray[i] = randomArray[i].toLowerCase().split('').sort().join('').toUpperCase();
// }

// the parameter that you set in the forEach loop is what will be the index value of the array as it loops through.

// if you want to see the current index in a forEach Loop, then pass a 2nd parameter of index / i.

//  same as randomArray[i] from a for loop
//                    |
randomArray.forEach((name, i) => {
    console.log({ name, i });
    randomArray[i] = name.toLowerCase().split("").sort().join("").toUpperCase();
});

console.log({ scrambledNamesArray: randomArray });

// >>>>>>>>>>  Map Loop <<<<<<<<<<<<<
// a map is used to map through an array and return a new version of the original array; This is used so that you "DO NOT" modify the original array.

const scrammbledNames = randomArray.map((name, i) => {
    console.log({
        name,
        i,
        scrammbled: name.toLowerCase().split("").sort().join("").toUpperCase(),
    });
    return name.toLowerCase().split("").sort().join("").toUpperCase();
});

const vacationLocations = [
    {
        state: "Hawaii",
        city: "Kona",
        timeInMonths: 12,
    },
    {
        state: "Michigan",
        city: "Detroit",
        timeInMonths: 2,
    },
    {
        state: "New York",
        city: "New York",
        timeInMonths: 1,
    },
    {
        state: "Florida",
        city: "Miami",
        timeInMonths: 4,
    },
];

// the parameter that you create is equal to the element in the index while the loop is running. For the below example the first time the loop runs blah = {
//   state: "Hawaii",
//   city: 'Kona',
//   timeInMonths: 12
// },   which is the first index in vacationLocations
const destinationCommentsArray = vacationLocations.map((blah) => {
    if (blah.timeInMonths > 3) {
        blah.comment =
            "Could have taken a shrter trip to save money for the the next trip";
    } else if (blah.timeInMonths === 1) {
        blah.quote = "Way to short!!";
    } else {
        blah.random = "don't know what to say";
    }
    return blah;
});

console.log({ vacationLocations, destinationCommentsArray });

// >>>>>>>>>>>>>>. Filter Loop <<<<<<<<<<<<
// filter returns the elemt if the condition is true else it will not return the element. Filter is another good way to create a new array without modifying the original

const team1 = [
    {
        playerName: "Blah",
        playerNumber: 32,
        playerStamina: 60,
        playerShoot: 15,
        playerPass: 89,
    },
    {
        playerName: "Blah2",
        playerNumber: 22,
        playerStamina: 30,
        playerShoot: 75,
        playerPass: 19,
    },
    {
        playerName: "Blah3",
        playerNumber: 12,
        playerStamina: 45,
        playerShoot: 55,
        playerPass: 69,
    },
];

console.log({ randomArray, scrammbledNames });

const goodPassing = team1
    .map((player) => {
        if (player.playerPass > 50) {
            return player;
        }
    })
    .filter((elem) => !!elem);

const goodShoot = team1.filter((player) => {
    // if(player.playerShoot > 53) {
    //   return true
    // }

    return player.playerShoot > 53;
});

// const goodShoot = team1.filter(player => player.playerShoot > 53)

const goodStamina = team1
    .map((player) => {
        if (player.playerStamina > 48) {
            player.playerPhrase = "I can run for days on in";
            return player;
        }
    })
    .filter((player) => !!player);

console.log({ team1, goodPassing, goodShoot, goodStamina });

const mySpecificNames = randomArray.filter((name) => {
    return name.includes("i") || name.includes("I");
});

console.log({ randomArray, mySpecificNames });

// =======================================

// mathObj here is declared to be an object and cannot change from that, even though the key: value pairs within the object are treated as let declarations and can be changed. *** there are some cases where this does not happen ***
const mathObj = {
    floor: (num) => Math.floor(num),
    myNum: 75,
};
// the key value pairs of an object are concidered to be let variables even if the object is set as a const.
mathObj.myNum = 900;

console.log({ res: mathObj.myNum });

// =============  Functions ================
// 'HOISTING' vanilla function are hoisted to the top of the file when created.
// ES6 functions must be declared prior to use since they are essntially variables that are equal to a function which retuns some value.

// vanilla method of calling a function
// function myFunc() {
//   return 'My Function Return'
// }

// es6 method of calling functions (fat arrow function)
// const myFunc = () => {
//   return 'My Function Return'
// }

// auto return function (anything after the => will auto return when the function is called)
const myFunc = () => "My Function Return";

console.log(myFunc());

// when setting 1 parameter in fat arrow function you don't "need" the () but you do when setting more than 1 parameter.
const carMake = (make) => {
    if (make.toUpperCase() === "HONDA") {
        return "make Honda";
    } else {
        return "make Other";
    }
};

const carModel = (model) => {
    if (model.toLowerCase() === "Civic".toLowerCase()) {
        return "model Civic";
    } else {
        return "model Other";
    }
};

const makeNModel = (make, model) => {
    return `This car is of ${carMake(make)} and is a ${carModel(model)}`;
};

const getCarMakeNYear = (blahMake, year) => {
    return `This car is of ${carMake(blahMake)} and is from year ${year}`;
};

// when calling a function the value you pass to it is called the 'argument'.
console.log(makeNModel("HoNDa", "CiViC"));
console.log(getCarMakeNYear("HoNDa", 1987));

// =========================================
