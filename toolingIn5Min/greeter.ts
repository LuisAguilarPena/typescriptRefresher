//! https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html
//* We used a .ts extension, but this code is just JavaScript. You could have copy/pasted this straight out of an existing JavaScript app.
//* At the command line, run the TypeScript compiler: tsc greeter.js
//* The result will be a file greeter.js which contains the same JavaScript that you fed in. We’re up and running using TypeScript in our JavaScript app!

// function greeter(person) {
//   return "Hello, " + person
// }

// let user = "Jane User"

// document.body.textContent = greeter(user)

//* Now we can start taking advantage of some of the new tools TypeScript offers. Add a : string type annotation to the ‘person’ function argument as shown here:

// function greeter(person: string) {
//   return "Hello, " + person
// }

// let user = "Jane User"

// document.body.textContent = greeter(user)

//! Type annotations
//* Type annotations in TypeScript are lightweight ways to record the intended contract of the function or variable. In this case, we intend the greeter function to be called with a single string parameter. We can try changing the call greeter to pass an array instead:

// function greeter(person: string) {
//   return "Hello, " + person
// }

// let user = [1, 2, 3]

//  error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
// document.body.textContent = greeter(user) 

//* Removing all the arguments to the greeter call. TypeScript will let you know that you have called this function with an unexpected number of parameters. In both cases, TypeScript can offer static analysis based on both the structure of your code, and the type annotations you provide.
//* Notice that although there were errors, the greeter.js file is still created. You can use TypeScript even if there are errors in your code. But in this case, TypeScript is warning that your code will likely not run as expected.

//! Interfaces
//* Let’s develop our sample further. Here we use an interface that describes objects that have a firstName and lastName field. In TypeScript, two types are compatible if their internal structure is compatible. This allows us to implement an interface just by having the shape the interface requires, without an explicit implements clause.

// interface Person {
//   firstName: string
//   lastName: string
// }

// function greeter(person: Person) {
//   return "Hello, " + person.firstName + " " + person.lastName
// }

// let user = { firstName: "Jane", lastName: "User" }

// document.body.textContent = greeter(user)

//! Classes
//* TypeScript supports new features in JavaScript, like support for class-based object-oriented programming.
//* Create a Student class with a constructor and a few public fields. Notice that classes and interfaces play well together, letting the programmer decide on the right level of abstraction.
//* The use of public on arguments to the constructor is a shorthand that allows us to automatically create properties with that name.
//* Re-run tsc greeter.ts and you’ll see the generated JavaScript is the same as the earlier code. Classes in TypeScript are just a shorthand for the same prototype-based OO that is frequently used in JavaScript.

class Student {
  fullName: string
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName
  }
}

interface Person {
  firstName: string
  lastName: string
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName
}

let user = new Student("Jane", "M.", "User")

document.body.textContent = greeter(user)