//there are two ways to make an object in javascript 1.through Literal  2. through constructor(Singleton)
//when you make it through constructor it will be a singleton (object.create)



//we only study about object literal



let mysymbol = Symbol('let4')
console.log(mysymbol)

const myobject = {
    "fullname":"simran  kaushal",
    age: 23,
 "email":"kaushalsimran@google.com",
    contact:9667543890,
    mysymbol:"let4"
   
}

console.log(myobject)

//how to access the object there are two ways to access object values
console.log(myobject.email)// this way of accessing objects will not let you access if any of the data "name":"Simran" both sides quotes for that you need to use console.log(myobject['name']

console.log(myobject['email'])

console.log(myobject.fullname)

console.log(myobject['fullname'])

console.log(myobject.mysymbol)
console.log(typeof(myobject.mysymbol))// inside object it is not eorking as symbol it is representing string data type so we need yo change the syntax to put object inside the object
//i.e [mysymbol]:"let4"


const myobject1= {
    "fullname":"simran  kaushal",
  age: 23,
 "email":"kaushalsimran@google.com",
    contact:9667543890,
[mysymbol] : "let4"//so this is how we declare symbol inside an object 
   
}
console.log(myobject1)
console.log(myobject1[mysymbol])//and this is how we access it without . . and without ' ' but inside brackets
console.log(typeof(mysymbol)) // now this symbol datatype not string// important from the interview perspective


// how to chnge the key of the object
myobject1.fullname = "yuvraj Kaushal"

console.log(myobject1.fullname) //here the name hs been changed and if you want to freeze the object keys that its keys cannot be changed so we cn use object.freeeze(name of the object)

Object.freeze(myobject1)
myobject1.fullname = "Simran Kaushal"// so here it reamins same yuvraj kaushal its not changing as Simran kaushl because the object has been  freezed
 
console.log(myobject1)



//how to make  function in js
const functioninjs = function myfunction(){
    console.log("this is how functions are made in js")
}


functioninjs(); //so here we need to write the name of the variable in which we have stored the function's value while calling the function


//or we can make it by this way also 
function myfunctionagain () {
    console.log("this is the second way we can create functions without storing in the variable also")
}

myfunctionagain();// this is just a function so we wont log it seperately



myobject1.greeting = function(){ // this is how we can put the function inside object

    "hello js user";

}


console.log(myobject1);

let oksymbol = Symbol("okkey")

let functioninsideobject = {
    name:'yash kaushal',
    contact: 966753489,
    age:25,
   [oksymbol]:"okkey",
   
}

functionsinsideobject.greet()={
    'hello this is function inside an object'
}


