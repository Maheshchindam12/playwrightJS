let student = {

    name: "Ravi",

    age: 22,

    course: "Automation"

};

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.course);    


let employee = {

    name: "Ravi",

    greet: function() {

        console.log("Welcome");

    }

};

employee.greet();

function add(a, b) {

    return a + b;

}

let result = add(2, 3);

console.log(result);


const greet = () => {

    console.log("Hello");

};

greet();


const add1 = (a, b) => {

    return a + b;

};

console.log(add1(1, 3));

const square = num => num * num;

console.log(square(4));


let users = [

    {
        username: "admin",
        password: "1234"
    },

    {
        username: "tester",
        password: "5678"
    }

];

console.log(users);