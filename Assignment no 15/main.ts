//Assignment no 15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your
// program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name
// of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.

//Question 14
//Define array of guest
//let guestList:string[] = ["Amna", "Minhal", "Dua"];

//Invite each guest for dinner
//loop
//for (let i = 0; i < guestList.length;i++) {
//    console.log(`Hey!${guestList[i]} I would like to invite you to dinner`);
//}

//for each
//guestList.forEach(guest => {
//  console.log(`Hey! ${guest} I would like to invite you to dinner`);
//});

//for of loop
//for (const guest of guestList) {
//    console.log(`Hey! ${guest} I would like to invite you to dinner`);
//}

//map()
//Invite guest
//let invitation:string[] =guestList.map(guest =>`Hey! ${guest} I would like to invite you to dinner`)
//console.log(invitation);


//invitation.forEach(invitations =>{
//   console.log(invitations);
//})

//start of Question 15
let guest_list:string[] = ["Amna", "Minhal", "Dua"];

//print the name who cant make the dinner
let unableAttend:string = guest_list.splice(1,1)[0];

console.log(`${unableAttend} cant make dinner`);

//push
guest_list.push('Sehar');

//print a message
guest_list.forEach(guest => {
    console.log(`Hey! ${guest} you are invited to the dinner`);
});

