//nullish coalescing operator is basically used to fallback means if the database value is giving undefined or null value then return it null or undefined only and if the database gives any value then return that value 
let va11;
// val1 = 5 ?? 10
// console.log(val1);// so it assigned 5
 val2 = null??15
 console.log(val2)// it gives 15 
 //matlab is operator ka matlab hai ki value aayi hia toh value eturn kardo null aaya hai toh null krdo
val3 = null??15??20
console.log(val3); // in this case the middle value will be 15 only// dont worry projects will make you understand this operator's concept


//ternary operator
const iceteaprice = 100;
iceteaprice>=80?console.log("Price is less than 100"):console.log("Price is much higher")