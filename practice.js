// // // // // // // let username = "Ravi";

// // // // // // // console.log(username);

// // // // // // function login(user) {

// // // // // //     console.log("Login " + user);

// // // // // // }

// // // // // // login("Admin");

// // // // // let age = 10;

// // // // // if(age >= 18) {
// // // // //     console.log("Allowed");
// // // // // } else {
// // // // //     console.log("Not Allowed");
// // // // // }

// // // let users = ["admin", "tester", 123];

// // // // console.log(users[0]);
// // // // console.log(users[1]);
// // // // console.log(users[2]);  

// // // for(let user of users) {
// // // if(user === "admin") {
// // //     console.log("User: " + user);
// // // }
// // //     console.log(user);

// // // }

// // let employee = {

// //     name: "Ravi",

// //     role: "Tester"

// // };

// // console.log(employee.name);
// // console.log(employee.role);
// // console.log(employee);

// async function test() {

//     console.log("Start");

// }

// test();

let promise = new Promise((resolve) => {

    resolve("Success");

});

promise.then(data => {

    console.log(data);

});

const value = 10;
// value = 20; // This will throw an error because 'value' is a constant
console.log(value);

const xy = 10;
console.log(xy);

let x = (value>10)? "Greater than 10" : "Less than or equal to 10";
console.log(x);

let y=0;
while(y<5) {
    console.log("y: " + y);
    y++;    
}

//  package manager - npm reuse is what available in npm. It is a repository of packages that can be easily installed and used in your projects. It allows developers to share and reuse code, making it easier to build applications. With npm, you can find packages for various functionalities, such as web development, data manipulation, testing, and more. It also provides a command-line interface for managing dependencies and running scripts. Overall, npm is a valuable tool for JavaScript developers to enhance their productivity and streamline their workflow.

