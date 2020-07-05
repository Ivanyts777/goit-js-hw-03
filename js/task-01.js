"use strict";

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

//Function expression

const toShowUpdateUser = function (object) {
  let updateUser = Object.keys(object);
  console.log(updateUser);
  for (const key of updateUser) {
    console.log(`${key} - ${object[key]}`);
  } 
};
toShowUpdateUser(user);

// Function declaration

// function toShowUpdateUser(object) {
//   let updateUser = Object.keys(object);
//   console.log(updateUser);
//   for (const key of updateUser) {
//     console.log(`${key} - ${object[key]}`);
//   }
// }
