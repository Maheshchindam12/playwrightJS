let students = ["Ravi", "Sam", "John"];

for(let student of students) {

    console.log(student);   
}
for(let student of students) {
    if(student==="Ravi") {
        console.log("Topper");
    }
    else {
        console.log("student");
    }   
}
