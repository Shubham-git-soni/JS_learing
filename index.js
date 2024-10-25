const accountId = 123;
let accountemail = "shubhamsoni@gmail.com"
var accountPassword = "1234";
city = "indore"

// accountId = 2 ;//in const not allowed
accountPassword ="12345"
accountemail = "shubhsoni"
city = "Bhopal" 
let accountState ;
//when u not assign any value to variable at that time bydefault it will be undefined 

/* please not use  to var
becaause of issue of functional scope
*/
console.log(accountId);
console.table([accountId,accountPassword,accountemail,city,accountState ])
