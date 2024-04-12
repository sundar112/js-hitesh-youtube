const accountId = 144553
let accountEmail = "sundar@gmail.com"
var accountPassword = "123450"
acountCity = "colombo"
let accountState;//this will show undefine

//const value cannot cnage 
//rest of the veriable can be canged like bellow 
//when we use var type, there is a problem accure in block and functional scope {} <- so we do not use var anymore


accountEmail = "shrestha@yahoo.com"
accountPassword = "121211"
acountCity = "kurunegala"



console.log(accountId);
//in console you can print all in array format(table)like bellow
console.table([accountId, accountEmail, accountPassword, acountCity])