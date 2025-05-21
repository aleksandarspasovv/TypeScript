function sumFunction(num1: number, num2: number): number {
    return num1 + num2;
}

function greeetFunction(name: string): string {
    return `Greetings ${name}`;
}

interface Person {
    name: string,
    age: number,
}

const user: Person = {
    name: Blob,
    age: 22,
}

function evenNumbers(numbers: number[]): number[] {
    return numbers.filter(n => n % 2 === 0);
}


function describePerson(name: string, age?: number): string {
  if (age) {
    return `${name} is ${age} years old`;
  }  else {
    return `Meet ${name}`;
  }
}


function multiplyByTwo(numbes: number[]): number[] {
    return numbes.map(n => n * 2);
}

function positiveOrNegative(number: number): boolean {
    return number > 0;
}

// returns True if the number is positive and false if the number is negative


interface Car {
    make: string,
    model: string,
    year: number,
    registartion: string | number,
}

const car: Car = {
    make: 'BMW',
    model: '320',
    year: 1993,
    registartion: '0597',
};

function reverseString(word: string): string {
    return word.split('').reverse().join('');
};


