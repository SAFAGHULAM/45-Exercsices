"use strict";
//Assignment no 13
//Your Own Array: Think of your favorite mode of transportation,
//such as a motorcycle or a car, and make a list that stores 
//several examples. Use your list to print a series of statements about these items,
// such as “I would like to own a Honda motorcycle.”
let transportationMode = ["Car", "Bike", "Motorcycle", "Bus"];
//loop
for (let i = 0; i < transportationMode.length; i++) {
    console.log(`I would like to own a Honda ${transportationMode[i]}`);
}
//for each
transportationMode.forEach(transport => {
    console.log(`I would like to own a Honda ${transport}`);
});
//for of loop
for (const transport of transportationMode) {
    console.log(`I would like to own a Honda ${transport}`);
}
