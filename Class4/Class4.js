/*Promise is an object in JavaScript to manage asynchronous operations.
It has 3 states : Pending -> Resolved or Rejected

new Promise((resolve,reject)=>{asynchronous code})
*/


function fillUpTheBottle(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const bottleFilledUp = true;
            if(bottleFilledUp){
                resolve("Bottle filled up with beer");
            }
            else{
               
            }
            
        
        },1000);
    })
    
    
}
function stickSticker(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const stickStuck = true;
            if(stickStuck){
                resolve("Sticker stuck");
            }
            else{
                 reject("Process failed , return to the first step")
            }
            
        
        },4000);
    })
    
    
}
function putOnTheLid(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            const lidPut = true;
            if(lidPut){
            resolve("Lid connected to the tip of the bottle ");
            }
            else{
                 reject("Process failed , return to the first step");
            }
        
        },2000);
    })
    
}
function twistTheLid(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const lidTwisted = false;
            if(lidTwisted){
                resolve("Lid twisted");
            }
            else{
                reject("Process failed , return to the first step");
            }
            
        },4000);
    
    })
    
}

fillUpTheBottle().then(value => {  console.log(value); return stickSticker()})
    .then((value)=>{
    console.log(value);return putOnTheLid()})
    .then((value)=>{console.log(value);return twistTheLid()})
    .then((value)=>{
    console.log(value);console.log("Bottle ready for next process")}).catch(error => console.log(error));
