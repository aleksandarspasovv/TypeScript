// 1. Write a function that finds the second largest number in an array of numbers.

function secondLargestNumberInArray(arr: number[]): number {
    const sortedNumbers = [...arr].sort((a,b) => b - a);
    return sortedNumbers[1];
}

// 2. Create an interface `Student` with properties `name`, `age`, and `grades`
//  (array of numbers). Write a function that calculates the average grade of a student.

interface Student {
  name: string;
  age: number;
  grades: number[];

}

function averageGradeOfStudent(student: Student): number {
  const totalGradesSum = student.grades.reduce((acc, grade) => acc + grade, 0);
  return totalGradesSum / student.grades.length;
}

// 3. Write a function that accepts an array of numbers
//  and returns the sum of the even numbers.

function evenArrayNumbers(arr: number[]): number {
  const evenNumbers = arr.filter(a => a % 2 === 0);
  return evenNumbers.reduce((acc, num) => acc + num, 0)
}

// 4. Create an enum `Role` with `Admin`, `Editor`,
//  and `Viewer`. Write a function that checks if a user has admin privileges.

enum Role {
  Role2,
  Admin2,
  Editor2,
  Viewer2,
}

function checkAdminPrivileges(role: Role): boolean {
  return role === Role.Admin2
}


// 5. Write a function that accepts an array
//  of strings and returns the longest string.

function longestString(arr: string[]): string {
  return arr.reduce((current, longest) => current.length > longest.length ? current : longest, '');
}

// 6. Define an interface `Rectangle` with properties
//  `width` and `height`. Write a function that checks if the rectangle is a square.

interface Rectange {
  width: number;
  height: number;
}

function checkRectangeIfSquare(obj: Rectange): boolean {
  if (obj.width == obj.height) {
    return true
  } else return false
}

// 7. Write a function that filters out strings
//  that have more than 5 characters from an array.

function filterStrinsgFromArray(arr: string[]): string[] {
  return arr.filter(word => word.length >= 5);
}

// 8. Write a function that returns the index
//  of the first occurrence of a given value in an array.

function findIndex2<T>(value: T, arr: T[]): number {
  return arr.indexOf(value);
}

// 9. Create a function that accepts an array of
//  numbers and returns a new array with each number squared.

function eachNumberSquared(arr: number[]): number[] {
  return arr.map(a => Math.sqrt(a));
}

// 10. Define a type alias `Color` as a string
//  literal type `"red" | "green" | "blue"`.
//  Write a function that accepts a color and returns a message.

type Color2 = 'red' | 'green' | 'blue';

function acceptColor(color: Color2): string {
  return `Your color of choice is ${color}`
}

// 11. Write a function that finds the sum of the digits in a number.

function findTheSumOfDigits(num: number): number {
  return num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
}

// 12. Create an interface `Person` with `firstName`,
//  `lastName`, and `age`. Write a function that sorts
//  a list of people by age.

interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

function sortPeopleByAge2(people: Person[]): Person[] {
  return people.sort((a, b) => a.age - b.age);
}

// 13. Write a function that accepts an array
//  of numbers and returns the product of all the numbers.

function productOfAllNumbers(numbers: number[]): number {
  return numbers.reduce((acc, num) => acc * num, 1);
}

// 14. Write a function that checks if
//  a string is a valid email address.

