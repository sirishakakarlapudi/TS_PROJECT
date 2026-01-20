//Anonymous Function: it is also called as Unamed Function/Nameless function
// it is a function without a name instead the function is assigned to a variable


/*Syntax: 

let variable =function(parameters)
{
fucntion body;
}

variable();   calling the function
*/



//example1: Anonymous Function
console.log("-------Anonymous Function without parameters---------")

let msg=function(): string{
    return "Hello Tyescript"
}

console.log(msg());


//example2: Anonymous Function with parameters
console.log("-------Anonymous Function with parameters---------")

let cal=function(add1:number, add2:number){
    console.log("The sum is", add1+add2)
}
 cal(20,30);