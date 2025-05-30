// 1. Define an interface `Person` with `firstName`,
//  `lastName`, and `age`. Create an array of `Person` objects.

interface Person2{
    firstName: string;
    lastName: string;
    age: number;
}

const people2: Person2[] = [
    {firstName: 'Andrey', lastName: 'Spasov', age: 20},
    {firstName: 'Maggie', lastName: "Spasov", age: 25},
]

// 2. Write a function `getFullName` that accepts a
//  `Person` and returns their full name.

function getFullName2(person2 : Person): string {
    return `${person2.firstName} ${person2.lastName}`;
}

// 3. Write a function that accepts a `number[]`
//  and returns the sum of the numbers.

function sumOfNumbers2(numberArray: number[]): number {
    return numberArray.reduce((acc, num) => acc + num, 0);
}

// 4. Write a function `getMin` that accepts
//  an array of numbers and returns the smallest number.

function getMin2(arr: number[]): number {
    return Math.min(...arr);
}

// 5. Write a function that accepts a string and returns
//  whether it is a palindrome.



// 6. Define an interface `Book` with `title`, `author`, and `year`. Write a function to return a list of books published after a given year.

// 7. Write a function that accepts an array of strings and returns a new array with only those strings that start with the letter 'A'.

// 8. Write a function that takes a number and returns whether it's even or odd.

// 9. Define an enum `Days` with all the days of the week. Write a function that accepts a day and returns whether it's a weekend.

// 10. Write a function `capitalizeWords` that takes a string and capitalizes the first letter of each word.

// 11. Create a generic function `reverseArray` that accepts an array and returns the reversed array.

// 12. Define an interface `Car` with properties `make`, `model`, and `year`. Write a function that filters cars older than a given year.

// 13. Write a function that accepts an array of numbers and returns the largest number.

// 14. Write a function `removeDuplicates` that accepts an array of strings and removes duplicate values.

// 15. Create a function `filterNumbersGreaterThan` that filters an array of numbers and returns those greater than a specified threshold.

// 16. Create a function `mergeArrays` that merges two arrays and returns the result.

// 17. Write a function that checks if a given string contains only numbers.

// 18. Define an interface `Movie` with `title`, `director`, and `releaseYear`. Write a function to return movies released before a given year.

// 19. Write a function `sortStrings` that sorts an array of strings in alphabetical order.

// 20. Write a function `countWords` that takes a string and counts how many words are in it.

// 21. Write a function `squareNumbers` that squares each number in an array of numbers.

// 22. Write a function `getMax` that accepts two numbers and returns the larger of the two.

// 23. Write a function `filterFalsy` that accepts an array of mixed values (strings, numbers, booleans) and returns only truthy values.

// 24. Create a function `addNewProperty` that adds a new property to a given object.

// 25. Define an interface `Product` with `id`, `name`, and `price`. Write a function to get products that are cheaper than a given price.

// 26. Write a function that accepts a number and returns its square root.

// 27. Create a function `doubleNumbers` that doubles each number in an array.

// 28. Write a function that accepts a string and returns it with all vowels removed.

// 29. Write a function `multiplyNumbers` that accepts an array of numbers and returns the result of multiplying all numbers together.

// 30. Define an interface `Person` with `firstName`, `lastName`, and `email`. Write a function to find a person by email from an array of people.

// 31. Write a function `reverseWords` that reverses the words in a sentence.

// 32. Create a function `convertToUpper` that converts all characters of a string to uppercase.

// 33. Define an enum `Month` with all 12 months. Write a function that returns the number of days in a given month.

// 34. Write a function `findDuplicates` that returns all duplicates from an array of numbers.

// 35. Write a function `isPrime` that checks if a number is prime.

// 36. Create a function `filterShortStrings` that filters strings that have fewer than 5 characters.

// 37. Write a function `countVowels` that counts how many vowels (a, e, i, o, u) are in a given string.

