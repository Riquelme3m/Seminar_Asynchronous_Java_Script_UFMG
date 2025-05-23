/*
HTTP(Hyper text transfer protocol) Request is meant to get date from another server
We make these requests to an API endpoint, the response is in JSON form

XMLHttpRequest is a built-in browser object used to interact with servers.
Allows us to send HTTP or HTTPs requests to a web server and load the response data back into the script
Http status code:

100 - Informational -  process is continuing
200 - Success
300 - Redirection
400 - Client error
500 - Server error

Java Script is single-threaded in browsers
When HTTP request is made,the browser handles the network operations in the background
outside of our JavaScript thread and the code keeps running
When the response  is ready, the browser puts your callback function
into a queue and it runs this callback function when the main thread is free

JSON - Java Script Object Notation
it's a data format highly used to transmit data
between server and web applications
JSON.parse - turns JSON format into Java Script Object
*/


const getTodos = (callback)=>{
    const request = new XMLHttpRequest();


    request.addEventListener('readystatechange',()=>{
        
        if(request.readyState === 4 && request.status == 200){
            callback(undefined,request.responseText);
        } else if(request.readyState === 4){
            callback("Could not fetch data",undefined);
        }
    })


    request.open('GET','https://jsonplaceholder.typicode.com/posts/');

    request.send();
}

console.log(1);
console.log(2);

getTodos((err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
    
    
});

console.log(3);
console.log(4);

