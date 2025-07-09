//object Destructure 
const course = {
    coursename:"Javascript",
    cousefee:999,
    courseInstructor:"Hitesh chaudhary"
}
// console.log(course['courseInstructor']);
//so destructuring makes the values of objects accessible easily 
// const {courseInstructor} = course;//this is the syntax to destructure,this is the main syntax
// console.log(courseInstructor);
const {courseInstructor:instructor}=course;// this is how we can just call it as 'instructor' only,this is optional if you want to shorten the term inside any object.
console.log(instructor);


//JSON API
//API is backend se kuch values aati hain humare pass unko kaise likhte hain is API
//in earlier times these values use to come in XML so it was hard to convert
//nowadays we have these values in json format,json format is nothing but object slight difference between both of them is that json syntax has string on both the sides and does not have any name
/*{
"name":"simran",
"course":"javascript",
"price":999
}*/

//sometimes we get data in the form of array containing objects etc.
/*[
{

},
{

}
]*/


