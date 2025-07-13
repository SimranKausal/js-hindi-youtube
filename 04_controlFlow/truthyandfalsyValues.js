//   const useremail = "kaushalsimran@gmail.com";// writing like this we are simply assuming that its true already  .... if " " entry string get passes then it will print else part 
//  if(useremail){
//     console.log("got user email");
//  }
//  else{
//     "Haven't got user's email";
// }



 //falsy values
// false,0,-0, BigInt,0n,null,undefined,NaN," "(empty string) these values are falsy values they will always work for the false statement.


//truthy values
//true,1,[],'0'(zero inside string quotes),'false'(this is also a string),{}(empty object),function(){}(empty function),

//example how to check an empty array
//suppose the name of the array is useremail[]
const useremail = [];
if(useremail.length===0){// using .length property to ensure that its length is 0 and using === for ensuring its data type to be array.
   console.log("array is empty")
}
else{
   "not an empty array"
}


const emptyObject = {};
if(Object.keys(emptyObject.length === 0 )){
   console.log("empty object gives true values since its one of the truthy values.")
}
else{
   "not an  empty object";
}
//+++++++++++++++++++++++++++++This is how we can detect object,array etc are empty or not?+++++++++++++++++++++++++++++++++++++++++++++++