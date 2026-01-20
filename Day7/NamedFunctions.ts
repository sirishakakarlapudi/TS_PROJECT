//named function : A function that is declared with a name


/* Syntax

function functionname(parameter):returnType
{
block of code

}


functionname(); //calling the function/invoking the function

*/

//example1: Named function with out parameters and return type
console.log("Named function with out parameters and return type")

function display():void{
    console.log("Welcome to the Typescript")

}

display();  //calling the function



//example2: Named function with  parameters and return type

console.log("Named function with  parameters and return type")

function addNumbers(add1:number, add2:number):number{
    return add1+add2
}


let res:number=addNumbers(3,5)
console.log("the result is "+res)

console.log(addNumbers(3,5))

//console.log(addNumbers(3,5.6))   //this will throw complie time error because expected 2 but given 3
//console.log(addNumbers(3))   //this will throw complie time error because expected 2 but given 1


//example3: Named Functions with Rest Parameters

//Rest Parameters dont restrict the number o values that you can pass to the functions

console.log("Named Functions with Rest Parameters")
function addNumber(...nums:number[]){
    let i;
    let sum:number=0
     for(i=0;i<nums.length;i++){
        sum=sum+nums[i];
     }

     console.log("the final result is : " +sum)



}

addNumber(20,50)
addNumber(100,20,50)


//example4: Named Functions with Rest Parameters -multiple types
console.log("Named Functions with Rest Parameters -multiple types")


function findElements(...elements:(number | string)[]):number{

    return elements.length

}

console.log(findElements("sirisha", 67, "john"))
console.log(findElements(56,89,54,34))
console.log(findElements("ADVITHA"))

//example4: Named Functions with Optional Parameters

console.log("Named Functions with optional parameters")

function addDetails(id:number, name: string, email?:string){ // bye keeping ? before the variable then it becomes optional parameter
                                                            // here there is a condition if the first parameter is marked optional the rest of the paramteres also should be marked as optional 
                                                            // otherwise it will throw compile time error so always keept the optional parameters at the last

    console.log("ID : " ,id);
     console.log("Name : " ,name)
      console.log("EMAIL ID: " ,email);

}

addDetails(101, "sirisha")
addDetails(102, "john", "sirisha89@gmail.com")


//example5: Named Functions with Default Parameters

console.log("Named Functions with Default Parameters")
function multiplyNumbers(num1:number, num2:number=5):number{ // here num2 is default parameter if we dont pass the value it will take the default value 5
    return num1 * num2
}

console.log(multiplyNumbers(4,6))  //24
console.log(multiplyNumbers(4))    //20 because num2 will take the default value 5