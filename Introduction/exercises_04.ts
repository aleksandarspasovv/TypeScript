// 1.
// Define an interface for a Book with title, author, and optional year.
// Create an array of Book objects.
interface Book {
    title: string;
    author: string;
    year?: number;
}

const books: Book[] = [
    {title: 'George is Gay', author: 'George The Gay'},
    {title: 'Eragon', author: 'Chrostopher Paolini', year: 2000},
]

// 2.
// Write a function that takes a Book and returns a formatted string:
// "Title by Author (Year)" — omit year if not provided.

function formatBook(book: Book): string {
    return `${book.title} by ${book.author}`;
}

// 3.
// Create a type alias Status with values "pending", "completed", or "failed".
// Write a function that accepts Status and returns a message.

type Status = 'pending' | 'completed' | 'failed';

function acceptStatus(status: Status): string {
    switch (status) {
        case 'pending': return 'Your task is pending';
        case 'completed': return 'Your task is completed';
        case 'failed': return 'Your task has failed';
    }
}

// 4.
// Write a function that takes an array of numbers and returns their average.

function averageSumArray(arr: number[]): number {
    if (arr.length === 0) return 0;

    const sum = arr.reduce((acc, n) => acc + n, 0);
    return sum / arr.length;
}

// 5.
// Create an interface for a Point with x and y coordinates.
// Write a function to calculate the distance between two Points.

interface Point {
    x: number;
    y: number;
}

function CalculateDistance(point1: Point, point2: Point): number {
    const dx = point1.x - point2.x;
    const dy = point1.y - point2.y;
    return Math.sqrt(dx * dx + dy * dy);
}

// 6.
// Create a generic function firstElement that returns the first element of any array.

function firstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

// 7.
// Define an enum Direction with Up, Down, Left, Right.
// Write a function that returns the opposite direction.

enum Direction {
    Up,
    Down,
    Left,
    Right,
}

function Opposite(dir: Direction): Direction {
    switch (dir) {
        case Direction.Up: return Direction.Down;
        case Direction.Down: return Direction.Up;
        case Direction.Left: return Direction.Right;
        case Direction.Right: return Direction.Left;
    }
}

// 8.
// Write a function that accepts a string and returns it reversed.

function reverseString(word: string): string {
  return word.split('').reverse().join('');
}


// 9.
// Define an interface for a Rectangle with width and height.
// Write a function to calculate its area.

interface Rectangle {
  width: number;
  height: number;
}

function calculateArea(rectangle: Rectangle): number {
  return rectangle.height * rectangle.width;
}

// 10.
// Create a function that takes an array of strings and returns an object
// mapping each string to its length.

function arrayOfStrings(arr: string[]): Record<string, number> {
  const result: Record<string, number> = {};
  for (const s of arr) {
    result[s] = s.length;
  }

  return result;
}


// 11.
// Write a type guard function that checks if a value is a number.

function isNumber(parameter: unknown): boolean {
  return typeof parameter === 'number';
}


// 12.
// Define an interface Car with make, model, and year.
// Write a function that filters cars newer than a given year.

interface Car {
  make: string;
  model: string;
  year: number;
}

function filterCars(cars: Car[], year: number): Car[] {
  return cars.filter(c => c.year > year);
}


// 13.
// Write a function that takes string | number and returns its string representation.

function stringOrNumber(type: string | number): string {
  return type.toString();
}



// 14.
// Create a function that returns true if a string is a palindrome,
// ignoring case and spaces.

function isPalindrome(str: string): boolean {
  const cleaned = str.toLowerCase().replace(/\s+/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}


// 15.
// Define a type alias for a tuple of two numbers representing coordinates.
// Write a function that adds two such tuples.

type Cordinates = [number, number];

function addTwoPoints(a: Cordinates, b: Cordinates): Cordinates {
  return [a[0] + b[0], a[1] + b[1]];
}


// 16.
// Write a function that takes an array of booleans and returns
// the count of true values.

function countOfTrues(booleans: boolean[]): number {
  return booleans.filter(b => b).length();
}


// 17.
// Define an interface Student with name and optional grade.
// Write a function that filters students with grades above a threshold.


interface Student {
  name: string;
  grade?: number;
}

function filterStudents(students: Student[], threshold: number) {
  return students.filter(student => (student.grade?? 0) > threshold);
}


// 18.
// Write a function that merges two arrays and removes duplicates.


function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
  return Array.from(new Set([...arr1, ...arr2]))
}


// 19.
// Define an interface User with id, email, and optional phone.
// Write a function that formats contact info into a string.

interface User {
  id: number;
  emai: string;
  phone?: number;
}

function formatUser(user: User): string {
  return user.phone? `${user.emai} ${user.phone}` : user.emai;
}




// 20.
// Create a function that takes an object and returns its keys as a string array.

function objectKeysToArray(obj: object): string[] {
  return Object.keys(obj);
}


// 21.
// Write a function that converts a string to camelCase.


function toCamelCase(str: string): string {
  return str
    .toLowerCase()
    .split(/[\s-_]+/)
    .map((word, i) =>
      i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join('');
}


// 22.
// Define an interface Task with id, description, and completed boolean.
// Write a function that toggles the completed state.


interface Task {
  id: string;
  descrption: string;
  completed: boolean;
}

function completeTask(task: Task): Task {
  return {...task, completed: !task.completed}
}

// 23.
// Create a function that counts how many times a character appears in a string.

function countCharacterInString(string: string, char: string): number {
  return string.split('').filter(c => c === char).length
}


// 24.
// Write a function that takes a number and returns its factorial.

function factorial(number: number): number {
  if (number <= 1) return 1;
  return number * factorial(number - 1);
}

// 25.
// Create a type alias ID as string or number.
// Write a function that normalizes IDs to strings.

type ID = string | number;

function normalizeID(id: ID): string {
  return id.toString();
}

// 26.
// Define an interface Event with title, date (string), and attendees (number).
// Write a function that filters upcoming events (date in the future).

interface Event {
  title: string;
  data: string;
  attendance: number;
}

function filterEvents(events: Event[]): Event[] {
  const now = new Date();
  return events.filter(e => new Date(e.data) > now);
}


// 27.
// Write a function that takes an array of strings and returns
// only those starting with a vowel.

function returnOnlyVovels(arr: string[]): string[] {
  const vowels = ['a', 'o', 'u', 'e', 'i', ];
  return arr.filter(s => vowels.includes(s[0].toLocaleLowerCase())
}

// 28.
// Define an enum LogLevel with Error, Warn, Info, Debug.
// Write a function that logs a message only if level is above a threshold.
enum LogLevel {
  Error,
  Warn,
  Info,
  Debug
}

function logMessage(level: LogLevel, threshold: LogLevel, message: string): void {
  if (level <= threshold){
    console.log(`${LogLevel[level]} ${message}`)
  }
}

// 29.
// Create a function that generates an array of numbers from start to end inclusive.

function generateArrOfNumbers(start: number, end: number): number[] {
  const result: number[] = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
}

// 30.
// Write a function that takes a nested array (array of arrays) of numbers
// and flattens it into a single array.

function flattenArray(arr: number[][]): number[] {
  return arr.reduce((acc, curr) => acc.concat(curr), []);
}

