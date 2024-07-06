//Assignment no 19
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message
//indicating the number of people you are inviting to dinner.

//question 17
let guestList:string[] = ["Tooba", "Amna", "Rabia", "Sehar","Afreen"]
        
//remove guest from the list
while(guestList.length > 2){
    let removedGuest:string | undefined = guestList.pop();
    if (removedGuest !== undefined){
    console.log(`Sorry, ${removedGuest} we cant invite you`);
}
}

//Print a message to each of the two people still on your list, letting them know they’re still invited.
guestList.forEach(guest => {
    console.log(`Dear, ${guest} You are still invited for dinner`);
});

//remove 2 names from the list
guestList.splice(0, guestList.length)

//print updatedempty list

console.log("updated list of guest", guestList);

