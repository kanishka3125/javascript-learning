// Three ways to declare a variable - let, const, var
// 1. let - value can be changed 
let age = 20;
age = 22;
console.log(age);

// 2. const - values cannot be
// reassigned
const pi = 3.14
console.log(pi); // If we will assign pi = 3.15 or any incorrect value of pi then terminal will show error bcz we use const for constant/ fixed values

// 3. var - older way of declaring variables
var name = "kanishka";
name = "kanishka sharma";
console.log(name); 

//If you assign a variable without let, const, or var, you're creating/using an undeclared variable. 
// Always declare variables using let, const, or var.
// Using an undeclared variable causes a ReferenceError in strict mode.

let accountEmail = "hfc@gmail.com";
console.log(accountEmail);

let accountId = 14235
console.log(accountId); // more appropriate

//console.table - used to create table
console.table([name, age, accountEmail, accountId]);

// Important Points :-

// 1. The important difference is that var is function-scoped, while let and const are block-scoped.

//2.Objects and arrays declared with const can have their contents modified,
// but the variable itself cannot be reassigned.
const user = {
    name: "Kanishka"
};

user.name = "Kanishka Sharma"; // Allowed
console.log(user.name);
// printed successfully

user = {}; // Error

//3. Reference error if a variable is assigned without let, const, var

"use strict";
accountEmail = "hfc@gmail.com"; // referenceError
