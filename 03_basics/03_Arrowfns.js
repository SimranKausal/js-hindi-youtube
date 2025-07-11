// const user = {
//     username:"hitesh",
//     price:999,
//     welcomeMessage: function(){
//         console.log(`${this.username},welcome to website`)//+++++++++++this keyword refers to the current context ....here the current context means the scope of the user object
//         console.log(this)
//     }
    

// }


// user.welcomeMessage();

// user.username = "karan";
// user.welcomeMessage();// so this keyword  will print here sam instead of hitesh because its current context has been chnaged now
// console.log(this)// here 'this keyword will print empty object as javascript was run on browser in earlier days javavscript engine was hidden inside browser but now when the engine of js has been seperated from the broser this will print empty object as its current scope where if this keyword is written in console(browser) then it will print the window object as its current context

function chai() {
    let username = "kavya"
    console.log(this.username)//this will give output as undefined because this keyword doesnt work with functions,it works with objects only
}

chai();


//now strtaing with arrow fns
const twoSum  = (a,b) =>{// example of arrow fns 
return a+b;// explicit return ...matlab explicitly lagana pdh raha hai normal

}

 console.log(twoSum(3,9));


 const subtract = (a,b) => (a-b)// example of implicit return in which curly brackets are not written as well as return keyword is also not used instead () are used in place of {}

   console.log(subtract(7,5)) ;

   // suppose if we want to return the object in implicit return then also we need to wrap the object in the () brackets
   // example - const multiply = (m,n) => ({...object...})

