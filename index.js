var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.clear();
// const variable: string = "This is a String";
// console.log(variable);
function printUser(firstName, lastName, age) {
    console.log("\n    Name: ".concat(firstName, " ").concat(lastName, "\n    Age: ").concat(age, "\n    "));
}
var teacher = {
    name: "Nadeem Taj",
    age: 45,
    greet: function () {
        console.log("Hello Mr.".concat(this.name));
    },
};
var person = {
    name: "Abullah",
    age: 30,
    available: true,
};
function greetingMsg(name, date) {
    console.log("Hy Mr.".concat(name, " Today is ").concat(date));
}
// greetingMsg("Ali", new Date());
var Signal;
(function (Signal) {
    Signal["first"] = "Red";
    Signal["second"] = "Yellow";
    Signal["third"] = "Green";
})(Signal || (Signal = {}));
var x = Signal.first;
// console.log(x);
var names = ["first", "second", "third", "forth"];
// names.map((name) => console.log(name));
var tuple = ["M Faisal", 56];
// console.log(tuple);
var httpCodes;
(function (httpCodes) {
    httpCodes[httpCodes["protocols"] = 100] = "protocols";
    httpCodes[httpCodes["success"] = 200] = "success";
    httpCodes[httpCodes["redirection"] = 300] = "redirection";
    httpCodes[httpCodes["notFound"] = 400] = "notFound";
    httpCodes[httpCodes["serverError"] = 500] = "serverError";
})(httpCodes || (httpCodes = {}));
var apiResult = httpCodes.serverError;
// console.log(apiResult);
var DefaultVals;
(function (DefaultVals) {
    DefaultVals[DefaultVals["up"] = 0] = "up";
    DefaultVals[DefaultVals["down"] = 1] = "down";
    DefaultVals[DefaultVals["left"] = 2] = "left";
    DefaultVals[DefaultVals["right"] = 3] = "right";
})(DefaultVals || (DefaultVals = {}));
var val = DefaultVals.right;
// console.log(val);
function getDate() {
    return Date();
}
var p1 = { x: 213.432, y: 12.234, z: 432.123 };
// console.log(typeof p1);
// console.log(p1);
var projectAssigned;
projectAssigned = Boolean(424243);
// console.log(projectAssigned);
function fn(n, toFixed) {
    console.log(n.toFixed(toFixed || 2));
}
// fn(123.12343, 3);
// fn(123.12343);
var val1 = "Value 1";
val1 = 213;
// console.log(val1);
function checkAge(age) {
    if (typeof age === "string") {
        age = Number(age);
    }
    console.log(age < 20 ? "Kid" : "Adult");
}
var ali = 32;
var person2 = {
    name: "Zaheer Babar",
    age: 52,
    citizenStatus: "Adult",
};
var hamzaAamir = ["Hamza Aamir", 43, true];
// console.log(hamzaAamir);
// console.log(typeof hamzaAamir);
function returnVal(n) {
    return n;
}
// console.log(returnVal("Ahmed"));
// console.log(returnVal(324));
function swap(first, second) {
    return [second, first];
}
// console.log(swap("ABC", "XYZ"));
// console.log(swap("ui/ux", 23));
// console.log(swap(true, false));
// console.log(swap({ first: "A", second: "B" }, { third: "C", fourth: "D" }));
function mergeArrays(firstArr, secondArr) {
    return __spreadArray(__spreadArray([], firstArr, true), secondArr, true);
}
// console.log(mergeArrays([1, 2, 3, 4], ["A", "B", "C"]));
var library;
(function (library) {
    library[library["books"] = 100] = "books";
    library[library["magzines"] = 101] = "magzines";
    library[library["articles"] = 102] = "articles";
    library[library["librrarian"] = 103] = "librrarian";
    library[library["employees"] = 104] = "employees";
})(library || (library = {}));
// const person3 = library.employees;
// console.log(person3);
// console.log([1, 2, 3, 4] instanceof Array);
// setInterval(() => {
//   console.log(new Date());
// }, 1000);
function OptionalParams(firstName, lastName, age) {
    if (age === undefined) {
        console.log("Hello Mr.".concat(firstName, " ").concat(lastName));
    }
    else {
        console.log("Hy Mr.".concat(firstName, " ").concat(lastName, " Age: ").concat(age, " years"));
    }
}
OptionalParams("Prof M", "Faisal", 1000);
OptionalParams("Prof M", "Zeeshan");
function greet(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
