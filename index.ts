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

function fn1(n: number, toFixed?: number) {
  console.log(n.toFixed(toFixed || 2));
}

// fn1(123.12343, 3);
// fn1(123.12343);

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

// OptionalParams("Prof M", "Faisal", 1000);
// OptionalParams("Prof M", "Zeeshan");

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

function printArray(str: string | string[] | null) {
  if (str instanceof Array) {
    console.log("This is an instance of Array");
    str.map((item) => console.log(item));
  } else if (typeof str === "string") {
    console.log("Its a String");
  } else {
    console.log("Its Null");
  }
}

const positions: string[] = ["first", "second", "third", "forth"];

// printArray(positions);
// printArray("This is a String");
// printArray(null);

const var1 = 0 || "String";
// console.log(var1);

const var2 = 5 < 4 || "Intialized as String";
// console.log(var2);

const college: {
  name: string;
  foundedYear: number;
  totalStudents: number;
  isCertified: Boolean;
} = {
  name: "IMCB H-9",
  foundedYear: 1998,
  totalStudents: 3500,
  isCertified: true,
};

// console.log(college);

type collegeKeys = keyof typeof college;

interface university {
  name: string;
  noOfDepartments: number;
  totalTeacher: number;
  hecCertified: boolean;
}

const quiadeAzam: university = {
  name: "Quiad-e-Azam University",
  noOfDepartments: 40,
  totalTeacher: 700,
  hecCertified: true,
};

// console.log(quiadeAzam);

class Account {
  name: string;
  password: string;
  age: number;
  hasRetired: boolean;

  public constructor(
    name: string,
    password: string,
    age: number,
    hasRetired: boolean
  ) {
    this.name = name;
    this.password = password;
    this.age = age;
    this.hasRetired = hasRetired;
  }

  getDetails(): void {
    console.log(`Hello Mr.${this.name} Age: ${this.age}`);
  }
}

const scbAccount = new Account("Ahmed", "tecklogics@2025", 22, false);

// console.log(scbAccount);
// scbAccount.getDetails();

class Circle {
  radius: number;
  PI = Math.PI;
  constructor(radius: number) {
    this.radius = radius;
  }
  getCircumference(): void {
    console.log(`Radius: ${2 * this.PI * this.radius}`);
  }
  getArea(): void {
    console.log(`Area: ${this.PI * this.radius * this.radius}`);
  }
}

const circle1 = new Circle(10);
// console.log(circle1);
// circle1.getArea();
// circle1.getCircumference();

const diffTypeArr: (string | number)[] = [1, "1", 2, "2"];

// for (const ele of diffTypeArr) [console.log(ele)];

interface person {
  name: string;
}
interface person {
  id: number;
}

const ahmed: person = {
  name: "ahmed",
  id: 34,
};

// console.log(ahmed);

type mouse = {
  company: string;
  warranty?: number;
};

const tuuins: mouse = {
  company: "Tunins",
  warranty: 4,
};

// console.log(tuuins);

class accessSpecifiers {
  private id: number | string;
  private url = "OPENAI.COM/API/KEY/NEWKEY/SDF42BK234";

  #secretUrl: string = "This is a secret url string";

  constructor(id: number | string) {
    this.id = id;
  }

  getSecretUrl(): string {
    return this.#secretUrl;
  }
  setSecretUrl(url: string): void {
    this.#secretUrl = url;
  }
}

const testing = new accessSpecifiers("10");

// console.log(testing.id ? "Accessable" : "Not Accessable");
// console.log(testing.API_KEY ? "Accessable" : "Not Accessable");
// console.log(testing.API_KEY);

// console.log(testing.getSecretUrl());
// testing.setSecretUrl("New Secret Key in Class");
// console.log(testing.getSecretUrl());

function failure(msg: string): never {
  throw new Error(msg);
}

// failure("Please give your full-name");

let fullName: string = "First Last Name";

type uuid = number;

const myId: uuid = 234;

// console.log(myId);

function print<T>(value: T) {
  console.log(value);
}
print("String"); // Accepts String
print(12); // Accepts Number
print(false); // Accepts Boolean

let randomType: any = "Variable";
console.log(typeof randomType);
randomType = 23;
console.log(typeof randomType);

function errMsg(err: string): never {
  throw new Error(err);
}

// errMsg("Name Required");
