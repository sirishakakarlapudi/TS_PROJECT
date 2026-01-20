//For Loop: A for loop is typically used when the number of iterations is know beforehand

/*Syntax:

for(initiatialization; condition ; incr/decr)
{
statements;

}

*/ 


//example1: To print  numbers from 1-5
console.log("-----to print numbers from 1-5------")
for(let i=1; i<=5; i++){

    console.log(i);

}

//example2:to print even numbers using for loop
console.log("------To print even numbers using loop----------")

for(let even=2; even<=10; even+=2){

    console.log(even)
}


//example2:to print even numbers using for loop and condition
console.log("------To print even numbers using loop and condition----------")

for(let even1=1; even1<=10; even1++){

    if(even1%2==0){

    console.log(even1)
    }
}



//example3:difference between global and local varaiable

let testnum:number

//let testnum:number     //when the same variable is redeclared then it will throw an error 



for(let testnum=1; testnum<=5; testnum++ ){    //here eventhough testnum is redeclared again it will not throw error because here the variable is local variable
console.log("value of testnum inside for loop:"+testnum);   //o/p will be 1 to 5

}

console.log("value of testnum after for loop:"+testnum);  //here it will print undefined because the global variable is not initialized
//o/p: value of testnum after for loop: undefined





for (testnum=1; testnum<=5; testnum++ ){   //here in this case testnum is global variable
    console.log("value of testnum inside for loop without let keyword:"+testnum);   //o/p will be 1 to 5

}
console.log("value of testnum after for loop without let keyword:"+testnum);  //here it will print 6 because the global variable is initialized inside the for loop
//o/p: value of testnum after for loop without let keyword:6   
// because after increment the value the value is 6 condition i sfailed so it will exit the loop and in the final value of testnum is 6 is printed



//example4:

let num1:number;

for(num1=1; num1<=5; num1++);  //as there is not statement inside the for loop it will not print anything inside the loop
console.log("value of num1 after for loop:"+num1);  //after increment the value the value is 6 condition is failed so it will exit the loop and in the final value of num1 is 6 is printed
//o/p: value of num1 after for loop:6



let num2:number;
for(let num2=1; num2<=5; num2++);  
//as there is not statement inside the for loop it will not print anything inside the loop
console.log("value of num2 after for loop:"+num2);  
//here it will print undefined because the global variable is not initialized
//o/p: value of num2 after for loop: undefined