// 38. Create a function `groupBy` that groups an array of objects by a specific key.

// 39. Write a function `stringToArray` that converts a string into an array of characters.

// 40. Write a function `sumNumbers` that sums up all the numbers in an array.

// 41. Write a function `findMax` that finds the maximum value in a given array of numbers.

// 42. Create a function `convertToLower` that converts all characters of a string to lowercase.

// 43. Write a function `createPerson` that returns a `Person` object with the provided `firstName`, `lastName`, and `age`.

// 44. Write a function that accepts two strings and returns a boolean indicating if the first string is a substring of the second.

// 45. Create a function `findFirstNegative` that returns the first negative number from an array.

// 46. Write a function `getNameLength` that returns the length of a given string.

// 47. Write a function `filterLongStrings` that filters strings with more than 6 characters.

// 48. Write a function `combineArrays` that merges two arrays without duplicates.

// 49. Create a function `capitalizeFirst` that capitalizes only the first letter of a given string.

// 50. Write a function `isLeapYear` that checks if a given year is a leap year.

// 51. Create a function `countChars` that counts how many times a character appears in a string.

// 52. Write a function `getObjectLength` that returns the number of properties in an object.

// 53. Define an interface `Employee` with `name`, `id`, and `department`. Write a function that filters employees from a given department.

// 54. Create a function `getFirstThree` that returns the first three elements from an array.

// 55. Write a function `findLargest` that finds the largest value from an array.

// 56. Write a function `removeElement` that removes a given element from an array.

// 57. Write a function `getLast` that returns the last element of an array.

// 58. Create a function `splitString` that splits a string by a given delimiter.

// 59. Write a function `combineStrings` that combines two strings into one.

// 60. Write a function `mergeObjects` that merges two objects together.

// 61. Write a function `sumOddNumbers` that sums up all the odd numbers in an array.

// 62. Create a function `removeWhitespace` that removes all extra whitespace from a string.

// 63. Write a function `getPositiveNumbers` that returns an array of only positive numbers from an array.

// 64. Define an interface `Book` with properties `title`, `author`, and `pages`. Write a function that filters books that have more than 300 pages.

// 65. Write a function `findSmallest` that finds the smallest number in an array.

// 66. Create a function `getLastFive` that returns the last five elements from an array.

// 67. Write a function `isEqual` that checks if two arrays are equal.

// 68. Write a function `doubleArray` that returns a new array where each element is doubled.

// 69. Write a function `findStringLength` that returns the length of a string.

// 70. Write a function `removeFalsyValues` that removes all falsy values from an array.

// 71. Write a function `sumEvenNumbers` that sums up all even numbers in an array.

// 72. Write a function `checkIfPalindrome` that checks if a string is a palindrome.

// 73. Create a function `getMiddleElement` that returns the middle element of an array.

// 74. Write a function `convertToDate` that converts a string into a `Date` object.

// 75. Write a function `getFirstAndLast` that returns the first and last elements from an array.

// 76. Write a function `isEmpty` that checks if an array or object is empty.

// 77. Create a function `createArray` that creates an array of numbers from 1 to `n`.

// 78. Write a function `generateRandom` that generates a random number between two values.

// 79. Create a function `sortNumbers` that sorts an array of numbers in ascending order.

// 80. Write a function `stringToUpper` that converts a string to uppercase.

// 81. Write a function `filterGreaterThan` that filters numbers greater than a specified value.

// 82. Write a function `flattenArray` that flattens a nested array into a single array.

// 83. Write a function `countOccurrences` that counts the occurrences of a string in an array.

// 84. Write a function `isAdult` that checks if a given age is greater than or equal to 18.

// 85. Create a function `splitByComma` that splits a string by commas.

// 86. Write a function `getKeys` that returns the keys of an object as an array.

// 87. Create a function `repeatString` that repeats a string a specified number of times.

