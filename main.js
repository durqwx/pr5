"use strict";

// pr1

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = Object.values(salaries).reduce((acc, salary) => acc + salary, 0);

console.log(sum);

// pr2

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);

// pr3

let calculator = {
    read() {
        this.a = +prompt('Первое число:', 0);
        this.b = +prompt('Второе число:', 0);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// pr4

function extractCurrencyValue(str) {
    return +str.slice(1);
}

console.log(extractCurrencyValue('$120'));  

// pr5


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(user => user.name);

console.log(names); 

// pr6

let vasya1 = { name: "Вася", age: 25 };
let petya1 = { name: "Петя", age: 30 };
let masha1 = { name: "Маша", age: 8 };

let users1 = [vasya1, petya1, masha1];

function getAverageAge(users1) {
    let totalAge = users1.reduce((sum, user) => sum + user.age, 0);
    return totalAge / users1.length;
}

console.log(getAverageAge(users1));