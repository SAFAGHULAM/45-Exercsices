"use strict";
//Assignment no 37
//Large Shirts: Modify the make_shirt() function so that shirts are large by default
// with a message that reads I love TypeScript. Make a large shirt and a medium shirt with
//he default message, and a shirt of any size with a different message.
function make_Shirt(size = "large", printMessage = " I love TypeScript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`);
}
make_Shirt();
make_Shirt("Medium");
make_Shirt("small", "I love Javascript");
