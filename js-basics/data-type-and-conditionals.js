// Javascript Stuff

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

// =======================================

// *****************   DO THIS ALWAYS *****************

// any syntax that you don't "ALWAYS ALWAYS ALWAYS" google it so you have a better understanding of it, in case something breaks, you know how to fix it

// ****************************************************
