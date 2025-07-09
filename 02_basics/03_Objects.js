//the main difference between declaring an object by object literal and through constructor is that constructor wala singleton object banata hai and object literal does not make singleton object

const tiderapp = new Object();//singleton object through constructor

const tinderapp ={
}//object literal//

//there is only one difference between them nothing else


// tinderapp.id = "some@gmail.com";
// tinderapp.name = "sammy";
// tinderapp.Isloggedin = false;
// console.log(tinderapp);


// const regularuser={
//     email:"some@gmail.com",
//     username:{
//         fullname:{
//             firstname:"Hitesh",
//             lastname:"Choudhary"
//         }
//     }
//}//so in this we have nested objects so we can access by using dot operator like below

// console.log(regularuser.username.fullname.firstname);// this is how we access nested objects 


//how to combine two or more objects 

//suppose we have an object
const obj1 = {
    1:'a',
    2:'b'
}

const obj2={
    3:'a',
    4:'b'
}

// const obj3 = {obj1,obj2}..................................way 1

// console.log(obj3);//this will result in obj3 contains both the objects but we wanted to merge the content so we will not do it like this insted we will use assign or spread operator.
//  const obj3 = Object.assign({},obj1,obj2) //it is better to put empty array before putting the objects......................................way2
//  console.log(obj3)


//now see by using spread operator

const obj3 = {...obj1, ...obj2};//.......................way 3
// console.log(obj3);

//in real projects we get data from the database in the form of array containing objects
//supposse we have 
const array = [
{
 id:'some@gmail.com',
 name:"Sam"
 
},
//.....
  {

},
//........
 {

},


]

//so we will acess it either by using map or normally console.log(user[1].email)

// we can use keys and values of objects by using Object.keys('object name')
//example- tinderapp.id = "some@gmail.com";
tinderapp.id="some@gmail.com"
tinderapp.name = "sammy";
tinderapp.Isloggedin = false;
console.log(tinderapp);
console.log(Object.keys(tinderapp));

console.log(Object.values(tinderapp));//same way we can access values of the object 
console.log(Object.entries(tinderapp));//entry() method converts the key values into into arrays 
/*[
  [ 'id', 'some@gmail.com' ],
  [ 'name', 'sammy' ],
  [ 'Isloggedin', false ]
]*/ //this is how entries work


//we can also check the properties of the objects using has own propety method of object
console.log(tinderapp.hasOwnProperty('Isloggedin'))//this results in boolean i.e true or false 