// 88. Write a function `getPositiveIntegers` that returns only positive integers from an array.

// 89. Write a function `mergeArrays` that merges two arrays, removes duplicates, and sorts the result.

// 90. Create a function `generateRandomString` that generates a random alphanumeric string of a specified length.

// 91. Write a function `stringToBoolean` that converts a string "true" or "false" to a boolean.

// 92. Write a function `combineObjects` that combines two objects into one, overwriting properties in the first object with properties from the second.

// 93. Write a function `reverseArray` that reverses the elements of an array.

// 94. Create a function `getEvenNumbers` that returns an array of even numbers from an array of numbers.

// 95. Write a function `createObject` that creates an object from an array of keys and values.

// 96. Write a function `removeNulls` that removes `null` values from an array.

// 97. Create a function `calculateSum` that calculates the sum of all numbers in an array.

// 98. Write a function `isPrimeNumber` that checks if a number is prime.

// 99. Create a function `filterNullAndUndefined` that filters out `null` and `undefined` from an array.

// 100. Write a function `getUniqueElements` that returns only the unique elements from an array.


// // 1. Define an interface `Person` with `firstName`, `lastName`, and `age`. Create an array of `Person` objects.
// interface Person {
//   firstName: string;
//   lastName: string;
//   age: number;
// }

// const people: Person[] = [
//   { firstName: "John", lastName: "Doe", age: 30 },
//   { firstName: "Jane", lastName: "Smith", age: 25 },
// ];

// // 2. Write a function `getFullName` that accepts a `Person` and returns their full name.
// function getFullName(person: Person): string {
//   return `${person.firstName} ${person.lastName}`;
// }

// // 3. Write a function that accepts a `number[]` and returns the sum of the numbers.
// function sumNumbers(numbers: number[]): number {
//   return numbers.reduce((acc, num) => acc + num, 0);
// }

// // 4. Write a function `getMin` that accepts an array of numbers and returns the smallest number.
// function getMin(numbers: number[]): number {
//   return Math.min(...numbers);
// }

// 5. Write a function that accepts a string and returns whether it is a palindrome.
function isPalindrome(str: string): boolean {
  const cleaned = str.replace(/\s+/g, '').toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
}

// 6. Define an interface `Book` with `title`, `author`, and `year`. Write a function to return a list of books published after a given year.
interface Book {
  title: string;
  author: string;
  year: number;
}

function filterBooksByYear(books: Book[], year: number): Book[] {
  return books.filter(book => book.year > year);
}

// 7. Write a function that accepts an array of strings and returns a new array with only those strings that start with the letter 'A'.
function filterAStrings(words: string[]): string[] {
  return words.filter(word => word[0].toLowerCase() === 'a');
}

// 8. Write a function that takes a number and returns whether it's even or odd.
function isEvenOrOdd(num: number): string {
  return num % 2 === 0 ? "Even" : "Odd";
}

// 9. Define an enum `Days` with all the days of the week. Write a function that accepts a day and returns whether it's a weekend.
enum Days {
  Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
}

function isWeekend(day: Days): boolean {
  return day === Days.Sunday || day === Days.Saturday;
}

