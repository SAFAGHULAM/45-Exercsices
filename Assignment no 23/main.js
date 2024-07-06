"use strict";
//Assignment no 23
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and
// your prediction for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//10 tests
//test 1
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
//test 2
console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota');
//test 3
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');
//test 4
console.log("Is car === 'subaru'? I predict False");
console.log(car === 'subaru');
//test 5
console.log("Is car.length > 0? I predict True");
console.log(car.length > 0);
//test 6
console.log("Is car.length < 5? I predict False");
console.log(car.length < 5);
//test 7
console.log("Is car.toUpperCase() === 'subaru'? I predict True");
console.log(car.toUpperCase() === 'SUBARU');
//test 8
console.log("Is car.toUpperCase() === 'subaru'? I predict True");
console.log(car.toUpperCase() === 'subaru');
//test 9
console.log("Is car.toLowerCase() === 'subaru'? I predict True");
console.log(car.toLowerCase() === 'subaru');
//test 10
console.log("Is car.includes('u')? I predict True");
console.log(car.includes('u'));
//starts with su(True)
//starts with bu(false)
