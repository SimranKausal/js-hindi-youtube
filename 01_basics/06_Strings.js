//suppose we have a string
//  let fullname = "yuvraj kaushal"
//  let age = 25

//  console.log(`my name is ${fullname} and I am ${age} years old`)//this is known as string interpolation in javascript in which you can directly use variable inside string 


 //so there's a new way to define and declare a string so that we can use its properties and methods

 let school = new String('harkrishan') //by this way of declaring strings we can use its methods or properties.
//  console.log(school.charAt(2))  this is used to print character present at the given index

console.log(school.indexOf('r'))// to know the index of given character

 //.trim  method- replaces extra spaces from the string and new line

//.replace method-replaces

//example of .replace is
let url = "kaushal-simran-20%@gmail-dotcom"
 console.log(url.replace("%",62))


console.log(url.includes('kaushal'))//includes methods tells us that the given word exists in the string or not


console.log(url.split('-'))//this will convert the string into array and seperate them based on the given context example:(-)

 