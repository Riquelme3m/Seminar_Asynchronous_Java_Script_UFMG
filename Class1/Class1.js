/*
    Async JavaScript governs how we perform tasks which take some time to complete,
    for example, getting date from a database
    We start something now that finishes later
*/

console.log(1);
console.log(2);
setTimeout(()=>{
    console.log("Callback function fired");
},2000); //After 2 seconds we fire the function defined as the first parameter of setTimeout
console.log(3);
console.log(4);