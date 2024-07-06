"use strict";
//Assignment no 12
//Greetings: Start with the array you used in Exercise 11, but instead of 
//just printing each person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name.
let names = ["Minhal", "Rabia", "Dua", "Zainab", "Anushka"];
//loop
for (let i = 0; i < names.length; i++) {
    console.log(`Hello, ${names[i]}! how are you doing?`);
}
//for each
names.forEach(name => {
    console.log(`Hi, ${name}! how are you doing today?`);
});
//for of loop
for (const friendName of names) {
    console.log(`Dear, ${friendName}! how are you feeling now?`);
}
