//kis tareeke se data ko memory mein rakha jaa raha hai aur access kiya jaa raha hai uss basis pe data types are divided into 2 parts -primitive and non-primitive
//primitive
//-these are call by values
//7 types - String,boolean,Number,null,undefined,symbol,BigInt 
//when you copy primitive data values their copied values are given not the original memory address 





//non - primitive or reference
//data types which are given direct allocation in the  memory are non primitive
//array,objects,functions(see javascript documentation on mdn for more interview based theory)



//symbol is used to represet the unique value of a variable even if the value assisgned to them is same 
// const id = Symbol('123')//example
// const anotherId = Symbol('123')
// console.log(id === anotherId)


// const array = ["apple","mango","litchi"]
// console.log(array)

// console.log(array[1])



// const object = {

//     fullanme:"Simran",
//     age:24,
//     isloggedIn:true,
//     username:undefined


// }
// console.log(object)

//functions in javscript

const myFunction = function(){
    console.log("hello world I am a function")
}

myFunction();


// https://262.ecma-international.org/5.1/#sec-11.4.3//this is the link to study type of operators

//object,arrays d function type of is function
//function = object function 


//typeof bigInt is undefined and typeof null is object

let biginteger = 234345234n
console.log( typeof biginteger)


let nullvalue = null
console.log(typeof(null))


//symbol ka typeof symbol hi hota hai