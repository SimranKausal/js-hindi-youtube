const score = 400//here automatically javascript has detected that 40 should be of Number data type
console.log(score)


const balance = new Number(700)//this is how explicitely (explicit typecasting) tell the javascript to take 'balance' as of number data type  by doing this we can see properties and methods of number 700
console.log(balance)//const balance = new Number(700) this is known as constructor se object banana
const converttostring = balance.toString()
console.log(converttostring)
console.log(typeof (converttostring));
console.log(typeof converttostring.length) 
console.log(converttostring)
console.log(balance.toFixed(2))//this is how we control precison ( decimal k baaad kitni digits hongi)


let hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))// this is how we seperate commas according to indian number system

console.log(hundreds.MAX_VALUE)// TO KNoW THE MAXIMUM VALUE OF of a given number





// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++             Maths             +++++++++++++++++++++++++++++++++++++++++++++++//
// console.log(Math)// Math is an inbuilt library present inside javascript


// console.log(Math.abs(-4))// abs (absolute ) method negative number as positive but not positive number negative
// .ceil(),.floor() and round methods available also 



//see shradha khapra's random function in rps game 