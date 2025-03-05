var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _accessSpecifiers_secretUrl;
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
function greetingMsg(name) {
    console.log("Hy Mr.".concat(name, " Today is ").concat(new Date()));
}
greetingMsg("Ali");
var Signal;
(function (Signal) {
    Signal["first"] = "Red";
    Signal["second"] = "Yellow";
    Signal["third"] = "Green";
})(Signal || (Signal = {}));
// console.log(typeof Signal);
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
function fn1(n, toFixed) {
    console.log(n.toFixed(toFixed || 2));
}
// fn1(123.12343, 3);
// fn1(123.12343);
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
function clock() {
    setInterval(function () {
        console.log(new Date());
    }, 1000);
}
// clock();
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
function printArray(str) {
    if (str instanceof Array) {
        console.log("This is an instance of Array");
        str.map(function (item) { return console.log(item); });
    }
    else if (typeof str === "string") {
        console.log("Its a String");
    }
    else {
        console.log("Its Null");
    }
}
var positions = ["first", "second", "third", "forth"];
// printArray(positions);
// printArray("This is a String");
// printArray(null);
var var1 = 0 || "String";
// console.log(var1);
var var2 = 5 < 4 || "Intialized as String";
// console.log(var2);
var college = {
    name: "IMCB H-9",
    foundedYear: 1998,
    totalStudents: 3500,
    isCertified: true,
};
var quiadeAzam = {
    name: "Quiad-e-Azam University",
    noOfDepartments: 40,
    totalTeacher: 700,
    hecCertified: true,
};
// console.log(quiadeAzam);
var Account = /** @class */ (function () {
    function Account(name, password, age, hasRetired) {
        this.name = name;
        this.password = password;
        this.age = age;
        this.hasRetired = hasRetired;
    }
    Account.prototype.getDetails = function () {
        console.log("Hello Mr.".concat(this.name, " Age: ").concat(this.age));
    };
    return Account;
}());
var scbAccount = new Account("Ahmed", "tecklogics@2025", 22, false);
// console.log(scbAccount);
// scbAccount.getDetails();
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.PI = Math.PI;
        this.radius = radius;
    }
    Circle.prototype.getCircumference = function () {
        console.log("Radius: ".concat(2 * this.PI * this.radius));
    };
    Circle.prototype.getArea = function () {
        console.log("Area: ".concat(this.PI * this.radius * this.radius));
    };
    return Circle;
}());
var circle1 = new Circle(10);
// console.log(circle1);
// circle1.getArea();
// circle1.getCircumference();
var diffTypeArr = [1, "1", 2, "2"];
var ahmed = {
    name: "ahmed",
    id: 34,
};
var tuuins = {
    company: "Tunins",
    warranty: 4,
};
// console.log(tuuins);
var accessSpecifiers = /** @class */ (function () {
    function accessSpecifiers(id) {
        this.url = "OPENAI.COM/API/KEY/NEWKEY/SDF42BK234";
        _accessSpecifiers_secretUrl.set(this, "This is a secret url string");
        this.id = id;
    }
    accessSpecifiers.prototype.getSecretUrl = function () {
        return __classPrivateFieldGet(this, _accessSpecifiers_secretUrl, "f");
    };
    accessSpecifiers.prototype.setSecretUrl = function (url) {
        __classPrivateFieldSet(this, _accessSpecifiers_secretUrl, url, "f");
    };
    return accessSpecifiers;
}());
_accessSpecifiers_secretUrl = new WeakMap();
var testing = new accessSpecifiers("10");
// console.log(testing.id ? "Accessable" : "Not Accessable");
// console.log(testing.API_KEY ? "Accessable" : "Not Accessable");
// console.log(testing.API_KEY);
// console.log(testing.getSecretUrl());
testing.setSecretUrl("New Secret Key in Class");
// console.log(testing.getSecretUrl());
function failure(msg) {
    throw new Error(msg);
}
// failure("Please give your full-name");
var fullName = "First Last Name";
var myId = 234;
// console.log(myId);
function print(value) {
    console.log(value);
}
// print("String"); // Accepts String
// print(12); // Accepts Number
// print(false); // Accepts Boolean
var randomType = "Variable";
// console.log(typeof randomType);
randomType = 23;
// console.log(typeof randomType);
function errMsg(err) {
    throw new Error(err);
}
// errMsg("Name Required");
function userInput(value) {
    console.log(typeof value);
}
// userInput(3);
// userInput([234, 123, 12]);
// userInput({ name: "a", b: "B" });
// userInput("String");
