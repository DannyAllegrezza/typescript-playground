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

## Advanced Types
* Void
* Null
* Undefined
* Never
* Any
* Union Types
  * `let someValue: number | string;` 
  * Acceptable values are limited to those in the union 

### Using the --strictNullChecks compiler option
This should be on by default, so long as the **strict** option is set to true.

```ts
let basicString: string;
basicString = null; ⛔️
basicString = undefined; ⛔️

let nullableString: string | null; // adding null to the union means we CAN assign null 
nullableString = null; ✅
nullableString = undefined; ⛔️

// and if we want string, null and undefined we can union them (or as many as we want) together
let mysteryString: string | null | undefined;
mysteryString = null; ✅
mysteryString = undefined; ✅
```

## Type Annotations and Type Inference
In TypeScript, we can assign a type to a variable by using the syntax: 

Variables in TypeScript use **type inference**, meaning the compiler infers what the data type is based on the assignment, and then assigns that type to the variable. Once it has been inferred, we have to treat the value as that type.

We can be more specific, however, and add **type annotations**

```ts
let firstName: string = "Danny";
let age: number = 32;
```

The syntax is the `nameOfVar: type` (colon - space - type name)


## Type Assertions
There are times when we know more about a variable than the compiler does, for example, using a third party library or an object literal. If this happens, you can 
```ts
let someNumberVariable: any = 5; // any means it could be any value, but we know it is a number..

let fixedString: string = (<number>someNumberVariable).toFixed(4);
console.log(fixedString); // 5.0000

let fixedString: string = (someNumberVariable as number).toFixed(4);
console.log(fixedString); // 5.0000
```

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