/*
Callback hell is a situation in JavaScript where callbacks are nested
within others callbacks to the degree where the code is difficult to read.
Old pattern to handle asynchronous functions. Nowadays , the use of
promises + async/await is more recommended.
*/

function task1(callback){
    setTimeout(()=>{
    console.log("Data from sensor 1 acquired")
    callback();
    },1000);
    
}
function task2(callback){
    setTimeout(()=>{
    console.log("Data from sensor 2 acquired")
    callback()
    },4000);
    
}
function task3(callback){
    setTimeout(()=>{
    console.log("Data from sensor 3 acquired");
    callback()
    },2000);
}
function task4(callback){
    setTimeout(()=>{
    console.log("Data from sensor 4 acquired")
    callback()
    },4000);
    
}

task3(()=>{
    task2(()=>{
        task4(()=>{
            task1(()=>{
                console.log("All tasks are completed!");
            });
        })
    })
})

