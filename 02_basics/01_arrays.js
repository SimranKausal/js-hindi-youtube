// const myarr = [1,2.3,4,5,6]
// console.log(myarr)


// arrays can contain multiple data types also

// const arr = new Array(12,24,36,42)//this is how we instantiate from the array constructor this is also the way to declare array it is same as const arr = [1,2,3,4,5] by using constructor we are able to see its properties and methodws also
// console.log(arr)

//array methods
//.push
// arr.push(7)
// console.log(arr)


//.pop() add at the end

// unshift(9) adds the element at the begining
//shift(44) removes the first element of the array
//.join() binds and converts the array intto string 
//.slice(1,3) returns the copy of part/section of the array but does not include 3 ,hence never include last value of the argument like if (1,3) is given so it will start from 1,2 and does not include 3.
//main difference between slice and splice is very important from the interview perspective.
//splice-manipulates the original array and it it includes the end index aslo  but slice just returns the copy of part of the array but splice manipulates the original array
//example
// let firstarray = [1,2,3,4,5,6]
// let slicedArray = firstarray.slice(1,3)
// console.log(slicedArray) // the result is [2,3]
// 
// let splicedArray = firstarray.splice(1,3)
// console.log(splicedArray)
// console.log(firstarray)//so this gives [1,5,6] which shows that it has manipulated the original array and removed that part of array  

let marvel_heroes = ["Ironman","thor","Spiderman"]
let DC_heroes = ["Superman","flash","Batman"]

// let Pushed_Array = marvel_heroes.push(DC_heroes)// its just add the whole array as an element in the existig array
// console.log(marvel_heroes)
// console.log(Pushed_Array)


let concatarray = marvel_heroes.concat(DC_heroes);
console.log(concatarray)//returns new array


//so effective way of doing this array combine operation is by using spread operator 

// const allnewheroes = [...marvel_heroes  , ...DC_heroes]//-> spread operator

// console.log(allnewheroes)// this works best in this case
//spread operator combines the array elements as an individual element

let anotherarray = [1,2,3,[4,5,6],7,6,7,[4,5]]
let realanotherarray = anotherarray.flat(Infinity)
console.log(realanotherarray)//flat method opens the combined parts upto the length given to it and we can also give infinity



console.log(Array.isArray("Hitesh"))// this is used while data scraqping and through this method we can ask if the data thst is coming is array or not?
console.log(Array.from("HITESH")) //this is how we can convert incoming data into an array itself
console.log(Array.from({name:"Hitesh"}))//this is how we can also give an object to convert into array but it will get confuse and will return an empty array //this is an interesting case and important from the interview point of view


 let score1=100;
 let score2=200;
 let score3 = 300;

let converted_array = Array.of(score1,score2,score3)
console.log(converted_array)//this is how we can convert some variable into array by uing 'of'

