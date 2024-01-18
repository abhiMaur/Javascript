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

## Array, Objects, Functions

> Here are some basic examples....

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


