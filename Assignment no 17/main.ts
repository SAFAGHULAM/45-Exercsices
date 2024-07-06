//Assignment no 17
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time
//for the dinner, and you have space for only two guests.

//• Start with your program from Exercise 16. Add a new line that prints a message
// saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain
// in your list. Each time you pop a name from your list, print a message to that
//  person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. 
//Print your list to make sure you actually have an empty list at the end of your program.

//start Of Question 16
//let guestList:string[] = ["Amna", "Sehar", "Dua"];
//start Of Question no 16
//console.log("Great News! we found a bigger table");

//Unshift
//guestList.unshift("Tooba");

//splice()
//guestList.splice(Math.floor(guestList.length/2),0, "Rabia");

//push
//guestList.push("Afreen");

//console.log(guestList);

//for each
//guestList.forEach(guest => {
// console.log(`hey! ${guest} I would like to invite you all to the dinner`);
//});

//Start Of Question 17
//print message
console.log("Unfortunately! the new dinner table wont arrive so we can invite only two guests");

//updaited list from Question 16
let guestLlist:string[] = ["Tooba", "Amna", "Rabia", "Sehar","Afreen"]
        
//remove guest from the list
while(guestLlist.length > 2){
    let removedGuest:string | undefined = guestLlist.pop();
    if (removedGuest !== undefined){
    console.log(`Sorry, ${removedGuest} we cant invite you`);
}
}

//Print a message to each of the two people still on your list, letting them know they’re still invited.
guestLlist.forEach(guest => {
    console.log(`Dear, ${guest} You are still invited for dinner`);
});

//remove 2 names from the list
guestLlist.splice(0, guestLlist.length)

//print updatedempty list

console.log("updated list of guest", guestLlist);

