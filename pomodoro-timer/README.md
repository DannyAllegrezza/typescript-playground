# TypedTimer
TypedTime is a Pomodoro timer written in TypeScript.


## Project dependencies

| Package                                                  | Install command                      | Purpose                                                                                                                              |
| -------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| TypeScript                                               | `npm install typescript --save-dev`  | Strong types, the `tsc` compiler command, etc.                                                                                       |
| TSLint                                                   | `npm install tslint --save-dev`      | TSLint is an extensible static analysis tool that checks TypeScript code for readability, maintainability, and functionality errors. |
| [@types/node](https://www.npmjs.com/package/@types/node) | `npm install @types/node --save-dev` | Provides type definitions for NodeJS                                                                                                 |
| [ts-node](https://www.npmjs.com/package/ts-node) )       | `npm install ts-node --save-dev`     | TypeScript REPL environment, allows us to run our TypeScript without compiling it                                                    |
|                                                          |                                      |                                                                                                                                      |  |

## Our `tsconfig` file

```ts
npx tsc --init --rootDir src --outDir build \
--esModuleInterop --resolveJsonModule --lib es6 \
--module commonjs --allowJs true --noImplicitAny true
```

## Build process

