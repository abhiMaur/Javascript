console.log(2>1)        //true
console.log(2>=1)       //true
console.log(2<1)        //false
console.log(2<1)        //false
console.log(2==1)       //false
console.log(2!=1)       //true


console.log("2">1)      //true
console.log("02">1)     //true

console.log(null > 0)       //false
console.log(null == 0)      //false
console.log(null >= 0)      //true

/* The reason is that an equality check == and comparision >, <, >=, <= works differently.
Comparision convert null to number, treating it as 0.
That's why null>=0 is true and null > 0 is false */

console.log(undefined == 0);    //false
console.log(undefined > 0);     //false
console.log(undefined < 0);     //false

// === strict checks, this only compares same data type
console.log("2"===2);   //false