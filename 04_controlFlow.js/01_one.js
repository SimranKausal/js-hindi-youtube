 const userLoggedin = false;
 const debitcard = true;
 if(userLoggedin && debitcard){// and operator.... both conditions should be true to evaluate a true result
    console.log("user can pay");
 }


 const usergoogleLoggedin = true;
 if(userLoggedin || usergoogleLoggedin){ // or operator .... if any one of the conditions is true then it's true (used for multiple condition check)
    console.log("user logged in")
 }


 // switch case
//  switch (key){
//  case value:
    
// break;

// // +++++++ this is the syntax for switch statement 
// case value:
// break;

//  }

 const month = 3;
 switch(month)
 {
 case 1:
    console.log("January");
    break;

 case 2:
    console.log("February");
    break;

    case3:
     console.log("March");
 break;


 default:                              // default acts like the "else" part in nested if else..
    console.log("default case matched");// absence of break in switch case will check all the cases except default case, that is why we put break to control the flow of statements in switch
 }

const months = "January"
 switch(months){
    case "January":
        console.log("January");
       break;

       case "Feb":
        console.log("February");
        break; // etc 

        default:
            console.log("month not present");

        
 }