// 10. Write a function `capitalizeWords` that takes a string and capitalizes the first letter of each word.
function capitalizeWords(str: string): string {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// 11. Create a generic function `reverseArray` that accepts an array and returns the reversed array.
function reverseArray<T>(arr: T[]): T[] {
  return arr.reverse();
}

// 12. Define an interface `Car` with properties `make`, `model`, and `year`. Write a function that filters cars older than a given year.
interface Car {
  make: string;
  model: string;
  year: number;
}

function filterOldCars(cars: Car[], year: number): Car[] {
  return cars.filter(car => car.year < year);
}

// 13. Write a function that accepts an array of numbers and returns the largest number.
function getMax(numbers: number[]): number {
  return Math.max(...numbers);
}

// 14. Write a function `removeDuplicates` that accepts an array of strings and removes duplicate values.
function removeDuplicates(arr: string[]): string[] {
  return [...new Set(arr)];
}

// 15. Create a function `filterNumbersGreaterThan` that filters an array of numbers and returns those greater than a specified threshold.
function filterNumbersGreaterThan(numbers: number[], threshold: number): number[] {
  return numbers.filter(num => num > threshold);
}

// 16. Create a function `mergeArrays` that merges two arrays and returns the result.
function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

// 17. Write a function that checks if a given string contains only numbers.
function isOnlyNumbers(str: string): boolean {
  return /^[0-9]+$/.test(str);
}

// 18. Define an interface `Movie` with `title`, `director`, and `releaseYear`. Write a function to return movies released before a given year.
interface Movie {
  title: string;
  director: string;
  releaseYear: number;
}

function filterMoviesByYear(movies: Movie[], year: number): Movie[] {
  return movies.filter(movie => movie.releaseYear < year);
}

// 19. Write a function `sortStrings` that sorts an array of strings in alphabetical order.
function sortStrings(arr: string[]): string[] {
  return arr.sort();
}

// 20. Write a function `countWords` that takes a string and counts how many words are in it.
function countWords(str: string): number {
  return str.split(' ').filter(Boolean).length;
}

// 21. Write a function `squareNumbers` that squares each number in an array of numbers.
function squareNumbers(numbers: number[]): number[] {
  return numbers.map(num => num * num);
}

// 22. Write a function `getMax` that accepts two numbers and returns the larger of the two.
function getMax(a: number, b: number): number {
  return a > b ? a : b;
}

// 23. Write a function `filterFalsy` that accepts an array of mixed values (strings, numbers, booleans) and returns only truthy values.
function filterFalsy(values: any[]): any[] {
  return values.filter(Boolean);
}

// 24. Create a function `addNewProperty` that adds a new property to a given object.
function addNewProperty(obj: object, key: string, value: any): object {
  obj[key] = value;
  return obj;
}

// 25. Define an interface `Product` with `id`, `name`, and `price`. Write a function to get products that are cheaper than a given price.
interface Product {
  id: number;
  name: string;
  price: number;
}

function filterCheapProducts(products: Product[], price: number): Product[] {
  return products.filter(product => product.price < price);
}

// 26. Write a function that accepts a number and returns its square root.
function squareRoot(num: number): number {
  return Math.sqrt(num);
}

// 27. Create a function `doubleNumbers` that doubles each number in an array.
function doubleNumbers(numbers: number[]): number[] {
  return numbers.map(num => num * 2);
}

// 28. Write a function that accepts a string and returns it with all vowels removed.
function removeVowels(str: string): string {
  return str.replace(/[aeiouAEIOU]/g, '');
}

// 29. Write a function `multiplyNumbers` that accepts an array of numbers and returns the result of multiplying all numbers together.
function multiplyNumbers(numbers: number[]): number {
  return numbers.reduce((acc, num) => acc * num, 1);
}

// 30. Define an interface `Person` with `firstName`, `lastName`, and `email`. Write a function to find a person by email from an array of people.
interface Person {
  firstName: string;
  lastName: string;
  email: string;
}

function findPersonByEmail(people: Person[], email: string): Person | undefined {
  return people.find(person => person.email === email);
}

// 31. Write a function `reverseWords` that reverses the words in a sentence.
function reverseWords(sentence: string): string {
  return sentence.split(' ').reverse().join(' ');
}

// 32. Create a function `convertToUpper` that converts all characters of a string to uppercase.
function convertToUpper(str: string): string {
  return str.toUpperCase();
}

// 33. Define an enum `Month` with all 12 months. Write a function that returns the number of days in a given month.
enum Month {
  January = 31,
  February = 28,
  March = 31,
  April = 30,
  May = 31,
  June = 30,
  July = 31,
  August = 31,
  September = 30,
  October = 31,
  November = 30,
  December = 31
}

function getDaysInMonth(month: Month): number {
  return month;
}

// 34. Write a function `findDuplicates` that returns all duplicates from an array of numbers.
function findDuplicates(arr: number[]): number[] {
  const uniqueNumbers = new Set();
  const duplicates = new Set();
  for (const num of arr) {
    if (uniqueNumbers.has(num)) {
      duplicates.add(num);
    } else {
      uniqueNumbers.add(num);
    }
  }
  return [...duplicates];
}

// 35. Write a function `isPrime` that checks if a number is prime.
function isPrime(num: number): boolean {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 36. Create a function `filterShortStrings` that filters strings that have fewer than 5 characters.
function filterShortStrings(arr: string[]): string[] {
  return arr.filter(str => str.length >= 5);
}

// 37. Write a function `countVowels` that counts how many vowels (a, e, i, o, u) are in a given string.
function countVowels(str: string): number {
  return (str.match(/[aeiouAEIOU]/g) || []).length;
}

// 38. Create a function `groupBy` that groups an array of objects by a specific key.
function groupBy<T>(arr: T[], key: keyof T): Record<string, T[]> {
  return arr.reduce((result, obj) => {
    const groupKey = String(obj[key]);
    if (!result[groupKey]) result[groupKey] = [];
    result[groupKey].push(obj);
    return result;
  }, {});
}

// 39. Write a function `stringToArray` that converts a string into an array of characters.
function stringToArray(str: string): string[] {
  return str.split('');
}

// 40. Write a function `sumNumbers` that sums up all the numbers in an array.
function sumNumbers(numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// 41. Write a function `findMax` that finds the maximum value in a given array of numbers.
function findMax(numbers: number[]): number {
  return Math.max(...numbers);
}

// 42. Create a function `convertToLower` that converts all characters of a string to lowercase.
function convertToLower(str: string): string {
  return str.toLowerCase();
}

// 43. Write a function `createPerson` that returns a `Person` object with the provided `firstName`, `lastName`, and `age`.
function createPerson(firstName: string, lastName: string, age: number): Person {
  return { firstName, lastName, age };
}

// 44. Write a function that accepts two strings and returns a boolean indicating if the first string is a substring of the second.
function isSubstring(str1: string, str2: string): boolean {
  return str2.includes(str1);
}

// 45. Create a function `findFirstNegative` that returns the first negative number from an array.
function findFirstNegative(numbers: number[]): number | undefined {
  return numbers.find(num => num < 0);
}

// 46. Write a function `getNameLength` that returns the length of a given string.
function getNameLength(name: string): number {
  return name.length;
}

// 47. Write a function `filterLongStrings` that filters strings with more than 6 characters.
function filterLongStrings(arr: string[]): string[] {
  return arr.filter(str => str.length > 6);
}

// 48. Write a function `combineArrays` that merges two arrays without duplicates.
function combineArrays<T>(arr1: T[], arr2: T[]): T[] {
  return [...new Set([...arr1, ...arr2])];
}

// 49. Create a function `capitalizeFirst` that capitalizes only the first letter of a given string.
function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 50. Write a function `isLeapYear` that checks if a given year is a leap year.
function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}

// 51. Create a function `countChars` that counts how many times a character appears in a string.
function countChars(str: string, char: string): number {
  return str.split('').filter(c => c === char).length;
}

// 52. Write a function `getObjectLength` that returns the number of properties in an object.
function getObjectLength(obj: object): number {
  return Object.keys(obj).length;
}

// 53. Define an interface `Employee` with `name`, `id`, and `department`. Write a function that filters employees from a given department.
interface Employee {
  name: string;
  id: number;
  department: string;
}

function filterEmployeesByDepartment(employees: Employee[], department: string): Employee[] {
  return employees.filter(employee => employee.department === department);
}

// 54. Create a function `getFirstThree` that returns the first three elements from an array.
function getFirstThree<T>(arr: T[]): T[] {
  return arr.slice(0, 3);
}

// 55. Write a function `findLargest` that finds the largest value from an array.
function findLargest(numbers: number[]): number {
  return Math.max(...numbers);
}

// 56. Write a function `removeElement` that removes a given element from an array.
function removeElement<T>(arr: T[], element: T): T[] {
  return arr.filter(item => item !== element);
}

// 57. Write a function `getLast` that returns the last element of an array.
function getLast<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}

// 58. Create a function `splitString` that splits a string by a given delimiter.
function splitString(str: string, delimiter: string): string[] {
  return str.split(delimiter);
}

// 59. Write a function `combineStrings` that combines two strings into one.
function combineStrings(str1: string, str2: string): string {
  return str1 + str2;
}

// 60. Write a function `mergeObjects` that merges two objects together.
function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

// 61. Write a function `sumOddNumbers` that sums up all the odd numbers in an array.
function sumOddNumbers(numbers: number[]): number {
  return numbers.filter(num => num % 2 !== 0).reduce((acc, num) => acc + num, 0);
}

// 62. Create a function `removeWhitespace` that removes all extra whitespace from a string.
function removeWhitespace(str: string): string {
  return str.replace(/\s+/g, ' ').trim();
}

// 63. Write a function `getPositiveNumbers` that returns an array of only positive numbers from an array.
function getPositiveNumbers(numbers: number[]): number[] {
  return numbers.filter(num => num > 0);
}

// 64. Define an interface `Book` with properties `title`, `author`, and `pages`. Write a function that filters books that have more than 300 pages.
interface Book {
  title: string;
  author: string;
  pages: number;
}

function filterLongBooks(books: Book[]): Book[] {
  return books.filter(book => book.pages > 300);
}

// 65. Write a function `findSmallest` that finds the smallest number in an array.
function findSmallest(numbers: number[]): number {
  return Math.min(...numbers);
}

// 66. Create a function `getLastFive` that returns the last five elements from an array.
function getLastFive<T>(arr: T[]): T[] {
  return arr.slice(-5);
}

// 67. Write a function `isEqual` that checks if two arrays are equal.
function isEqual<T>(arr1: T[], arr2: T[]): boolean {
  return arr1.length === arr2.length && arr1.every((v, i) => v === arr2[i]);
}

// 68. Write a function `doubleArray` that returns a new array where each element is doubled.
function doubleArray(numbers: number[]): number[] {
  return numbers.map(num => num * 2);
}

// 69. Write a function `findStringLength` that returns the length of a string.
function findStringLength(str: string): number {
  return str.length;
}

// 70. Write a function `removeFalsyValues` that removes all falsy values from an array.
function removeFalsyValues(arr: any[]): any[] {
  return arr.filter(Boolean);
}

// 71. Write a function `sumEvenNumbers` that sums up all even numbers in an array.
function sumEvenNumbers(numbers: number[]): number {
  return numbers.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0);
}

