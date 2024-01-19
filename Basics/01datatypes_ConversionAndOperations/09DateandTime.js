//Dates

let myDate = new Date()
console.log(myDate)     //2024-01-19T11:47:43.278Z
console.log(myDate.toString())  //Fri Jan 19 2024 17:18:52 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()) //Fri Jan 19 2024
console.log(myDate.toISOString())   //2024-01-19T11:50:21.198Z, this is the dafault value

console.log(myDate.toLocaleString())    //19/1/2024, 5:23:00 pm
console.log(myDate.toLocaleDateString())    //19/1/2024
console.log(myDate.toLocaleTimeString())    //5:22:28 pm

let myCreatedDate = new Date(2024, 0 , 20)
console.log(myCreatedDate.toString())   //Sat Jan 20 2024 00:00:00 GMT+0530 (India Standard Time)
// Months in JS starts from 0.
// format to create a date is year, month, date, hour, min, second, milisecond.

let myTimeStamp = Date.now()
console.log(myTimeStamp)    //1705665915532
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate);   //2024-01-19T12:10:17.128Z
console.log(newDate.getMonth()) //0, this means January
console.log(newDate.getDate())  //19
console.log(newDate.getDay())   //5, this means friday

newDate.toLocaleString('dafault',{
    weekday: "long",
})

console.log(newDate)