//Assignment no 14
//Guest List: If you could invite anyone, living or deceased, to dinner,
// who would you invite? Make a list that includes at least three people you’d
// like to invite to dinner. Then use your list to print a message to each person,
// inviting them to dinner.

//Define array of guest
let guest_List:string[] = ["Amna", "Minhal", "Dua"];

//Invite each guest for dinner
//loop
for (let i = 0; i < guest_List.length;i++) {
    console.log(`Hey!${guest_List[i]} I would like to invite you to dinner`);
}

//for each
guest_List.forEach(guest => {
    console.log(`Hey! ${guest} I would like to invite you to dinner`);
});

//for of loop
for (const guest of guest_List) {
    console.log(`Hey! ${guest} I would like to invite you to dinner`);
}

//map()
//Invite guest
let invitation:string[] = guest_List.map(guest =>`Hey! ${guest} I would like to invite you to dinner`)
console.log(invitation);


invitation.forEach(invitations =>{
    console.log(invitations);
})

