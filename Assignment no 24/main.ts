//Assignment no 24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. Have at least one True and one False result 
// for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or 
//equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

//starting attempting question
// • Tests for equality and inequality with strings
console.log("Equality test:", ("Safa Ghulam" as string) ==="Safa Ghulam");

console.log("Inequality test:", ("Safa Ghulam" as string) !=="Kiran Ali");

// • Tests using the lower case function
console.log("LowerCase Test:", "SAFA GHULAM".toLowerCase()==="safa ghulam");

// • Numerical tests involving equality and inequality, greater than and less than, greater than or 
//equal to, and less than or equal to
console.log("Equality test:", 500 === 500); //Equality
console.log("Inequality test:",(1000 as number) !== 900); //Inequality
console.log("Greater than test:", 1000 > 100); //Greater than
console.log("Less than test:", 10 < 100); //Less than
console.log("Greater than and equal to test:", 10 >= 10 );
console.log("less than and equal to test:", 5 <= 10 );

// • Tests using "and" and "or" operators
console.log("And operator test:", true && true);
console.log("Or operator test:", true || false);

// • Test whether an item is in a array
const fruit = [1, 2 ,3, 4];

console.log("Test number:", fruit.includes(2));

// • Test whether an item is not in a array
const fruit1 = [1, 2 ,3, 4];

console.log("Test number:", !fruit.includes(6));













