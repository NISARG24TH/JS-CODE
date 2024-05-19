// 03_conversion&operation
let score = "33abc"; // string
console.log(typeof(score)); // AS A METHOD.
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

// "33" ==> 33
// "33abc" ==> NaN
// true  ==> 1; false ==> 0;

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean (isLoggedIn);
console.log(booleanIsLoggedIn)

// 0, null, undefined, NaN, "" ==> false
// 1, "abc", {}, [] ==> true
