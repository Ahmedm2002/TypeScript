console.clear();
// const variable: string = "This is a String";

// console.log(variable);

function printUser(firstName: string, lastName: string, age: number) {
  console.log(`
    Name: ${firstName} ${lastName}
    Age: ${age}
    `);
}

// printUser("John", "Doe", 21);

interface Teacher {
  name: string;
  age: number;
  greet(): void;
}

const teacher: Teacher = {
  name: "Nadeem Taj",
  age: 45,
  greet() {
    console.log(`Hello Mr.${this.name}`);
  },
};

// teacher.greet();

interface Person {
  name: string;
  age: number;
  available: boolean;
}

const person: Person = {
  name: "Abullah",
  age: 30,
  available: true,
};

function greetingMsg(name: string, date: Date) {
  console.log(`Hy Mr.${name} Today is ${date}`);
}

// greetingMsg("Ali", new Date());

enum Signal {
  first = "Red",
  second = "Yellow",
  third = "Green",
}

const x: string = Signal.first;

// console.log(x);

const names: string[] = ["first", "second", "third", "forth"];

// names.map((name) => console.log(name));

const tuple: readonly [string, number] = ["M Faisal", 56];

// console.log(tuple);

enum httpCodes {
  protocols = 100,
  success = 200,
  redirection = 300,
  notFound = 400,
  serverError = 500,
}

const apiResult: number = httpCodes.serverError;

// console.log(apiResult);

enum DefaultVals {
  up,
  down,
  left,
  right,
}

const val: number = DefaultVals.right;

// console.log(val);

function getDate(): string {
  return Date();
}

// console.log(getDate());
// console.log(typeof getDate());

interface cordinates {
  x: number;
  y: number;
  z: number;
}

const p1: cordinates = { x: 213.432, y: 12.234, z: 432.123 };

// console.log(typeof p1);
// console.log(p1);

let projectAssigned: boolean | number;

projectAssigned = Boolean(424243);

// console.log(projectAssigned);

function fn(n: number, toFixed?: number) {
  console.log(n.toFixed(toFixed || 2));
}

// fn(123.12343, 3);
// fn(123.12343);

let val1: any = "Value 1";
val1 = 213;
// console.log(val1);

function checkAge(age: number | string) {
  if (typeof age === "string") {
    age = Number(age);
  }
  console.log(age < 20 ? "Kid" : "Adult");
}

// checkAge(19);
// checkAge("50");

type rollNo = number;

const ali: rollNo = 32;

// console.log(ali);

type citizen = "todler" | "kid" | "Young" | "Adult" | "Old";

interface Person2 {
  name: string;
  age: number;
  citizenStatus: citizen;
}

const person2: Person2 = {
  name: "Zaheer Babar",
  age: 52,
  citizenStatus: "Adult",
};

// console.log(person2);

type studentTuple = [string, number, boolean];

const hamzaAamir: studentTuple = ["Hamza Aamir", 43, true];

// console.log(hamzaAamir);

// console.log(typeof hamzaAamir);

function returnVal<T extends Object>(n: T): T {
  return n;
}

// console.log(returnVal("Ahmed"));
// console.log(returnVal(324));

function swap<T, U extends Object>(first: T, second: U): [U, T] {
  return [second, first];
}

// console.log(swap("ABC", "XYZ"));
// console.log(swap("ui/ux", 23));
// console.log(swap(true, false));
// console.log(swap({ first: "A", second: "B" }, { third: "C", fourth: "D" }));

function mergeArrays<T, U extends Object>(
  firstArr: T[],
  secondArr: U[]
): (T | U)[] {
  return [...firstArr, ...secondArr];
}

// console.log(mergeArrays([1, 2, 3, 4], ["A", "B", "C"]));

enum library {
  books = 100,
  magzines,
  articles,
  librrarian,
  employees,
}

// const person3 = library.employees;

// console.log(person3);

// console.log([1, 2, 3, 4] instanceof Array);

// setInterval(() => {
//   console.log(new Date());
// }, 1000);

function OptionalParams(firstName: string, lastName: string, age?: number) {
  if (age === undefined) {
    console.log(`Hello Mr.${firstName} ${lastName}`);
  } else {
    console.log(`Hy Mr.${firstName} ${lastName} Age: ${age} years`);
  }
}

OptionalParams("Prof M", "Faisal", 1000);
OptionalParams("Prof M", "Zeeshan");

interface Shape {
  dimensions: number;
}

interface Circle extends Shape {
  radius: number;
  circumference: number;
}

function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
