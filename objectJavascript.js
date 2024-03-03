// // const target={
// //     name: 'Mango',
// //     age: 4,
// // }
// // const source={
// //     age: 3,
// //     date: '23.02.2021'}
// // const result = Object.assign(target, source);

// // console.log(result); // { name: 'Mango', age: 3, date: '23.02.2021' }

// // let mergedResult=Object.assign(target, source);
// // console.log(mergedResult); // { name: 'Mango', age: 3, date: '23.02.2021' }

// function add() {
//   //   console.log(3 + 0);
//   return 3 + 0;
// }
// // let addResult = add();
// console.log(add()); // 3

// // function for greetings
// function greet(names, age) {
//   let result = `Hello, ${names}, you are ${age} years old`;
//   return result;
// }
// let greetResult = greet("rakib", 25);
// console.log(greetResult); // Hello, Mango, you are 4 years old

// const greetSomeone = function (names,hru) {
//   console.log(hru())
//   return `Hello, ${names}`;

// };

// const hru=function(){
//     return 'I am fine';
// }

// let greetSomeoneResult = greetSomeone("rakib",hru);
// console.log(greetSomeoneResult);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Function to create a Person object with user input
function createPerson() {
  rl.question("Please enter your name: ", function(name) {
    rl.question("Please enter your age: ", function(age) {
      const person = new Person(name, age);
      // console.log("Person object created:", person);
      person.greet(); // Call the greet method
      rl.close();
    });
  });
}

// Call the function to create a Person object
createPerson();
