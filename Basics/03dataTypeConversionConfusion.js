let score = 33;

console.log(score);     //33
console.log(typeof score);      //number
console.log(typeof(score));     //number

score = "33";
console.log(score);     //33
console.log(typeof score);      //string
console.log(typeof(score));     //string

let valueInNumber = Number(score);
console.log(typeof valueInNumber);      //number

score = "33abc";
valueInNumber = Number(score);
console.log(valueInNumber);     //NaN
console.log(typeof valueInNumber);      //number

score = true;
valueInNumber = Number(score);
console.log(valueInNumber);     //1
console.log(typeof valueInNumber);      //number

score = false;
valueInNumber = Number(score);
console.log(valueInNumber);     //0
console.log(typeof valueInNumber);      //number

//"33" => 33
//"33abc" => NaN
// true => 1; false = 0;

score = null;
valueInNumber = Number(score);
console.log(valueInNumber);     //0
console.log(typeof valueInNumber);      //number

score = undefined;
valueInNumber = Number(score);
console.log(valueInNumber);     //NaN
console.log(typeof valueInNumber);      //number

//null => 0
//undefined => NaN

score = NaN;
valueInNumber = Number(score);
console.log(valueInNumber);     //NaN
console.log(typeof valueInNumber);      //number

//NaN => NaN

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);     //true
console.log(typeof booleanIsLoggedIn);      //boolean

isLoggedIn = "";
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);     //false
console.log(typeof booleanIsLoggedIn);      //boolean

isLoggedIn = "hi";
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);     //true
console.log(typeof booleanIsLoggedIn);      //boolean

//1 => true, 0 => false
// "" => false
// "hi" => true
// so you can check whether a string is empty
// using this method

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);      //33
console.log(typeof stringNumber);       //string

//33 =>"33"