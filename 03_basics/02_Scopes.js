// const functionTwo = function(num){// this is another way of writing a function
// return num+2;
// }

//  console.log(functionTwo(5))



 //suppose we make two functions and understand mini hoisting 
  console.log(addFn(5))
 function addFn (num1) { //this is normal fn declaration 
 return num1+1;
 } //imp++++++++++++++++++++++++++++++++++so in this way we are trying trying to access the function before its declaration  and if the function has been declaraed using this normal syntax then its totally accessible and will surely generate output

console.log(addTwoFn(5))
 const addTwoFn = function(num2){ // the difference is we are saving it in the variable 
    return num2+2;
 }//imp++++++++++============= but if we are saving the fn declaration into some variable then accessing that fn before declaration is not possible. and hence will not generate output
