/*Async makes a function return a empty promise , you don't need to define resolve and reject
Await makes an async function wait for a promise */


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
            const lidTwisted = true;
            if(lidTwisted){
                resolve("Lid twisted");
            }
            else{
                reject("Process failed , return to the first step");
            }
            
        },4000);
    
    })
    
}


async function executeAutomationProcess(){

    try{
        const fillResult = await fillUpTheBottle();
        console.log(fillResult);

        const stickerResult = await stickSticker();
        console.log(stickerResult);

        const lidResult = await putOnTheLid();
        console.log(lidResult);

        const twistResult = await twistTheLid();
        console.log(twistResult);
    }
    catch(err){
        console.log(err);
    }
}

executeAutomationProcess();

