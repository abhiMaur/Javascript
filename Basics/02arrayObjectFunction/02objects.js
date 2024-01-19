const mySym = Symbol('key1')
//Object literal
const JsUser = {
    name: "Abhishek",
    email: "abhi@email.com",
    [mySym]: "mykey1",      //syntax to include a symbol as an object value
    location: "Delhi",
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Saturday']
}
console.log(JsUser.email)   //abhi@email.com
/* console.log(JsUser[email]) */  //ReferenceError: email is not defined
console.log(JsUser["email"])    //abhi@email.com

/* The keys of objects are stored as a string */

console.log(JsUser[mySym])      //mykey1
//only way to access a symbol value

JsUser.email = 'abhishek@email.com'
/* Object.freeze(JsUser)
JsUser.email = "xyz2gmail.com"
console.log(JsUser.email)       //abhishek@email.com
//once .freeze is used then the value of that object cannot be modified */


JsUser.greeting = function(){
    console.log("Hello js user")
}

JsUser.newGreeting = function(){
    console.log(`Hello JS user, ${this.name}`)  //this gives us access to all the keys in the object
}
console.log(JsUser.greeting())
console.log(JsUser.newGreeting())


//constructor method of creating objects create a singleton object

const twitterUser = new Object()
twitterUser.id = '123abc'
twitterUser.name = 'abhi'
twitterUser.isLoggedIn = false
/* console.log(twitterUser);  */      //{ id: '123abc', name: 'abhi', isLoggedIn: false }

const regularUser ={
    email: "some@email.com",
    fullname:{
            userFullName:{
                firstName:"Abhishek",
                lastName:"Maurya"
            }
    }
}
console.log(regularUser.fullname)       //{ userFullName: { firstName: 'Abhishek', lastName: 'Maurya' } }
console.log(regularUser.fullname?.userFullName.firstName)    //Abhishek

const obj1 = { 1:'a', 2:'b'}
const obj2 = { 3:'c', 4:'d'}

/* const obj3 = {obj1, obj2}
console.log(obj3)   //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
 */
/* const obj3 = Object.assign(obj1, obj2) // correct syntax: const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3) ////{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' } */

//usual method is through the spread operator
const obj3 = {...obj1, ...obj2}
//console.log(obj3);  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users = [
    {
        id: 1,
        email: "abh@emaiil.com"
    },
    {
        id: 12,
        email: "aeh@emaiil.com"
    },
    {
        id: 13,
        email: "arh@emaiil.com"
    }
]

console.log(users[1].email)

console.log(twitterUser)
console.log(Object.keys(twitterUser))
console.log(Object.values(twitterUser))
console.log(Object.entries(twitterUser))

console.log(twitterUser.hasOwnProperty('isLoggedOut'))

const course = {
    courseName: "js in Hindi",
    price:'999',
    courseInstructor:"Hitesh"
}

course.courseInstructor
//similar syntax
const {courseInstructor: instructor} = course
//syntax hai {} = objectname, {} ke andar konsi key chahiye, = ke aage kis object ki


console.log(instructor) //Hitesh

//this is called destructuring of an object