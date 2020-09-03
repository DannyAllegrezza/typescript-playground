A collection of demos and notes on getting up and running with TypeScript.

- [ ] Read the TypeScript Handbook
- [ ] Install TypeScript
- [ ] Create fresh project using TypeScript
- [ ] Convert existing project using TypeScript

- [TS for Java/C# Programmers..](#ts-for-javac-programmers)
  - [Erased Structural Types](#erased-structural-types)
- [Things that might trip up the OOP programmer..](#things-that-might-trip-up-the-oop-programmer)
  - [1. Empty Types](#1-empty-types)
  - [2. Identical Types](#2-identical-types)
  - [Reflection](#reflection)
- [Resources](#resources)


## TS for Java/C# Programmers..

The [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-oop.html) has a nice section covering the biggest differences between the two ecosystems. For me, my takeaway was:

1. No need for singletons and static classes in TypeScript
2. In TS, think of `types` as sets, which is to say a set of values that share something in common. 

### Erased Structural Types

Okay, so objects in TypeScript are **not** of a single exact type. For example: 

```ts
interface Pointlike {
  x: number;
  y: number;
}

interface Named {
  name: string;
}

function printPoint(point: Pointlike) {
  console.log("x = " + point.x + ", y = " + point.y);
}

function printName(x: Named) {
  console.log("Hello, " + x.name);
}

const obj = {
  x: 0,
  y: 0,
  name: "Origin",
};

printPoint(obj);
printName(obj);
```
* `obj` contains properties (`x`, `y`, `name`) which satisfy the `Pointlike` interface **and** the `Named` interface. 
* TypeScript’s type system is **structural**, not **nominal**: We can use `obj` as a `Pointlike` because it has x and y properties that are both numbers. The relationships between types are determined by the **properties they contain**, not whether they were declared with some particular relationship (like in C#).

## Things that might trip up the OOP programmer..

### 1. Empty Types
The first is that the empty type seems to defy expectation:

```ts
class Empty {}

function fn(arg: Empty) {
  // do something?
}

// No error, but this isn't an 'Empty' ?
fn({ k: 10 });
```

This works because TypeScript is checking if the call to `fn` is valid by seeing if the provided argument is a **valid `Empty`**. 

So what does that mean? Well, the arg passed to `fn()` was an object `{ k: 10 }`, so TypeScript examines the **structure** of this as well as the `class Empty { }`.

Here is the kicker: `{ k: 10 }` indeed does have *all* of the properties that `Empty` does, because `Empty` **has no properties**. So we're good!

### 2. Identical Types
Another frequent source of surprise comes with identical types:

```ts
class Car {
  drive() {
    // hit the gas
  }
}
class Golfer {
  drive() {
    // hit the ball far
  }
}

// No error?
let w: Car = new Golfer();
```

There is no error here because the **structures** of these two classes are **the same**.

### Reflection
OOP programmers are accustomed to being able to query the type of any value, even a generic one:

```ts
// C#
static void PrintType<T>() {
    Console.WriteLine(typeof(T).Name);
}
```

Because TypeScript’s type system is fully erased, information about e.g. the instantiation of a generic type parameter is not available at runtime.

JavaScript does have some limited primitives like `typeof` and `instanceof`, but remember that these operators are still working on the values as they exist in the type-erased output code. For example, `typeof (new Car())` will be "`object`", not `Car` or "`Car`".

## Resources
* [Awesome TypeScript](https://project-awesome.org/dzharii/awesome-typescript)
* [Official TypeScript docs](https://www.typescriptlang.org/docs)

