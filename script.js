// class -1
// alert("test");
console.log("Test console");

// class - 2
var name = "Foysal Ahmed";
console.log(name);
let fullName = "MD. Foysal Ahmed";
console.log(fullName);
console.log(typeof(fullName));

// class -3
// operator

let a = 10;
let b = 20;
const sum = a + b;
const sub = a - b;
const mul = a * b;
const div = a / b;
const remainder = a % b;
const exponentiation = a ** b;

console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);
console.log(remainder);
console.log(exponentiation);

let num = 10;
console.log(num++);
console.log(num++);
console.log(num--);
console.log(++num);
console.log(--num);

console.log(a<b);
console.log(a>b);
console.log(a<=b);
console.log(a >= b);
console.log(a == b);
console.log(a === b);

// class-4
if (a==10 && b==20 ) {
    console.log(true);
} else {
    console.log(false);
}
if (a==10 || b==20 ) {
    console.log(true);
} else {
    console.log(false);
}
if (a!=10 || b!=20 ) {
    console.log(true);
} else {
    console.log(false);
}

// class -5
let day = "saturday";
switch (day) {
    case "saturday":
        console.log("This is Saturday");
        break;
    case "sunday":
        console.log("This is Sunday");
        break;

    default:
        console.log("This is default day");
        break;
}

// class -6

for (let i = 0; i < 10; i++) {
    console.log(i);;
}

let number =100;
do {
    console.log(number);
    number++;
} while (number < 105);

while (number<110) {
    console.log(number);
    number++;
}

// class -6

let names = ["Jamal", "kamal", "Salam"];
console.log(names);
// console.log(names[1]);
console.log(names.indexOf("Salam"));

names.push("Foysal Ahmed")
// names.pop();
names.shift();
for (let index = 0; index < names.length; index++) {
    const element = names[index];
    console.log(element);
    
}

let n = [1, 2, 3, 4, 5];
n.splice(1, 3);
console.log(n);

// class -7

let student = {
    id: 2323,
    age: 24,
    fullName: "Jamal Uddin",
    role: "IT manage",
    hello: alert("Hello Friend")
}

console.log(student);
console.log(student.age);

// student.hello;

// class -8

function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}
console.log(multiply(10,30));