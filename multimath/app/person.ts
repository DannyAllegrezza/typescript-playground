interface Person {
    name: string;
    age?: number; // optional
    formatName: () => string; // a function that returns a string
}

let johnDoe: Person = {
    name: "John",
    formatName: () => "John Doe"
};