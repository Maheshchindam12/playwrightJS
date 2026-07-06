let age = 15;

if(age >= 18) {

    console.log("Adult");

}else {

    console.log("Minor");

}


let marks = 75;

if(marks >= 90) {

    console.log("Grade A");

}
else if(marks >= 70) {

    console.log("Grade B");

}
else {

    console.log("Fail");

}

for(let i = 1; i <= 5; i++) {

    console.log(i);

}

for(let i = 1; i <= 10; i++) {

    if(i % 2 === 0) {

        console.log(i);

    }

}

let users = ["admin", "tester", "manager"];

for(let user of users) {

    console.log(user);

}

let fruits = ["Apple", "Mango", "Orange"];

console.log(fruits);

fruits.push("Banana");

console.log(fruits);

for(let fruit of fruits) {

    console.log(fruit);

}

let urls = [

    "google.com",

    "amazon.com",

    "github.com"

];