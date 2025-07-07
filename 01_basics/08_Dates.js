//dates are objects in javascript and its typeof also gives object


let mydate = new Date()
console.log(mydate) 
console.log(mydate.toDateString())
console.log(mydate.toString())
console.log(mydate.toLocaleString())
console.log(typeof(mydate))



//how to create your own specific date 
let mycreateddate = new Date( 2023,0,23)//here the date is 23,month is zero(0) means january and year is 2023.... in javascript months starts from 0 agar aap single digit mein likhte hain 0 se start hoga month and agar 2 digit mein likhte hain to 1 se hi normally
console.log(mycreateddate.toDateString())

let mytimestamp = Date.now()
console.log(mytimestamp)// time stamp is used in quizzes and are very useful
