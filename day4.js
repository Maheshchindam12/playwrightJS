// SYNCHRONOUS CODE

console.log("Start");

console.log("Middle");

console.log("End");

// ASYNCHRONOUS CODE
console.log("Start");
setTimeout(() => {

    console.log("Middle for waiting 2 seconds");  
}, 2000);
console.log("End");
setTimeout(() => {

    console.log("last for waiting 4 seconds");  
}, 4000);

let promise = new Promise((resolve) => {

    setTimeout(() => {

        resolve("Data Loaded");

    }, 3000);

});

promise.then((datax) => {

    console.log(datax);

});

function delay() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Completed test");

        }, 2000);

    });

}

async function test() {

    console.log("Start test");

    let result = await delay();

    console.log(result);

    console.log("End test");

}

test();