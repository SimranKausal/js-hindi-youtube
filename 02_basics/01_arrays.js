const myarr = [1,2.3,4,5,6]
console.log(myarr)


// arrays can contain multiple data types also

const arr = new Array(12,24,36,42)//explicit typecasting also we can see array properties and methods by doing this
console.log(arr)

//array methods
//.push
arr.push(7)
console.log(arr)


//.pop() add at the end

// unshift(9) adds the element at the begining
//shift(44) removes the first element of the array
//.join() binds and converts the array intto string 
//.slice(1,3) returns the part of the array but does not include 3 ,hence never include last value of the argument like if (1,3) is given so it will start from 1,2 and does not include 3.
//main difference between slice and splice is very important from the interview perspective.