//break
console.log("-------break statement example-------");   
for (let i=1; i<=10; i++){
    if(i==6){
        break;   //it will exit the loop when i=6
    }
    console.log(i);
}


//continue
console.log("-------continue statement example-------");
for (let j=1; j<=10; j++){
    if(j==6){
        continue;   //it will skip the value when j=6 and continue the loop
    }
    console.log(j);
}
//continue
console.log("-------continue statement example with multiple conditions-------");  
console
for (let j=1; j<=10; j++){
    if(j==6 || j==8 || j==4){
        continue;   //it will skip the value when j=6 and continue the loop
    }
    console.log(j);
}