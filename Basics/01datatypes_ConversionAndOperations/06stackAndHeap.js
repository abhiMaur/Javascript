let myName = "Abhishek Maurya"
let myAlias = myName
myAlias = "abhiMaur"

console.log(myName)     //Abhishek Maurya
console.log(myAlias)    //abhiMaur

let user = {
    email: "user@email.com",
    upi: "user@ybl"
}
let userOne = user
userOne.email = "userone@email.com"

console.log(user)   //{ email: 'userone@email.com', upi: 'user@ybl' }
console.log(userOne)    //{ email: 'userone@email.com', upi: 'user@ybl' }