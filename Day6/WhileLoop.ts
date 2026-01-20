//print 5 numbers 1 2 3 4 5

console.log("-------Normal Method---------")
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)



//while loop: a while loop executes as long as the condition is true
/* Intialization

while(condition){
statements;
}
*/

//example1
console.log("---Using while loop printing 1-5 numbers-----")
let i:number=1 //initialization
 while(i<=5){   //condtition
    console.log(i)
    i++  //increment/decrement
 }

// example2 :print even numbers with only while loop
console.log("---Printing even numbers using while loop----")
let even:number=2;
while(even<=10){
    console.log(even)
    even+=2;  //even=even+2
}

console.log("---Printing even numbers using while loop and if condition----")
//example2:print even numbers with only while loop and condition

let xx:number=1

while(xx<=10){
if(xx%2==0){
        console.log(xx)
    }
    xx++
}


//example3: print odd number
console.log("---Printing odd numbers using while loop----")
let odd:number=1
while(odd<=10){
    console.log(odd)
    odd+=2
}



//example3: print odd number
console.log("---Printing odd numbers using while loop adn if condition----")
let yy:number=1
while(yy<=10){
    if(yy%2!=0){
    console.log(yy)
    }
    yy++
}


//example4: Print  umbers in decending order

console.log("---printing numbers in decending order")

let desc:number=10

while(desc>=1){
    console.log(desc)
    desc--
}


//inifinite loop: when the condition never becomes false then it will got to infinite loop

/* while(true)
{
    console.log(1)
    
} */

