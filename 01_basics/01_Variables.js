const accountId = 144553 ; 
let accountEmail = "nisargbhoi.tech"
var accountPassword = "12345" 
accountCity = "vadodara" // not recommended
let accountState; // undefined

// accountId = 144554 // not allowed

/*
    1. const: constant value, can't be changed
    2. let: block scope, can be changed
    3. var: function scope, can be changed

    NOTE: var is not recommended to use,
    prefer not to use var 
    because of issue in block scope and functional scope
*/
// table method
accountEmail = "nisargbhoi23@gmail.com"
accountPassword = "123456"
accountCity = "Ahmedabad"
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);