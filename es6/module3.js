//es6 Promises
let myPromise = new Promise(function(resolve, reject){
    let isComplete = false;

    if (isComplete){
        resolve("This is just Right");
    } else {
        reject("This is so wrong");
    }
});