// 72. Write a function `checkIfPalindrome` that checks if a string is a palindrome.
function checkIfPalindrome(str: string): boolean {
  return str === str.split('').reverse().join('');
}

// 73. Create a function `getMiddleElement` that returns the middle element of an array.
function getMiddleElement<T>(arr: T[]): T | undefined {
  return arr[Math.floor(arr.length / 2)];
}

// 74. Write a function `convertToDate` that converts a string into a `Date` object.
function convertToDate(dateString: string): Date {
  return new Date(dateString);
}

// 75. Write a function `getFirstAndLast` that returns the first and last elements from an array.
function getFirstAndLast<T>(arr: T[]): [T, T] | undefined {
  if (arr.length === 0) return undefined;
  return [arr[0], arr[arr.length - 1]];
}

// 76. Write a function `isEmpty` that checks if an array or object is empty.
function isEmpty(obj: object | any[]): boolean {
  return Object.keys(obj).length === 0 || obj.length === 0;
}

// 77. Create a function `createArray` that creates an array of numbers from 1 to `n`.
function createArray(n: number): number[] {
  return Array.from({ length: n }, (_, i) => i + 1);
}

// 78. Write a function `generateRandom` that generates a random number between two values.
function generateRandom(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 79. Create a function `sortNumbers` that sorts an array of numbers in ascending order.
function sortNumbers(numbers: number[]): number[] {
  return numbers.sort((a, b) => a - b);
}

// 80. Write a function `stringToUpper` that converts a string to uppercase.
function stringToUpper(str: string): string {
  return str.toUpperCase();
}

// 81. Write a function `filterGreaterThan` that filters numbers greater than a specified value.
function filterGreaterThan(numbers: number[], value: number): number[] {
  return numbers.filter(num => num > value);
}

// 82. Write a function `flattenArray` that flattens a nested array into a single array.
function flattenArray<T>(arr: T[][]): T[] {
  return arr.flat();
}

// 83. Write a function `countOccurrences` that counts the occurrences of a string in an array.
function countOccurrences(arr: string[], str: string): number {
  return arr.filter(item => item === str).length;
}

// 84. Write a function `isAdult` that checks if a given age is greater than or equal to 18.
function isAdult(age: number): boolean {
  return age >= 18;
}

// 85. Create a function `splitByComma` that splits a string by commas.
function splitByComma(str: string): string[] {
  return str.split(',');
}

// 86. Write a function `getKeys` that returns the keys of an object as an array.
function getKeys(obj: object): string[] {
  return Object.keys(obj);
}

// 87. Create a function `repeatString` that repeats a string a specified number of times.
function repeatString(str: string, times: number): string {
  return str.repeat(times);
}

// 88. Write a function `getPositiveIntegers` that returns only positive integers from an array.
function getPositiveIntegers(arr: number[]): number[] {
  return arr.filter(num => num > 0 && Number.isInteger(num));
}

// 89. Write a function `mergeArrays` that merges two arrays, removes duplicates, and sorts the result.
function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
  return [...new Set([...arr1, ...arr2])].sort();
}