function isValidEmail2(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// 15. Write a function that accepts
//  a string and returns it in reverse order.

function reversedString(woed: string): string {
  return woed.split('').reverse().join('');
}

// 16. Write a function that checks if a number is a perfect square.

function checkIfANumber(num: number): boolean {
  return Math.sqrt(num) % 1 === 0;
}

// 17. Create a function `getEvenNumbers` that accepts an
//  array of numbers and returns only the even numbers.

function getEvenNum(arr: number[]): number[] {
  return arr.filter(a => a % 2 === 0);
}

// 18. Write a function that checks if a given year is a leap year.



// 19. Create a function that accepts a number and returns its factorial.

// 20. Write a function that accepts two strings and returns
//  whether they are anagrams.

function anagramsCheck(string1: string, string2: string): boolean {
  return string1.split('').reverse().join('') === string2;
}

// 21. Create a function that removes all vowels from a given string.

function removeVowels2(word: string): string {
  const vowels = ['a', 'e', 'o', 'u', 'i'];

  for(let vol of vowels){
    word = word.replaceAll(vol, '');
  }

  return word
}

// 22. Write a function that removes all falsy values from an array.

function removeFalsyValues2(arr: string[]): string[] {
  return arr.filter(Boolean);
}

// 23. Write a function that accepts an array
//  of strings and returns the number of strings that start with a vowel.


function returnOnlyVovelsStrings(arr: string[]): number {
  const vowels = ['a', 'e', 'o', 'u', 'i'];
  return arr.filter(a => /^aoueiAOUEI/.test(a)).length();
}

// 24. Write a function that returns the average of an array of numbers.

function returnAverageOfArr(arr: number[]): number {
  return arr.reduce((acc, num) => acc + num) / arr.length;
}

// 25. Create a function `getMax` that returns the
//  largest number in an array of numbers.

function getMax2(arr: number[]): number {
  return Math.max(...arr);
}

// 26. Define a function that checks if a given object is
//  empty (has no properties).

function emptyObjectCheck(obj: object): boolean {
  return Object.keys(obj).length === 0;
}

// 27. Write a function that accepts an array
//  of strings and returns the string with the most characters.

function getLongestString2(arr: string[]): string {
  return arr.reduce((longest, current) => current.length > longest.length ? current: longest, '');
}

// 28. Create an enum `DayOfWeek` with all days of the week.
//  Write a function that returns a message based on the day.

enum DayOfWeek2 {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function (day: DayOfWeek2): string {
  switch(day){
    case DayOfWeek2.Monday: return 'Shit is fucked up!';
    case DayOfWeek2.Tuesday: return 'Shit is still fucked up';
    case DayOfWeek2.Wednesday: return 'Middle of the week';
    case DayOfWeek2.Thursday: return '4th day';
    case DayOfWeek2.Friday: return 'Best day';
    case DayOfWeek2.Saturday: return 'Relax and Dunday comming';
    case DayOfWeek2.Sunday: return "Tomorrow is Monday....";
  }
}


// 29. Write a function that accepts a string and
//  returns the string with no spaces.

function spacesRemove(str: string): string {
  return str.replace(/\s+/g, '');
}

// 30. Create a function that accepts an array of objects
//  and returns the object with the highest value for a given property.

function highestValueObject(arr: object[]): object {
  
}

// 31. Write a function that accepts two strings
//  and returns the longest common subsequence.

// 32. Create a function `isPalindrome` that checks if a given string is a palindrome, ignoring spaces and case.

// 33. Write a function that finds the difference between two arrays (elements in one but not the other).

function differenceArray(arr1: number[], arr2: number[]): number[] {
  return arr1.filter(item => !arr2.includes(item));
}


// 34. Write a function that accepts an array of numbers
//  and returns an array of those numbers multiplied by 10.

function multiplyByTen2(arr: number[]): number[] {
  return arr.map(num => num * 10);
}

// 35. Write a function that accepts a string and
//  returns the number of vowels in the string.

function countVowels2(word: string): number {
  return (word.match(/[aeiouAEIOU]/g) || []).length;
}

// 36. Create a function that accepts two arrays of
//  strings and returns an array with all unique strings from both arrays.

function mergeUniqueStrings2(arr1: string[], arr2: string[]): string[] {
  return [...new Set([...arr1, ...arr2])];
}

// 37. Write a function that returns the sum of an array
//  of objects' properties.

interface Item2 {
  price: number
}

function sumOfArr(obj: Item2[]): number {
  return obj.reduce((sum, item) => sum + item.price, 0);
}

// 38. Create a function `removeFalsyValues` that removes falsy
//  values (`null`, `undefined`, `false`, etc.) from an array.

function removeFalsyValues3(arr: any[]): any[] {
  return arr.filter(Boolean);
}

// 39. Write a function that reverses an array of numbers.

function reverseArray2(arr: number[]): number[] {
  return arr.reverse();
}

// 40. Write a function `findDuplicates` that returns
//  all duplicated elements from an array.

function findDuplicates2(arr: number[]): number[] {
  const seen2 = new Set();
  const duplicates2 = new Set();

  for (const num of arr) {
    if (seen2.has(num)) {
      duplicates2.add(num)
    } else {
      seen2.add(num)
    }
  }

  return [...duplicates2]

}

// 41. Create a function that returns the union of two
//  arrays (all unique elements from both arrays).

function uniqueElementsFromTwoArrays2(arr1: any[], arr2: any[]): any[] {
  return [new Set([...arr1, ...arr2])];
}

// 42. Write a function that accepts an array
//  of strings and returns only those strings that are in lowercase.

function returnOnlyVovelsStrings2(arr: string[]): string[] {
  return arr.filter(word => word === word.toLocaleLowerCase());
}

// 43. Create a function that accepts an array
//  of objects and returns an object with the most frequent value of a specific property.

// function findObjectWithMaxValue2(arr: object[]): object 
  


// 44. Write a function that finds the greatest common divisor (GCD) of two numbers.



// 45. Create a function that accepts an array and returns
//  an array of all the numbers that are divisible by 3.

function divisibleByThree2(arr: number[]): number[] {
  return arr.filter(num => num % 3 === 0);
}

// 46. Write a function that returns a random element from an array.

function randomElementOfArray<T>(arr: T[]): T {
  const randomIndex2 = Math.floor(Math.random() * arr.length);
  return arr[randomIndex2]
}


// 47. Define a function that accepts an array
//  of numbers and returns a new array with all the odd numbers removed.

function oddNumbersRemove(arr: number[]): number[] {
  return arr.filter(a => a % 2 === 0);
}

// 48. Write a function that finds the sum
//  of all prime numbers up to a given number.

// 49. Create a function that accepts a
//  string and returns the first non-repeating character.



// 50. Write a function that checks if an array
//  of numbers is sorted in ascending order.

function checkArray(arr: number[]): boolean {
  return arr.every((num, i) => i === 0 || num >= num[i - 1])
}

// 51. Write a function that removes the first element
//  from an array and returns the new array.

function removeFirstElement2<T>(arr: T[]): T[] {
  return arr.slice(1);
}

// 52. Create a function `getFirstNElements
// ` that returns the first `n` elements of an array.

function getFirstNElements2<T>(arr: T[], n: number): T[] {
  return arr.slice(0, n);
}

// 53. Write a function `deepClone` that creates a deep clone of an object (without references).

// 54. Write a function that accepts
//  a string and returns the number of words that are at least 5 characters long.

// 55. Write a function that finds
//  the intersection of two arrays (common elements).

// 56. Create a function that accepts
//  a string and returns a boolean indicating
//  if it's a valid URL.

// 57. Write a function `mergeArraysNoDuplicates`
//  that merges two arrays and removes any duplicate values.

// 58. Write a function that accepts
//  a number and returns the sum of all
//  its divisors (excluding the number itself).

// 59. Create a function that takes an object
//  and converts it into an array of key-value pairs.

// 60. Write a function that accepts a string
//  and returns the first word in the string.

// 61. Write a function that counts the number
//  of times a character appears in a string 
// (case insensitive).

// 62. Write a function that accepts an array
//  and returns the difference between the largest
//  and smallest numbers.

// 63. Create a function that checks if a number
//  is divisible by 2, 3, or both.

// 64. Write a function that accepts a string
//  and removes all digits from it.

// 65. Write a function that checks if an array
//  contains duplicates.

// 66. Create a function that takes a string and
//  replaces all spaces with underscores.

// 67. Write a function `sortByProperty` that
//  accepts an array of objects and sorts them by
//  a specified property.

// 68. Write a function that returns all unique
//  characters from a given string.

// 69. Write a function that accepts two arrays
//  and returns an array of elements that are present
//  in both arrays (intersection).

// 70. Write a function that checks if a number
//  is within a given range (inclusive).

// 71. Write a function that returns the last 
// element of an array without removing it.

// 72. Create a function that returns all the
//  prime numbers less than a given number.

// 73. Write a function that accepts a string
//  and returns it with all consonants removed.

// 74. Write a function that removes all numbers 
// greater than a certain value from an array.

// 75. Create a function that returns the nth
//  Fibonacci number.

// 76. Write a function that converts a string 
// into an array of words.

// 77. Create a function that accepts an array 
// of strings and returns a new array with each string reversed.

// 78. Write a function that accepts an array
//  of numbers and returns the sum of the odd numbers.

// 79. Write a function that checks if two strings are identical (case-sensitive).

// 80. Write a function that counts how many times a specific word appears in a paragraph.

// 81. Write a function that accepts a string and returns the number of words that are palindromes.

// 82. Write a function `filterByType` that accepts an array and a type, and returns only the elements of that type.

// 83. Write a function that checks if a string contains only alphabets.

// 84. Create a function that accepts a string and returns the string with every other character removed.

// 85. Write a function that returns the sum of the digits in a number, recursively.

// 86. Write a function that accepts a number and returns whether it's a Fibonacci number.

// 87. Write a function that accepts an object and returns the key with the highest value.

// 88. Write a function that returns the difference between two objects (properties that are in one object but not the other).

// 89. Write a function that filters out all numbers less than a given threshold from an array.

// 90. Write a function that returns the median of an array of numbers.

// 91. Create a function that takes a number and returns the next prime number after it.

// 92. Write a function that accepts a sentence and returns the longest word in it.

// 93. Write a function that removes the last element from an array and returns the new array.

// 94. Write a function that converts a string to title case (capitalizing the first letter of each word).

// 95. Write a function that accepts a number and returns whether it's a perfect number (equal to the sum of its proper divisors).

// 96. Write a function that checks if a string contains any digits.

// 97. Write a function that returns all the unique elements from two arrays combined.

// 98. Create a function that returns the square of each number in an array.

// 99. Write a function that accepts a string and returns whether it's a valid JSON string.

// 100. Write a function that accepts a number and returns the number of even divisors of that number.


//-----------------------------------

// // 30. Create a function that accepts an array of objects and returns the object with the highest value for a given property.
// function findObjectWithMaxValue<T>(arr: T[], property: keyof T): T | undefined {
//   return arr.reduce((max, current) => (current[property] > max[property] ? current : max), arr[0]);
// }

//-----------------------------------

// // 31. Write a function that accepts two strings and returns the longest common subsequence.
// function longestCommonSubsequence(str1: string, str2: string): string {
//   const matrix: string[][] = [];
//   for (let i = 0; i <= str1.length; i++) {
//     matrix[i] = [];
//     for (let j = 0; j <= str2.length; j++) {
//       if (i === 0 || j === 0) {
//         matrix[i][j] = '';
//       } else if (str1[i - 1] === str2[j - 1]) {
//         matrix[i][j] = matrix[i - 1][j - 1] + str1[i - 1];
//       } else {
//         matrix[i][j] = matrix[i - 1][j].length > matrix[i][j - 1].length ? matrix[i - 1][j] : matrix[i][j - 1];
//       }
//     }
//   }
//   return matrix[str1.length][str2.length];
// }


// 36. Create a function that accepts two arrays of strings and returns an array with all unique strings from both arrays.
function mergeUniqueStrings(arr1: string[], arr2: string[]): string[] {
  return [...new Set([...arr1, ...arr2])];
}

// 37. Write a function that returns the sum of an array of objects' properties.
interface Item {
  price: number;
}

function sumProperty(items: Item[]): number {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// 38. Create a function that removes all falsy values (`null`, `undefined`, `false`, etc.) from an array.
function removeFalsyValues(arr: any[]): any[] {
  return arr.filter(Boolean);
}

// 39. Write a function that reverses an array of numbers.
function reverseArray(numbers: number[]): number[] {
  return numbers.reverse();
}

// 40. Write a function `findDuplicates` that returns all duplicated elements from an array.
function findDuplicates(arr: number[]): number[] {
  const seen = new Set();
  const duplicates = new Set();
  for (const num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }
  return [...duplicates];
}

// 41. Create a function that returns the union of two arrays (all unique elements from both arrays).
function union(arr1: number[], arr2: number[]): number[] {
  return [...new Set([...arr1, ...arr2])];
}

// 42. Write a function that accepts an array of strings and returns only those strings that are in lowercase.
function filterLowerCase(strings: string[]): string[] {
  return strings.filter(str => str === str.toLowerCase());
}

// // 43. Create a function that accepts an array of objects and returns an object with the most frequent value of a specific property.
// function mostFrequentProperty<T>(arr: T[], prop: keyof T): T | undefined {
//   const frequencyMap: Record<string, number> = {};
//   arr.forEach(item => {
//     const key = item[prop] as unknown as string;
//     frequencyMap[key] = (frequencyMap[key] || 0) + 1;
//   });
//   const mostFrequentValue = Object.entries(frequencyMap).reduce(
//     (max, current) => (current[1] > max[1] ? current : max),
//     ["", 0]
//   );
//   return arr.find(item => item[prop] === mostFrequentValue[0]);
// }

// 44. Write a function that finds the greatest common divisor (GCD) of two numbers.
function greatestCommonDivisor(a: number, b: number): number {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

// 45. Create a function that accepts an array and returns an array of all the numbers that are divisible by 3.
function divisibleByThree(numbers: number[]): number[] {
  return numbers.filter(num => num % 3 === 0);
}

// 46. Write a function that returns a random element from an array.
function getRandomElement<T>(arr: T[]): T {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// 47. Define a function that accepts an array of numbers and returns a new array with all the odd numbers removed.
function removeOddNumbers(numbers: number[]): number[] {
  return numbers.filter(num => num % 2 === 0);
}

// 48. Write a function that finds the sum of all prime numbers up to a given number.
function sumPrimeNumbers(limit: number): number {
  let sum = 0;
  for (let num = 2; num <= limit; num++) {
    if (isPrime(num)) sum += num;
  }
  return sum;
}

// 49. Create a function that accepts a string and returns the first non-repeating character.
function firstNonRepeating(str: string): string | null {
  for (const char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
  return null;
}

// 50. Write a function that checks if an array of numbers is sorted in ascending order.
function isSorted(numbers: number[]): boolean {
  return numbers.every((num, i) => i === 0 || num >= numbers[i - 1]);
}

// 51. Write a function that removes the first element from an array and returns the new array.
function removeFirstElement<T>(arr: T[]): T[] {
  return arr.slice(1);
}

// 52. Create a function `getFirstNElements` that returns the first `n` elements of an array.
function getFirstNElements<T>(arr: T[], n: number): T[] {
  return arr.slice(0, n);
}

// 53. Write a function `deepClone` that creates a deep clone of an object (without references).
function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

// 54. Write a function that accepts a string and returns the number of words that are at least 5 characters long.
function countLongWords(str: string): number {
  return str.split(' ').filter(word => word.length >= 5).length;
}

// 55. Write a function that finds the intersection of two arrays (common elements).
function arrayIntersection<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.filter(item => arr2.includes(item));
}

// 56. Create a function that accepts a string and returns a boolean indicating if it's a valid URL.
function isValidURL(str: string): boolean {
  const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
  return regex.test(str);
}

// 57. Write a function `mergeArraysNoDuplicates` that merges two arrays and removes any duplicate values.
function mergeArraysNoDuplicates<T>(arr1: T[], arr2: T[]): T[] {
  return [...new Set([...arr1, ...arr2])];
}

// 58. Write a function that accepts a number and returns the sum of all its divisors (excluding the number itself).
function sumDivisors(num: number): number {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum;
}

// 59. Create a function that takes an object and converts it into an array of key-value pairs.
function objectToEntries<T>(obj: T): [string, any][] {
  return Object.entries(obj);
}

// 60. Write a function that accepts a string and returns the first word in the string.
function getFirstWord(str: string): string {
  return str.split(' ')[0];
}

// 61. Write a function that counts how many times a character appears in a string (case insensitive).
function countCharIgnoreCase(str: string, char: string): number {
  return str.toLowerCase().split(char.toLowerCase()).length - 1;
}

// 62. Write a function that accepts an array and returns the difference between the largest and smallest numbers.
function rangeOfNumbers(numbers: number[]): number {
  return Math.max(...numbers) - Math.min(...numbers);
}

// 63. Create a function that checks if a number is divisible by 2, 3, or both.
function divisibleBy2or3(num: number): boolean {
  return num % 2 === 0 || num % 3 === 0;
}

// 64. Write a function that accepts a string and removes all digits from it.
function removeDigits(str: string): string {
  return str.replace(/\d+/g, '');
}

// 65. Write a function that checks if an array contains duplicates.
function hasDuplicates(arr: any[]): boolean {
  return new Set(arr).size !== arr.length;
}

// 66. Create a function that takes a string and replaces all spaces with underscores.
function replaceSpacesWithUnderscore(str: string): string {
  return str.replace(/\s+/g, '_');
}

// 67. Write a function `sortByProperty` that accepts an array of objects and sorts them by a specified property.
function sortByProperty<T, K extends keyof T>(arr: T[], property: K): T[] {
  return arr.sort((a, b) => (a[property] > b[property] ? 1 : -1));
}

// 68. Write a function that returns all unique characters from a given string.
function uniqueCharacters(str: string): string {
  return [...new Set(str)].join('');
}

// 69. Write a function that accepts two arrays of strings and returns an array with all unique strings from both arrays (intersection).
function arrayIntersectionStrings(arr1: string[], arr2: string[]): string[] {
  return arr1.filter(item => arr2.includes(item));
}

// 70. Write a function that checks if two strings are identical (case-sensitive).
function areStringsIdentical(str1: string, str2: string): boolean {
  return str1 === str2;
}

// 71. Write a function that counts how many times a specific word appears in a paragraph.
function countWordOccurrences(paragraph: string, word: string): number {
  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  return (paragraph.match(regex) || []).length;
}

// 72. Write a function that returns the number of words that are palindromes.
function countPalindromeWords(str: string): number {
  return str.split(' ').filter(word => word === word.split('').reverse().join('')).length;
}

// 73. Create a function `filterByType` that accepts an array and a type, and returns only the elements of that type.
function filterByType<T>(arr: any[], type: string): T[] {
  return arr.filter(item => typeof item === type) as T[];
}

// 74. Write a function that checks if a string contains only alphabets.
function containsOnlyAlphabets(str: string): boolean {
  return /^[A-Za-z]+$/.test(str);
}

// 75. Create a function that accepts a string and returns the string with every other character removed.
function removeEveryOtherCharacter(str: string): string {
  return str.split('').filter((_, i) => i % 2 === 0).join('');
}

// 76. Write a function that returns the sum of the digits in a number, recursively.
function sumDigitsRecursively(num: number): number {
  if (num < 10) return num;
  return num % 10 + sumDigitsRecursively(Math.floor(num / 10));
}

// 77. Write a function that accepts a number and returns whether it's a Fibonacci number.
function isFibonacci(num: number): boolean {
  let a = 0, b = 1;
  while (b < num) {
    [a, b] = [b, a + b];
  }
  return b === num;
}

// 78. Write a function that accepts an object and returns the key with the highest value.
function keyWithMaxValue(obj: { [key: string]: number }): string {
  return Object.keys(obj).reduce((maxKey, currentKey) => 
    obj[currentKey] > obj[maxKey] ? currentKey : maxKey);
}

// 79. Write a function that filters out all numbers greater than a certain value from an array.
function filterNumbersGreaterThan(numbers: number[], threshold: number): number[] {
  return numbers.filter(num => num <= threshold);
}

// 80. Write a function that returns the median of an array of numbers.
function findMedian(numbers: number[]): number {
  const sorted = [...numbers].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[middle - 1] + sorted[middle]) / 2 : sorted[middle];
}

// 81. Create a function that takes a number and returns the next prime number after it.
function nextPrime(num: number): number {
  let n = num + 1;
  while (!isPrime(n)) {
    n++;
  }
  return n;
}

// 82. Write a function that accepts a sentence and returns the longest word in it.
function longestWord(sentence: string): string {
  return sentence.split(' ').reduce((longest, current) => current.length > longest.length ? current : longest, '');
}

// 83. Write a function that removes the last element from an array and returns the new array.
function removeLastElement<T>(arr: T[]): T[] {
  return arr.slice(0, arr.length - 1);
}

// 84. Write a function that converts a string into title case (capitalizing the first letter of each word).
function toTitleCase(str: string): string {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// 85. Write a function that accepts a number and returns whether it's a perfect number (equal to the sum of its proper divisors).
function isPerfectNumber(num: number): boolean {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
}

// 86. Write a function that checks if a string contains any digits.
function containsDigits(str: string): boolean {
  return /\d/.test(str);
}

// 87. Write a function that returns all the unique elements from two arrays combined.
function uniqueElementsFromTwoArrays<T>(arr1: T[], arr2: T[]): T[] {
  return [...new Set([...arr1, ...arr2])];
}

// 88. Create a function that returns the square of each number in an array.
function squareArray(numbers: number[]): number[] {
  return numbers.map(num => num * num);
}

// 89. Write a function that accepts a string and returns whether it's a valid JSON string.
function isValidJson(str: string): boolean {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}

// 90. Write a function that accepts a number and returns the number of even divisors of that number.
function countEvenDivisors(num: number): number {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0 && i % 2 === 0) count++;
  }
  return count;
}

// 91. Write a function that returns the nth Fibonacci number.
function fibonacci(n: number): number {
  let [a, b] = [0, 1];
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}

// 92. Write a function that checks if a number is divisible by 5 and 7.
function divisibleBy5and7(num: number): boolean {
  return num % 5 === 0 && num % 7 === 0;
}

// 93. Create a function that returns the number of vowels in a string.
function countVowelsInString(str: string): number {
  return (str.match(/[aeiouAEIOU]/g) || []).length;
}

// 94. Write a function that checks if a number is a perfect cube.
function isPerfectCube(num: number): boolean {
  return Math.cbrt(num) % 1 === 0;
}

// 95. Write a function that returns the intersection of two arrays.
function intersectArrays<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.filter(item => arr2.includes(item));
}

// 96. Create a function that accepts a string and returns its length without using `length` property.
function stringLength(str: string): number {
  return str.split('').reduce(count => count + 1, 0);
}

// 97. Write a function that accepts two numbers and returns their lowest common multiple (LCM).
function lowestCommonMultiple(a: number, b: number): number {
  function gcd(x: number, y: number): number {
    while (y !== 0) {
      [x, y] = [y, x % y];
    }
    return x;
  }
  return (a * b) / gcd(a, b);
}

// 98. Write a function that removes a specific element from an array and returns the new array.
function removeElementFromArray<T>(arr: T[], element: T): T[] {
  return arr.filter(item => item !== element);
}

// 99. Create a function that accepts an array and returns the average of all the numbers.
function averageArray(numbers: number[]): number {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

// 100. Write a function that accepts an array and returns the sum of the odd numbers in the array.
function sumOddNumbers(arr: number[]): number {
  return arr.filter(num => num % 2 !== 0).reduce((acc, num) => acc + num, 0);
}


