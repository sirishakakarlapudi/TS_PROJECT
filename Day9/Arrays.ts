/*

Arrays in TypeScript

1. An array is a special type of variable that stores multiple values
2. the values can be same data type or different data types
3. Arrays are declared using square brackets [] or the Array<T> generic type.
4. Indexing starts at 0
5. Arrays are ordered collections, meaning the order of elements is maintained
*/


//Example1: using lateral

let fruits: string[] = [];    //Declaration


//Initialization/assigning values
fruits[0] = "Apple";
fruits[1] = "Banana";
fruits[2] = "Orange";

let names: string[] = ["Alice", "Bob", "Charlie"];  //Declaration and Initialization

console.log(fruits);  //Output: [ 'Apple', 'Banana', 'Orange' ]
console.log(names);   //Output: [ 'Alice', 'Bob', 'Charlie' ]




//Example2: using Array<T> generic type

let numbers: Array<number> = [];  //Declaration

//Initialization/assigning values
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;

let scores: Array<number> = [85, 90, 95];  //Declaration and Initialization

console.log(numbers);
console.log(scores);   //Output: [ 85, 90, 95 ]

let empNames: Array<string> = ["John", "Jane", "Doe"];  //Declaration and Initialization
console.log(empNames);   //Output: [ 'John', 'Jane', 'Doe' ]

let data:Array<string | number> = [1, "Two", 3, "Four"];  //Declaration and Initialization
console.log(data);   //Output: [ 1, 'Two', 3, 'Four' ]


let mixedArray: Array<any> = [1, "Two", true, 4.5];  //Declaration and Initialization
console.log(mixedArray);   //Output: [ 1, 'Two', true, 4.5 ]



//Example3: Iterating over an array using traditional for loop
console.log("------------Iterating over an array using traditional for loop-----------")
let colors: string[] = ["Red", "Green", "Blue"];

for(let i=0; i<colors.length; i++ ){
    console.log(colors[i])
}




//Example4: Iterating using the 'for---in' loop(indexes)

console.log("---------Iterating using the 'for---in' loop(indexes)---------")

for(let i in fruits){    //here i refers  to the index
    console.log(fruits[i])   //here we have to pass the index to extract the value
}


//Example4: Iterating using the 'for---of' loop(indexes)
console.log("---------Iterating using the 'for---of' loop(indexes)---------")

for(let value of names){  //no need to pass the index  directly the value is captured
    console.log(value)    
}



//Example5: Passing an Array to the Functions
//Search an element in the function

console.log("-----------Passing an array to the Functions--------")
function search(ele:number, arr:number[]):boolean{

    for(let i in arr){
       if(arr[i]==ele)
        return true;
    }
    return false

}


let array1:number[]=[10,20,30,40,50]

console.log(search(30, array1))

console.log(search(100, array1))




//Example6: A function takes a array and returns an array


console.log("----------------A function takes a array and returns an array------------------")
function capitalizeWords(arr:string[]): string[]{
    for (let i in arr){
        arr[i]=arr[i].toUpperCase();


    }
    return arr
}


console.log(capitalizeWords(["sirisha", "advitha", "aakruthi"]))


