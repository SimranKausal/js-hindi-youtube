// function SayMyname() {//...//function definition
//     console.log("S")
//     console.log("I")
//     console.log("M")
//     console.log("R")
//     console.log("A")
//     console.log("N")

// }

//SayMyname//...is reference
// SayMyname();//this is execution


// function myfunction(num1,num2){ // num1 and num2 are called as parameters 
// return (num1+num2)// console.log here just prints the result not returning it ... so result will be undefined 
// }

//   const result = myfunction (3,4)//3 and 4 are arguments
//   console.log("result:", result)// return statement will give 7 whereas console statement will give  result as undefined 


//  function printname (name) {
//  return (`${name} ,just logged in` )
//   }
// const returnedresult = printname("Simran");// its recommended to store returned statement in variable  

// console.log(returnedresult)// we always have to print the retuened result of a function without printing it , it will just return the value not print it

// console.log(printname("Simran"));//if we pass empty string it will just print-just logged in
// //if we do not pass any string it will result as undefined

// console.log(printname("")) //prints ,just logged in 
// console.log(printname())//prints undefined

// to check if the username has been entered or not we will use ..like if(username === undefined) then we wont return any value or want our next statement to be executed so we will write return statement

// function checkstring (username)
// {
//   if(username === undefined){// we can also write code as if(!username){
//                              // console.log("please enter a username")}
//     console.log("Please enter a username")
//     return
//   }
//   return (`${username} ,just logged in` )
// }

// console.log(checkstring(" "));// this means we are sending empty string as an argument
// (checkstring())// this means we are not sending anything as an argument

// function givedefaultvalue (username = "Sam"){//this is how we set a default value when nothing will be given as argument "Sam" will be taken as username 
//   if(!username){
//     console.log("Please enter a username");
//     return
//   }
//   return (`${username},just logged in`)
  
// }
//  console.log(givedefaultvalue("hitesh"));

//sometimes we dont knaw that how many arguments are going to come for the function
// so we need to make a flexible function so that it can atleast hold the number of arguments the user put and perform operation
// so for that we use rest operator
//suppose the total amount of the cart to be calculated based upon the items received through arguments, so we will use rest operator in order to calcualte the total cart prize by takin n number of arguments
//  function CalculatecartPrice( num1) {
//  return num1;
//  }
//  console.log(CalculatecartPrice(200));


//  but suppose i want to add 400 and 500 and more items to be calculated in the price then i will use rest operator

// function calucatePrizewithRestOperator(...num1){
//   return num1;
// }
//  console.log(calucatePrizewithRestOperator(100,200,300))// so this can take n values and will put them in array
 /// important point to remember is that rest and spread operator are same the difference lies in their usage.
 //yaad rakhne k liye spread nested elements ko alag alag krke ek array mein dal deta hai 
 

 //how to pass object to a function?
 //suppose we have a function named user
//  const user = {//............................................this is the object we are sending as argument t the user function
// username:"hitesh",
// course:"js",
// price:199

//  }

//  function objectTakingfn(anyobject){// parameter is named as anyobject because it can take any object
//   console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
//  }

//  objectTakingfn(user);


 //..............................its ot necessary that we always first make the object and then pass it as argument we can also make an object while calling a function

// like:-
// console.log({username:"Simran and yuvi",
//   price:299
// }) // this will also work


