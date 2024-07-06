//Assignment no 44
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//The function should have one parameter that collects as many items as the function call provides, 
//and it should print a summary of the sandwich that is being ordered. Call the function three times, 
//using a different number of arguments each time.


function makeSandwich(...items:string[]){
    console.log("\nMaking a Sandwich with following items: \n");
    items.forEach(singleItem => 
        console.log(singleItem)
    )
    console.log("\nNow enjoy your Sandwich");
}

makeSandwich("Bread", "Cheese")
makeSandwich("Chicken", "Egg", "Butter")
makeSandwich("Bread", "Cheese", "Ketchup", "Chicken", "Egg", "Tomato",  "Butter")