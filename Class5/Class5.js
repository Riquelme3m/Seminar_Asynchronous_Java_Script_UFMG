/*Fetch API is used to make HTTP/HTTPS requests
the syntax is clearer and easier and it uses promises to handle
responses unlike XMLHTTPrequests which uses callbacks  */


fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((resolve)=>resolve.json())//Alreayd does the parse converting Json into Java Script objects
.then((data)=> console.log(data)).catch((err)=>{
    console.log("rejected",err);
})