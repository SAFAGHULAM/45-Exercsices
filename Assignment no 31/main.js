"use strict";
//Assignment no 31
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let userNames1 = ["admin", "Rafay", "Osman", "Eric", "Peter"];
if (userNames1.length === 0) {
    console.log("We need to find some users!");
}
else {
    userNames1 = [];
    console.log("All users has been removed", userNames1.length);
}
