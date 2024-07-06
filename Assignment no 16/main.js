"use strict";
//Assignment no 16
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests
//to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement
//to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add
//one new guest to the end of your list. 
//• Print a new set of invitation messages,one for each person in your list.
//start of Question 15
//let guestList:string[] = ["Amna", "Minhal", "Dua"];
//print the name who cant make the dinner
//let unableAttend:string = guestList.splice(1,1)[0];
//console.log(`${unableAttend} cant make dinner`);
//push
//guestList.push('Sehar');
//print a message
//guestList.forEach(guest => {
//    console.log(`Hey! ${guest} you are invited to the dinner`);
//});
//start Of Question 16
let guesttList = ["Amna", "Sehar", "Dua"];
//start Of Question no 16
console.log("Great News! we found a bigger table");
//Unshift
guesttList.unshift("Tooba");
//splice()
guesttList.splice(Math.floor(guestList.length / 2), 0, "Rabia");
//push
guesttList.push("Afreen");
console.log(guesttList);
//for each
guesttList.forEach(guest => {
    console.log(`hey! ${guest} I would like to invite you all to the dinner`);
});
