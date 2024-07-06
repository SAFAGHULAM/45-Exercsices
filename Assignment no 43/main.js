"use strict";
//Assignment no 43
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
// with a copy of the array of magicians’ names. Because the original array will be unchanged,
// return the new array and store it in a separate array. Call show_magicians() with each array 
// to show that you have one array of the original names and one array with the Great added to each
// magician’s name.
function show_Magicians1(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great1(magicians) {
    return magicians.map(name => `The great ${name}`);
}
let magicians_names2 = ["Ali", "Ahmed", "Abid"];
let copy_magicians_names2 = magicians_names2.slice();
let copy_great_magicians = make_great1(copy_magicians_names2);
console.log("\nOriginal Array\n");
show_Magicians1(magicians_names2);
console.log("\nCopied Array\n");
show_Magicians1(copy_great_magicians);
