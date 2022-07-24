// Import stylesheets
import './style.css';

// *********************************************
// Refactoring Javascript Code: Truthy and Falsy
// *********************************************

let b;
console.log(typeof b); //undefined

if (b != undefined) {
  console.log('this is b: ', b);
} else {
  console.log('b is empty');
}
//b is empty

//if b has a value - and is therefore not undefined - we want to print the value to to console. Otherwise, if b does not have a value, then we want to print the statement "b is empty".

//refactor the same code in more elegant and less redundant way
if (b) {
  console.log('this is b: ', b);
} else {
  console.log('b is empty');
}
//b is empty
// In a boolean context, the value of undefined will always return false.
// When we write (b != undefined) we are really asking if b is not false. Alternatively, is b true?

b = true;
if (b) {
  console.log('this is b: ', b);
} else {
  console.log('b is empty');
}
// this is b: true

b = false;
if (b) {
  console.log('this is b: ', b);
} else {
  console.log('b is empty');
}
//b is empty

b = '';
if (b) {
  console.log('this is b: ', b);
} else {
  console.log('b is empty');
}
//b is empty

b = 'Kyle';
if (b) {
  console.log('this is b: ', b);
} else {
  console.log('b is empty');
}
//this is b: Kyle

//Takeout
// *** When b is placed in boolean context, the value of b becomes true.
// *** Numbers, integers, and objects are what we call truthy values.
// *** Truthy values are values that return true when they are placed in boolean contexts.

// Refactor same code using 'Ternary Operator'
let a;
a ? console.log('this is a: ' + a) : console.log('a is empty');
//a is empty

// Here ( a ? ) ternary operator is checking if a is true do ... else (:) do ....

a = 0;
a ? console.log('this is a: ' + a) : console.log('a is empty');
// a is empty

a = NaN;
a ? console.log('this is a: ' + a) : console.log('a is empty');
// a is empty

a = null;
a ? console.log('this is a: ' + a) : console.log('a is empty');
// a is empty

a = [];
a ? console.log('this is a: ' + a) : console.log('a is empty');
// this is a:

a = {};
a ? console.log('this is a: ' + a) : console.log('a is empty');
// this is a: [object Object]

a = [{}];
a ? console.log('this is a: ' + a) : console.log('a is empty');
// this is a: [object Object]

