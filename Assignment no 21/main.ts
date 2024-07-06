//Assignment no 21
//They think of something you could store in a TypeScript Object. Write a program that creates
// Objects containing these items.

//In object we learned
//default typed object
//update property
//add new property
//define custom type property
//use any with object

/*let objectName = {
    key1: *value1*,
    key2: *value2*,
}; */

//let student = {
//    name: "Rahil",
 //   rollnumber: 30456,
 //   grades: [85, 78, 92]
//};

//console.log(student);

//let product = {
 //   name: "Mobile Phone",
 //   prize: 22000,
  //  quality: "Perfect",
 //   description: "Unused"
//}

//console.log(product);

//type interface

//interface person {
 //   name:string;
 //   age:number;
  //  education:string;
  //  city:string;
//}

//let person1: person ={
 //   name: "simra",
  //  age: 19,
  //  education: "intermediate",
  //  city: "lahore"
//}

//let person2: person ={
  //  name: "rafay",
  //  age: 16,
  //  education: "matric",
  //  city: "islamabad"
//}

//console.log(person1.education);

//type annotation
//let myvariable: string = "hello";

//type infers
//let anothervariable = "world";

//initial object
//let person ={
 //   name: "rafay",
  //  age: 16,
 //   education: "matric",
  //  city: "islamabad"
//}

//updated property
//person.age = 18;
//person.city = "karachi";

//console.log(person);

//add new property
//person["gender"] = "male"

//console.log(person);

//define custom type property

//interface person {
  //  name:string;
  //  age:number;
  //  education:string;
  //  city:string;
//}

//let person1: person ={
 //   name: "simra",
 //   age: 19,
 //   education: "intermediate",
 //  // city: "lahore"
//}

//let person2: person ={
  //  name: "rafay",
  //  age: 16,
  //  education: "matric",
  //  //city: "islamabad"
//}

//use any with object
//let myVariable: any;

//myVariable = 12;
//myVariable = "bye";
//myVariable = false;

//question no 21

let objectContainingItems: {[key: string]: any} ={
    "laptop": {
        name: "laptop",
        price:"8000",
        description: "high performance laptop with fast processor"
    },
    "mouse": {
        name: "mouse",
        price: "10000",
        description: "high performance mouse with fast processor"
    },
    "keyboard": {
        name: "keyboard",
        price: "5000",
        description: "high performance keyboard with fast processor"
    }
}
console.log(objectContainingItems);

