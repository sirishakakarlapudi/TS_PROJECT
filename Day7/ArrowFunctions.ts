/*Arrow Functions/Lamda Functions: 
Lamda refers to anonymous functions.
lamda functions reffers to conceise mechanism of anonymous functions
these are also called as Arrow Functions

There are three pasrts to Lamda functions

1. Parameters-A function may have optionally parameters
2. The fat arrow notation or lamda notation(=>)---It is also called as goes to operator
3. Statements: Represents the function instruction set



Syntax:

let variable = (parameters) +>
{
statement
}
variable();

*/



//Example1: Arrow Functions with no parameters and no return type
console.log("-----Arrow Functions with no parameters and no return type-----")
let message=():void => {
console.log("Hello tYPEsCRIPT")
}

message();

//Example2: Arrow Functions with parameters and return type
console.log("-----Arrow Functions with parameters and return type-----")
 let multiply=(mul1:number, mul2:number):number =>{
    return mul1*mul2
 }

 console.log(multiply(20,40))



 //Example3: Arrow Functions with Implicit return type
 //when only one return statement is there this is used
 //implicit retrun means no need to write {} and no need return type and this is applicable when there is only one single return statement
    console.log("-----Arrow Functions with Implicit retrun type-----")
     let addition=(add1:number, add2:number):number => add1+add2

     console.log(addition(30,40))


//Example4: Arrow Functions with Optional Parameters
console.log("--------Arrow Functions with Optional Parameters-----")
 let userDetails=(id:number, name:string, emailid?:string):void =>{
    console.log("Id: ", id)
    console.log("Name: ", name)
    if(emailid!= undefined)
    console.log("EmailId: ", emailid)
 }

 userDetails(34, "sirisha")


 //Example5: Arrow Functions with Default Parameters

 console.log("---------Arrow Functions with Optional Parameters---------")

 let calculate=(cal1:number, cal2:number=50):number =>{
    return cal1*cal2
 }
console.log(calculate(30))
console.log(calculate(30,40))

//Example6:Arrow Functions with Rest Parameters

 console.log("---------Arrow Functions with Rest Parameters---------")
  
 let findElement= (...elements:(number | string)[]):number =>{
return elements.length

 }

 console.log(findElement("sirisha",67,"advitha"))
