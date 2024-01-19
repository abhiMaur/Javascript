const score = 400
console.log(score)  //400
console.log(typeof(score))  //number

const balance = new Number(100)
console.log(balance)        //[Number: 100]
console.log(typeof(balance))    //object

console.log(balance.toString().length)  //3
console.log(balance.toFixed(2))     //100.00
// returns value upto 2 decimal places

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)) //124
//returns value rounded off to given digits

const hundreds = 10000000
console.log(hundreds.toLocaleString())      //1,00,00,000
//adds commas
console.log(Number.MAX_VALUE)   //1.7976931348623157e+308
console.log(Number.MAX_SAFE_INTEGER)    //9007199254740991

/*                  Math functions                  */
console.log(Math);      //Object [Math] {}
console.log(Math.abs(-4)) //4
console.log(Math.round(4.67)) //5
console.log(Math.pow(2,3))  //8

console.log(Math.random()); //gives a random value ranging from 0 to 1
//general way to implement
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1) //this will give a random integer from 1-10


const min = 10
const max = 20

let randomNum = Math.floor(Math.random() * (max - min + 1) + min)
console.log(randomNum)