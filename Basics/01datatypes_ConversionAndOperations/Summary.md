# Data Types
    
There are two categories of data types.
- Primitive
- Non-Primitive

## Primitive
- They are called by value.
- There are seven such data types.
    
    String, Number, Boolean, NULL, undefined, symbol, BigInt.

## Non-Primitive

- They are called by reference.
    
    Array, Objects, Functions.

### JS is a dynamic language

eg. const score = 100.

score gets automatically defined as number data type and we can change its data type in real time.


### NULL is not 0
    
>null is used to represent instances where the function returns no value.
    
eg. let there be a functions that returns room temperature, now to show that the device is OFF we cannot return the value 0, as it is a valid temperature reading, so we use null.

> typeof(null) is shown as object.

> Default value of a variable is undefined.

> `typeof()` function is used to find the datatype of the variable.

### Array, Objects, Functions

Here are some basic examples....

 ```javascript
    const heroes = ["shaktiman", "doga", "naagraj"]

    let myObj = {
        name: "Abhishek",
        hobby: "coding"
    }

    const myfunction = function(){
        console.log("Hello World");
    }
 ```

# Stack and Heap memory

### ***Primitive datatype uses stack memory.***

Every time the variable is called the new variable get a copy of variable's value from the memory to work with.
> i.e. change in new variable does not change the original value, hence both variable points at different memory location.

```javascript
let myName = "Abhishek Maurya"
let myAlias = myName
myAlias = "abhiMaur"

console.log(myName)     //Abhishek Maurya
console.log(myAlias)    //abhiMaur
```
Here, `myAlias` gets a copy of the value of `myName` to work.

### ***Non-Primitive datatype uses heap memory.***

Every time the original variable is called the new variable gets a reference of variable's value to work with.
> i.e. change in new variable change the original value.

```javascript
let user = {
    email: "user@email.com",
    upi: "user@ybl"
}
let userOne = user
userOne.email = "userone@email.com"

console.log(user)   //{ email: 'userone@email.com', upi: 'user@ybl' }
console.log(userOne)    //{ email: 'userone@email.com', upi: 'user@ybl' }
```
Here, `userOne` gets a reference of the value of ``user`, hence both variable points at same memory location in heap.


### Reference
> https://tc39.es/ecma262/#sec-type-conversion

> https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-postfix-increment-operator


## Strings as Objects

Normally JavaScript strings are primitive values, created from literals. 

For Example :
```javascript
  let primitiveString = "Primitive"
```
>**But stirngs can also be defined as *objects* with the keyword `new`.**

For Example :
```javascript
  let objectString = new String("Object")
```
This way an object with index (0-5) is declared as key and every literal is value to its corresponding key as value.

```javascript
console.log(objectString[1])    //output: b
```
Therefore all methods of object.prototype are available here

```javascript
console.log(Object.keys(objectString))  /* [ '0', '1', '2', '3', '4', '5'] */
```
Additionally String functions itself have a lot of useful methods.
> https://www.w3schools.com/js/js_string_methods.asp

> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

### Numbers as Objects
Numbers can also be delared as object using `new` keyword.

```javascript
    let objectNum = new Number(100)
```
- Number() also have their prototypes usable as methods for objectNum. 

## Math Functions in JS
- JavaScript also has a math library accessible using `Math` function.
Eg.
```javascript
    console.log(Math.pow(2,3))  //8
```
## Generating Random Number

- `Math.random()`generates a random number from 0-1.
- To generate a random number between 1 to 10.
```javascript
    console.log(Math.random()*10+1);
```
- To generate a random number between a to given values we use the given approach.

 ```javascript
    const min = 10
    const max = 20

    let randomNum = Math.floor(Math.random() * (max - min + 1) + min)
    console.log(randomNum)
    /* This will generate a random value between min and max. */
 ```
 ### Date and time in JS
 you can create a date object using `Date()`.
 ```javascript 
    let newDate = new Date(); /* gives you a date object with current date and time. */
 ```
 - In date object, months are counted from 0.ie Jan = 0.
 - you can generate any date from the midnight of Jan 1 1970 to onwards.
