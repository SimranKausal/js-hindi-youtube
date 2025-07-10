function SayMyname() {//...//function definition
    console.log("S")
    console.log("I")
    console.log("M")
    console.log("R")
    console.log("A")
    console.log("N")

}

//SayMyname//...is reference
SayMyname();//this is execution


function myfunction(num1,num2){ // num1 and num2 are called as parameters 
return (num1+num2)// console.log here just prints the result not returning it ... so result will be undefined 
}

  const result = myfunction (3,4)//3 and 4 are arguments
  console.log("result:", result)// return statement will give 7 whereas console statement will give  result as undefined 


 function printname (name) {
 return (`${name} ,just logged in` )
  }
// const returnedresult = printname("Simran");// its recommended to store returned statement in variable  

// console.log(returnedresult)// we always have to print the retuened result of a function without printing it , it will just return the value not print it

console.log(printname("Simran"));//if we pass empty string it will just print-just logged in
//if we do not pass any string it will result as undefined

console.log(printname("")) //prints ,just logged in 
console.log(printname())//prints undefined

// to check if the username has been entered or not we will use ..like if(username === undefined) then we wont return any value or want our next statement to be executed so we will write return statement

function checkstring ()
{
  if(username === undefined){
    console.log("Please enter a username")
    return
  }
  return (`${username} ,just logged in` )
}

console.log(checkstring(" ")

