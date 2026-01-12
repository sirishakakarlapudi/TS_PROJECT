//variable :conatiner which can store/hold the data

//var,let,const(keywords)
//Syntax: keyword variableName:dataType(optional) = value

/* EX: var num1:number = 10
     var num1=30 */

     var age = 30
     console.log(age)



    /*  var vs let vs const

     1) Scope
     2) Declaration
     3) Re-Declaration
     4) Re-initailization/Reassignment
     5) Hoisting 
     
     
     
     
     Different types of Scopes: Functional scope(var) and blocked scope(let, const)
     
     
     
     
     */

     function scopediff() { //fucntion
        if(true){      //block(conditional or looping statement)
            var num1=10
            let num2=20
            const num3=30
            console.log(num1)    //can access
            console.log(num2)//can access
            console.log(num3)//can access
        }
            console.log(num1)    //can access---functional
           // console.log(num2)//cannot access----block
           // console.log(num3)//cannot access---block

     }
     scopediff()


     
    //  2)Declaration/Value assignment

   // example: var and let can be initialized without declaration

     var x
     console.log(x)
     x=30
console.log(x)


let y
console.log(y)
y="sirisha"
console.log(y)

//example: const must be initialized at the time of declaration

//const z   this will throw an error
const z=10
console.log(z)




/*3 Re-Declaration
var-- allows re-declartion
let and const not allows re-declaration(making code safer)*/

var city ="New York"
console.log(city)
 var city="Japan"
 console.log(city)



 let country="India"
 console.log(country)
// let country="Japan"  this will throw an error
 const babyname= "Advitha"
 console.log(babyname)
// const babyname="Aakruthi"  this will throw an error



/* 4. Re-Initialization/ Re-assignment 
var and let re-initialization and re-assignment is possible
const---not possible for re-initialization and re-assignment  */


var animal ="Dog"
console.log(animal)
animal ="cat"
console.log(animal)


let rollno=20
console.log(rollno)
rollno=40
console.log(rollno)


const bird="hen"
// const bird="peacock"---- this will throw error message

//Hoisting---var (hoisted as undefined), let and const (hoisted as Not initialized)

console.log(xyz)     //----undefined
var xyz=10
console.log(xyz)


console.log(abc)   //Not initialized
let abc=50
console.log(abc)

console.log(happy)   //Not initialized
const happy="Hello"
console.log(happy)
