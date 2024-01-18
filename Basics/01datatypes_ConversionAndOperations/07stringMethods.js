const myName = "Abhishek"
const repoCount = 7

/* console.log("Hello my name is " + myName + "  and my repo count is  " + repoCount) */
//Old way to concetenate multiple strings, NOT RECOMMENDED

console.log(`Hello my name is ${myName} and my repo count is ${repoCount}`)     //Hello my name is Abhishek and my repo count is 7

//This method is called string interpolation, and more modern way to inject string value


const gameName = new String('Abhishek')
//this way of declaring a string makes them an object
//this way of declaring string gives us access to string methods
// new operator allocates memory from the heap of string size and 'Abhishek' value and points gameName to it.

console.log(gameName[0])    //A
console.log(gameName[2])    //h
//here the string is stored as an object in key value pair where key is index (from 0) and value are individual letter of the string.
//hence syntax to call an object value works here

// Some common useful methods of string
console.log(gameName.__proto__)     //{}
console.log(gameName.length)    //8
console.log(gameName.toUpperCase())     //ABHISHEK
console.log(gameName.toUpperCase)   //[Function: toUpperCase]
console.log(gameName.charAt(3))     //i
console.log(gameName.indexOf('i'))  //3

const newString = gameName.substring(0,4)   //Slicing of string
console.log(newString)      //Abhi

const anotherString = gameName.slice(-6,4) //Slicing of string
console.log(anotherString)      //hi

const newStringOne = "    Abhishek    "
console.log(newStringOne)   //    Abhishek    
console.log(newStringOne.trim())    //Abhishek
//remove whitespace from both end of the string, other derivatives are trimStart() and trimEnd()

const url = "https://abhishek.com/Abhishek%20Maurya"
console.log(url.replace('%20','-'))     //https://abhishek.com/Abhishek-Maurya
//replaces part of the string with other value

console.log(url.includes('abhishek'))       //true
console.log(url.includes('aBhishek'))       //false
//case sensitive 

let newName= "Abhishek-Kumar-Maurya"
console.log(newName.split('-'))     //[ 'Abhishek', 'Kumar', 'Maurya' ]
//gives us an array from a string

console.log(Object.keys(gameName))
