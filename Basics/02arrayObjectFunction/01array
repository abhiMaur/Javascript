//array

const myArr = [0,1,2,3,4,5]
const myHeroes = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1])

//Array Methods

myArr.push(6)
console.log(myArr)  //[0, 1, 2, 3, 4, 5, 6]

myArr.pop()
console.log(myArr)  //[ 0, 1, 2, 3, 4, 5 ]

myArr.unshift(-1)
console.log(myArr)  //[-1, 0, 1, 2, 3, 4, 5]

myArr.shift()
console.log(myArr)  //[ 0, 1, 2, 3, 4, 5 ]

console.log(myArr.includes(9))  //false

const newArr = myArr.join()
console.log(newArr) //0,1,2,3,4,5 converted into a string

//slice    splice
console.log("A ", myArr)        //A  [ 0, 1, 2, 3, 4, 5 ]

const mynew1 = myArr.slice(1,3)
console.log(mynew1)             //[ 1, 2 ]
console.log('B', myArr)         //B [ 0, 1, 2, 3, 4, 5 ]
const mynew2 = myArr.splice(1,3)
console.log(mynew2)             //[ 1, 2, 3 ]
console.log('C',myArr)          //C [ 0, 4, 5 ]

//splice also modify original array

const marvel_heroes = ['thor','Ironman','spiderman']
const dc_heroes = ['superman','batman','flash']
marvel_heroes.push(dc_heroes)
console.log(marvel_heroes)  //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]
/* Here the second array is merged as a single object ie marvel-heroes turned into a 2d array*/
//to access the values of that array

console.log(marvel_heroes[3][1])    //batman
marvel_heroes.pop()

const allHeroes = marvel_heroes.concat(dc_heroes); //concat() creates a new string in heap thus need to be stored in a variable
console.log(allHeroes)      //[ 'thor', 'Ironman', 'spiderman', 'superman', 'batman', 'flash' ]

//commonly used method for joining array is by using spread operator(...)

const allNewHeroes = [...marvel_heroes,...dc_heroes]
console.log(allNewHeroes)   //[ 'thor', 'Ironman', 'spiderman', 'superman', 'batman', 'flash' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)     //[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("Abhishek"))  //false
console.log(Array.from("Abhishek"))     //['A', 'b', 'h', 'i', 's', 'h', 'e', 'k']
console.log(Array.from({name:"Abhishek"}))  //[], returns empty array when unable to resolve into string.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //[ 100, 200, 300 ]