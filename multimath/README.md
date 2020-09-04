# multimath game
A math multiplication game written in TypeScript. Reference: [TypeScript: Getting Started from Pluralsight](https://app.pluralsight.com/library/courses/getting-started-typescript/exercise-files)

## Getting started

From the `/multimath` directory, run `npm i` to  install all dependencies. Once this is complete, run `npm run start` to fire up the dev server.

## Webpack use
Webpack 4 is used to build and bundle all of our code. One single webpack plug used is `ts-loader`.

## Basic TypeScript Types
* Boolean
* Number
* String
* Array
* Enum

## Type Annotations and Type Inference
In TypeScript, we can assign a type to a variable by using the syntax: 

Variables in TypeScript use **type inference**, meaning the compiler infers what the data type is based on the assignment, and then assigns that type to the variable. Once it has been inferred, we have to treat the value as that type.

We can be more specific, however, and add **type annotations**

```ts
let firstName: string = "Danny";
let age: number = 32;
```

The syntax is the `nameOfVar: type` (colon - space - type name)


### Declarations with `let` and `const`

```js
// sorta works
console.log(myVar);
var myVar = "Hello world";
```

```js
// nope, blows up as it should
console.log(myVar);
let myVar = "Hello world";
```