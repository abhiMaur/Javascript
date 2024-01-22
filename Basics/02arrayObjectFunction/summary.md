# Array
 The Array object enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
 
syntax : 
 
```javascript
    let myArray = [1, 2, 3, true, 'Abhishek'];
    const myArr2 = new Array(1,2,3,4)
```
- JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)

- The first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.

- JavaScript array-copy operations create shallow copies. ie you get a reference to the memory.

#### Slice VS splice method
- `.slice()` method does not modify the orignial array.
- `.splice()` method modify the original array.

#### .Concat()
- `.concat()` creates a new string in heap thus need to be stored in a variable.
> Pushing an array in another array does not concatenate them, the pushed array just becomes a single value indented in the receiving array.
```javascript
   const marvel_heroes = ['thor','Ironman','spiderman']
const dc_heroes = ['superman','batman','flash']
marvel_heroes.push(dc_heroes)
console.log(marvel_heroes)  //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]
/* Here the second array is merged as a single object ie marvel-heroes turned into a 2d array*/
//to access the values of that array
console.log(marvel_heroes[3][1])    //batman
```
### Spread Operator
- commonly used method for joining array is by using spread operator(...)
```javascript
   const allNewHeroes = [...marvel_heroes,...dc_heroes]
   console.log(allNewHeroes)   //[ 'thor', 'Ironman', 'spiderman', 'superman', 'batman', 'flash' ]
```

# Object

- object created using a constructor creates a singleton object, whereas object created using an object literal creates a non-singleton object.

```javascript
   const jsUser = {
      name : Abhishek,
      location: 'Delhi',
      email: 'abhi@email.com',
      lastLoginDays:['Monday','Saturday']
   }
```
- anything in `{ }` is declared as an object, you can bind this value to a variable.
- object has  `key:value` pairs, value can be any valid js value or expression. Eg. a function, another object, array, all other primitives.
The keys are by default read as a string and also use symbol datatype.

### Access the value in an object
- There are two ways
   - using `.`operator, `JsUser.email`.
   - using `[]`, `JsUser["email"]`, here we have to explicitly write the key as a string or symbol if it was defined as such. This method is necessary in cases where the key is written in string/symbol format, as `.` operator will not read them.

#### Using `symbol` as a key
- to declare a symbol `const mySym = Symbol('Key1')
- syntax to use a symbol as a key.
```javascript
   const jsUser = {
      name : Abhishek,
      location: 'Delhi',
      [mySym]: "mykey1",
      email: 'abhi@email.com',
      lastLoginDays:['Monday','Saturday']
   }
   // this is the syntax to use a symbol otherwise the key will be treated as a string.
```
#### Object.freeze(ObjectName)
- this method locks the object and prevent any change inside it.
- once declared it cannot be undone in the code.

