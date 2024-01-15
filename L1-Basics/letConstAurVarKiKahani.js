const accountId = 144553;/* this is a float data type */
let accountEmail = "abhishek@google.com";
var accountPassword = "12345";
accountCity = "Delhi";/* this is string data type*/
let accountState; /* this is an undefined data type */


/* accountId = 2;
console.log(accountId); */

/* This is not allowed */
/* --output-- */
/* TypeError: Assignment to constant variable.*/

accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Jaipur";

console.table([accountId, accountEmail, accountPassword, accountCity]); 
/* lets you print multiple variables, objects, arrays in JS */
/* output
┌─────────┬─────────────┐
│ (index) │ Values      │
├─────────┼─────────────┤
│ 0       │ 144553      │
│ 1       │ 'hc@hc.com' │
│ 2       │ '21212121'  │
│ 3       │ 'Jaipur'    │
└─────────┴─────────────┘ */

/* Use of var is discouraged in modern code as var has scope resolution problems.
var had issue in block scope and functional scope.
variables which have unassigned data has "undefined" dataType. */

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);
/* output
┌─────────┬─────────────┐
│ (index) │ Values      │
├─────────┼─────────────┤
│ 0       │ 144553      │
│ 1       │ 'hc@hc.com' │
│ 2       │ '21212121'  │
│ 3       │ 'Jaipur'    │
│ 4       │ undefined   │
└─────────┴─────────────┘ */

