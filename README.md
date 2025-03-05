# Typescript

## DataTypes

Primarily 3 are used

- Strings
- Boolean
- Numbers

## Enums

- Speical class that represents a group of constants
- Allows to create named constants
- If not mentioned starts from 0

  Example:

```
enum library {
  books = 100,
  magzines,
  articles,
  librrarian,
  employees,
}

const person3 = library.employees;
```

## Union Function

Used when value can be more than of one type

Example:

```
const rollNo : string | number;
```

## Functions

Syantax

```
function name (parameter:type , ...more params) : return type {
  function code block
}
```

## Arrays

Synatax:

```
const name : type [] = []
```

Arrays can also be of multiple datatypes using unions

## Tuple

Fixed length array with pre-defined datatype at each index

Syantax

```
let myTuple = [string , boolean , number];

const newTuple: myTuple = [ 'A', true , 13 ];
```

## Objects

### Interface

It provides a blueprint for the datatypes that will be used in the object

It is generally used with objects

It can be redeclared

```
interface Person {
  name: string,
  age : number,
  hasRetired : boolean
}

const person: Person = {
  name : 'ABC',
  age : 23,
  hasRetired : false,
}
```

Another Way is using the type

### Type

It is similar to interface but it is also used with primitives like strings, numbers but can also be used with objects

Cannot be redeclared

```
type uuid = number;

const myId: uuid = 234;

console.log(myId);
```

## Generics

Used to write code for mulitple datatype without lossing type safety

```
function print<T> (value: T){
  console.log(value)
}
print('String')    // Accepts String
print(12)          // Accepts Number
print(false)       // Accepts Boolean
```

## Any

Removes compiler's type checking the variable can be assigned different datatype after assignment

```
let randomType: any = "Variable";
console.log(typeof randomType);   // String
randomType = 23;
console.log(typeof randomType);   // Number
```

## Never

The value that can never occur

```
function errMsg(err: string):never{
  throw new Error(err)
}

errMsg('Name Required')
```

## Optional

Does not shows error if the value is missing

```
let person: [string, number?, boolean?] = ["Alice", 25];
```

In above example number and boolean are optional means that if they are not provided it will still run the code and will not throw any error.

## Infer

When typescript guesses the type of the value its called infer

## String Interpolation

Injecting Js Statements or variables inside a string

```
const name = 'John Doe'
console.log(`Hello Mr ${name}`)
```

> _TypeScript's types don't exist at runtime. They're only used to help you catch errors at compile time. This is because TypeScript is designed to compile down to JavaScript, which doesn't have a type system._
