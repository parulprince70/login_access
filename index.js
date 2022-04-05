// user is only allowed to make a purchage when he is 
//logged in
// email verified
//card info - valid
//if any one is missing , stop purchage

//  var login= false;
//  var emailId=true;
//  var cardInfo=true;
 
//  if (login && emailId && cardInfo){
//     console.log("logged in"); 
//  }
//  else{
//      console.log("validation does not matched" + "  " + "Warning: access to purchase is denied " );
//  }



// var login= false;
// var emailId=false;
// var facebook=false;

// if (login || emailId || facebook){
//     console.log("logged in");
// }
// else{
//     console.log("please choose any option");
// }


// create a function for the following role:
// admin get full access
//subadmin- gets the access to create/delete the courses
//testprep - gets the access to create/delete the test
//user-  gets the access to consume the content



//Branch Test 0.0

var user= "subadmin";

switch (user) {
    case "admin":
        console.log("get full access");
        //break;
        case "subadmin":
        console.log("gets the access to create/delete the courses");
        //break;
        case "testprep":
        console.log("gets the access to create/delete the test");
        //break;

    default:
        console.log("gets the access to consume the content")
        break;
}