// 90. Create a function `generateRandomString` that generates a random alphanumeric string of a specified length.
function generateRandomString(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// 91. Write a function `stringToBoolean` that converts a string "true" or "false" to a boolean.
function stringToBoolean(str: string): boolean {
  return str.toLowerCase() === 'true';
}

// 92. Write a function `combineObjects` that combines two objects into one, overwriting properties in the first object with properties from the second.
function combineObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

// 93. Write a function `reverseArray` that reverses the elements of an array.
function reverseArray<T>(arr: T[]): T[] {
  return arr.reverse();
}

// 94. Create a function `getEvenNumbers` that returns an array of even numbers from an array of numbers.
function getEvenNumbers(numbers: number[]): number[] {
  return numbers.filter(num => num % 2 === 0);
}

// 95. Write a function `createObject` that creates an object from an array of keys and values.
function createObject(keys: string[], values: any[]): object {
  return keys.reduce((obj, key, index) => {
    obj[key] = values[index];
    return obj;
  }, {});
}

// 96. Write a function `removeNulls` that removes `null` values from an array.
function removeNulls(arr: any[]): any[] {
  return arr.filter(item => item !== null);
}

// 97. Create a function `calculateSum` that calculates the sum of all numbers in an array.
function calculateSum(numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// 98. Write a function `isPrimeNumber` that checks if a number is prime.
function isPrimeNumber(num: number): boolean {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 99. Create a function `filterNullAndUndefined` that filters out `null` and `undefined` from an array.
function filterNullAndUndefined(arr: any[]): any[] {
  return arr.filter(item => item !== null && item !== undefined);
}

// 100. Write a function `getUniqueElements` that returns only the unique elements from an array.
function getUniqueElements<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}
