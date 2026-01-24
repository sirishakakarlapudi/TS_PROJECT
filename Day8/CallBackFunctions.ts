/*Call Back Function: it is a function that is passed as an argument to another function to get it executed later
Why use clal back functions:
1. Useful when we want to execute a function only after another function execution completes
2. it is commonly used in asychronous operations like API calls, file handing or event handling
3. Synchronous means the code runs in a particular sequence of instructions given in the program, 
whereas asynchronous code execution allows to execution of the upcoming instructions immediately*/


//Example1:  

function greet(name: string, callback: (message: string) => void): void {    //parameters
    console.log("Hello " + name);
    callback("Welcome to TypeScript Call Back Functions");
}



//call back function
function showMessage(message: string): void {
    console.log("Message: " + message);
}

greet("john", showMessage); //passing function as an argument