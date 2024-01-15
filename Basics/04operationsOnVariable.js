let value = 3;
let negValue = -value;
console.log(negValue);      //-3

console.log(2+2);   //4
console.log(2-2);   //0
console.log(2*2);   //4
console.log(2**3);  //8
console.log(2/3);   //0.66666
console.log(2%3);   //2

let str1 = "hello"
let str2 = "Abhishek"
let str3 = str1+str2
console.log(str3)   //helloAbhishek
str3 = str1+" "+str2
console.log(str3)   //hello Abhishek

console.log(3+4*5%3);   //5

console.log("1" + 2);   //12
console.log(1 + "2");   //12
console.log("1" + 2 + "2");     //122
console.log(1 + 2 + "2");   //32

console.log(true);  //true
console.log(+true); //1
/* console.log(true+); //error */
console.log(+"");   //0

num1=num2=num3 = 2+2;
console.table([num1,num2,num3]);
/* output
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ 0       │ 4      │
│ 1       │ 4      │
│ 2       │ 4      │
└─────────┴────────┘ */

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);   //101

//reference
//https://tc39.es/ecma262/#sec-type-conversion
//https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-postfix-increment-operator
