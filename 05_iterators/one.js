//for loop
// for(let i=0;i<10;i++){
//     console.log(i);
//}// so it prints number till 9 as 10is not less than 10


//nested for loop //important
for( let i=0;i<=10;i++){
    console.log(` i = ${i}`);
    for(let j=0;j<=10;j++){
        console.log(i + "*"+ j +  "=" +  i*j);// this is how we can print the table
    }
}
console.log("This is how nested loop works");


// how to run for loop on arrays
let Array = ["flash", "batman","Superman"];
console.log(Array.length)
for(let k=0; k<Array.length; k++){
    console.log(Array[k]);
}


//break keyword 
for (let i=1;i<=20;i++){
    if(i==5){
        console.log('5 is detected'); // to break the iteration
        break;
    }
    console.log(`${i}`)

}
for (let i=1;i<=20;i++){
    if(i==5){
        // console.log('detected 5');
        continue; // to skip an iteration 
    }
    console.log(`${i}`)

}

 //while loop 
 let number = 0;
 while(number<=10){
 console.log(number)
 number=number+2;
 }