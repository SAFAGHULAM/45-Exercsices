//Assignment no 03
//Name Cases: Store a person’s name in a variable, and then print
 //that person’s name in lowercase, uppercase, and titlecase.

 let perName:string = "safa ghulam muhammad";
 console.log(perName.toUpperCase());

let NameOfPerson:string = "SAFA GHULAM MUHAMMAD";
console.log(NameOfPerson.toLowerCase());

function toUpperCase(uppercase:string) {
    return uppercase.toUpperCase();
}

let inputString:string = "safa ghulam muhammad";
let upperCaseString:string = toUpperCase(inputString);
console.log("UpperCase:", upperCaseString);

//titlecase //Title Case
let personName:string = "i am learning typescript"
//step 01
let words:string[] = personName.split(" ");

//step 02
let titleCaseName:string = "";

//step 03
//for loop 1-10
for (let i = 0; i < words.length; i++) {
    titleCaseName += words[i].charAt(0).toUpperCase()
    +words[i].slice(1).toLowerCase() + " "
}
console.log(titleCaseName);
//  toUpercase() built in
//index 0
//length 1