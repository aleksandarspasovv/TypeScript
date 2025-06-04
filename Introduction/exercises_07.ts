// 1. Create a type alias `Matrix` for a 2D array of numbers. Write a function `addMatrices` that accepts two matrices and returns their sum. Ensure that the matrices are of the same size.

// 2. Define a recursive function `flatten` that takes a nested array (array of arrays) and flattens it into a single array.

// 3. Write a function `deepClone` that accepts an object and returns a deep clone (including nested objects) using recursion.

// 4. Create a generic `mergeObjects` function that accepts two objects and merges them. Ensure that the properties from the second object overwrite those in the first object, and that no properties are lost.

// 5. Write a function that accepts a list of products (with properties `name`, `price`, `category`) and filters them based on a specified category. Then, sort the filtered products by price in descending order.

// 6. Implement a function `findLongestCommonSubstring` that accepts two strings and returns the longest common substring between them.

// 7. Write a function `deepCompare` that recursively compares two objects and returns `true` if they are deeply equal, including nested objects and arrays. If the objects are not equal, return `false`.

// 8. Create a `LazyPromise` class that wraps around a promise but does not execute it until a `.start()` method is called.

// 9. Implement a function `memoize` that accepts a function and returns a new function that caches the results of function calls. The cached results should be based on the arguments passed to the function.

// 10. Write a function `deepCloneArray` that recursively clones an array and its nested arrays, ensuring that the cloned arrays are not affected by mutations in the original arrays.

// 11. Write a function `deepEqualArrays` that compares two arrays for deep equality (including their nested elements). If the arrays are equal, return `true`; otherwise, return `false`.

// 12. Write a function `flattenObject` that takes an object with nested objects and flattens it into a single object with dot-separated keys. Example: `{ a: { b: { c: 1 } } }` becomes `{ 'a.b.c': 1 }`.

// 13. Create a type alias `Tree` that represents a binary tree, where each node has a `value` and optional left and right child nodes. Write a function to find the height of the tree.

// 14. Write a function `groupBy` that takes an array of objects and a property key, and groups the objects by the specified property. The result should be an object with keys corresponding to the values of the property.

// 15. Write a function `memoizeAsync` that works similarly to the `memoize` function, but for async functions. It should cache the results of async function calls based on their arguments.

// 16. Create a class `Person` that represents a person with properties `name` and `age`. Then, create a method `greet` that returns a greeting message. Write a subclass `Employee` that extends `Person` and adds a `salary` property and an overridden `greet` method.

// 17. Write a function `findMissingNumber` that accepts an array of numbers from 1 to `n` with one number missing, and returns the missing number. Assume the array contains no duplicates.

// 18. Implement a `debounce` function that limits the number of times a given function can be invoked in a certain period of time. The function should only be invoked once after the delay has passed since the last invocation.

// 19. Create a function `invertObject` that takes an object and inverts its keys and values. If the values are not unique, only one key-value pair should remain in the result object.

// 20. Write a function `combineArrays` that takes two arrays of objects and merges them based on a common property. If an object exists in both arrays, it should be updated rather than duplicated.

// 21. Implement a `Queue` class that follows the FIFO (first in, first out) principle. The class should have methods `enqueue`, `dequeue`, and `peek` to add, remove, and view the front element of the queue, respectively.

// 22. Write a function `findMode` that accepts an array of numbers and returns the number(s) that appear the most often. If there are multiple modes, return all of them in an array.

// 23. Create a function `deepFlatten` that takes a nested array (with arbitrary depth) and flattens it into a single array with all elements in order. Use recursion to flatten deeply nested arrays.

// 24. Write a function `countOccurrences` that counts how many times a given element appears in a nested array. The function should handle arrays that are deeply nested.

// 25. Create a `Stack` class that represents a stack data structure. Implement the methods `push`, `pop`, `peek`, and `isEmpty`.

// 26. Write a function `findDuplicates` that accepts an array of numbers and returns an array of all the elements that appear more than once, in the order of their first appearance.

// 27. Create a function `extractProperties` that accepts an array of objects and a list of property keys, and returns a new array of objects with only the specified properties.

// 28. Write a function `partition` that splits an array into two subarrays based on a predicate function. The first subarray should contain all elements that satisfy the predicate, and the second should contain the rest.

// 29. Create a function `flattenDeep` that recursively flattens a deeply nested array into a single-level array of elements, removing any nested structure. Use recursion to achieve this.

// 30. Implement a `Throttle` function that allows a function to be invoked at most once every `n` milliseconds, no matter how many times the function is triggered during that period.

// 31. Create a function `findIntersection` that takes two arrays and returns the intersection of the two, containing only the elements that are common to both arrays, without duplicates.

// 32. Write a function `replaceKeys` that accepts an object and a map of key replacements. The function should return a new object with the keys replaced according to the provided map.

// 33. Write a function `deepEqualObjects` that checks whether two objects are deeply equal, including any nested objects and arrays. If they are equal, return `true`; otherwise, return `false`.

// 34. Implement a `BinarySearchTree` class that supports inserting nodes and searching for a value in the tree. Each node should have a `left` and `right` child, as well as a `value` property.

// 35. Write a function `calculateAge` that accepts a birthdate string in the format "YYYY-MM-DD" and returns the person's age in years, assuming the current date is the reference date.

// 36. Create a function `mergeSort` that sorts an array using the merge sort algorithm. Use recursion to implement the sorting logic.

// 37. Implement a function `combineSortedArrays` that accepts two sorted arrays and merges them into a single sorted array without using `Array.prototype.sort()`.

// 38. Write a function `maxSubArraySum` that finds the maximum sum of a contiguous subarray within a given array of integers. Use Kadane's algorithm to solve this in linear time.

// 39. Implement a `LinkedList` class with methods for inserting nodes at the head, tail, and at a specific index. Also, implement a method to print the list.

// 40. Write a function `createPagination` that takes a list of items and divides them into pages of a specified size. It should return an object with `currentPage`, `totalPages`, and `items` for the current page.

// 41. Create a function `extractKeys` that extracts the values from an object based on a list of keys. The function should return a new object with only those properties.

// 42. Write a function `getFrequency` that accepts a string and returns an object that shows the frequency of each character in the string.

// 43. Create a `PriorityQueue` class where each element has a priority. Implement the `enqueue`, `dequeue`, and `peek` methods, ensuring that elements are dequeued in order of priority.

// 44. Write a function `flattenObjectWithPrefix` that flattens an object into a single object with dot-prefixed keys. The keys should be prefixed with the current parent key for nested objects.

// 45. Create a `Counter` class that tracks the count of a given number. The class should have methods to increment, decrement, and reset the counter value.

// 46. Write a function `filterByKey` that accepts an array of objects and a key, and returns an array of values corresponding to that key for each object.

// 47. Implement a function `sumOfDigits` that calculates the sum of digits of a number, but stops adding once it reaches a specified threshold value.

// 48. Create a function `compose` that takes two functions and returns a new function that is the composition of the two functions. The first function should be applied to the input, and the second function should be applied to the result of the first.

// 49. Write a function `invertCase` that accepts a string and returns a new string with all uppercase letters converted to lowercase and vice versa.

// 50. Implement a function `mergeSortedLists` that takes two sorted arrays and merges them into one sorted array while maintaining the order.

// 51. Write a function `checkBalancedBrackets` that accepts a string and returns `true` if the brackets are balanced (i.e., for every opening bracket, there is a corresponding closing bracket), and `false` otherwise.

// 52. Create a function `extractPropertiesFromArray` that accepts an array of objects and an array of property keys, and returns an array of objects containing only the specified properties.

// 53. Implement a function `flattenDeepArray` that recursively flattens an array of any depth into a single-level array, preserving the order of elements.

// 54. Write a function `findNthLargest` that accepts an array of numbers and returns the nth largest number, where `n` is provided as an argument.

// 55. Create a function `sumObjectValues` that accepts an object where the values are numbers, and returns the sum of those values.

// 56. Implement a function `findMatchingObjects` that accepts two arrays of objects and returns the objects that have the same value for a specified key.

// 57. Write a function `removeFalsyFromArray` that removes all falsy values (e.g., `false`, `null`, `undefined`, `NaN`, `0`, `""`) from an array.

// 58. Create a function `sumStringDigits` that accepts a string of digits and returns the sum of those digits.

// 59. Implement a function `replaceSubstring` that accepts a string, a target substring, and a replacement substring. It should return the string with all occurrences of the target substring replaced by the replacement substring.

// 60. Write a function `isPrimeNumber` that checks whether a number is prime.

// 61. Create a function `flattenJsonObject` that flattens a nested JSON object into a single object with dot notation keys.

// 62. Implement a function `getMaxProfit` that accepts an array of stock prices and returns the maximum profit that can be achieved by buying and selling the stock at different times.

// 63. Write a function `removeObjectKeys` that accepts an object and a list of keys, and returns a new object with those keys removed.

// 64. Create a function `countOccurrencesOfSubstring` that counts how many times a substring appears in a larger string, without overlapping occurrences.

// 65. Implement a function `isSubset` that checks if one array is a subset of another array, i.e., if all elements in the first array are present in the second array.

// 66. Write a function `findNthSmallest` that accepts an array of numbers and returns the nth smallest number, where `n` is provided as an argument.

// 67. Create a function `normalizeArray` that takes an array of numbers and normalizes it to have values between 0 and 1 based on the minimum and maximum values of the array.

// 68. Implement a function `convertToBase` that converts a number from base 10 to any other base (binary, octal, hexadecimal, etc.).

// 69. Write a function `createSlug` that converts a string into a URL-friendly slug, replacing spaces with dashes and making all letters lowercase.

// 70. Create a function `memoizeAsync` that memoizes an asynchronous function, storing results in a cache for repeated calls with the same arguments.

// 71. Implement a function `isValidHexColor` that checks whether a given string is a valid hexadecimal color code (e.g., "#ff5733").

// 72. Write a function `findCommonElements` that takes two arrays and returns an array of elements that are present in both arrays, without duplicates.

// 73. Create a function `sumDigitsUntilSingleDigit` that repeatedly sums the digits of a number until the result is a single digit.

// 74. Implement a function `replaceValueInArray` that accepts an array and replaces all occurrences of a specific value with a new value.

// 75. Write a function `sumArrayRange` that returns the sum of the numbers in an array between two specified indices, inclusive.

// 76. Create a function `isValidUUID` that checks if a given string is a valid UUID (Universally Unique Identifier).

// 77. Implement a function `shuffleArray` that randomly shuffles the elements of an array.

// 78. Write a function `deepCloneObject` that deep clones an object using recursion, handling nested arrays and objects.

// 79. Create a function `findModeOfArray` that finds the mode (most frequent value) of an array of numbers. If there are multiple modes, return an array with all of them.

// 80. Implement a function `capitalizeFirstLetterOfEachWord` that capitalizes the first letter of each word in a string, leaving the rest of the letters in lowercase.

// 81. Write a function `validatePhoneNumber` that checks if a given string is a valid phone number, accepting different formats (e.g., "(123) 456-7890" or "123-456-7890").

// 82. Create a function `reverseWordsInString` that reverses the order of words in a sentence but leaves the words themselves intact.

// 83. Implement a function `countOccurrencesOfWord` that counts how many times a specific word appears in a string, ignoring case.

// 84. Write a function `calculateSumOfMultiples` that calculates the sum of all multiples of a given number up to a limit.

// 85. Create a function `generateRange` that generates an array of numbers between two values, inclusive.

// 86. Implement a function `removeDuplicatesFromArray` that removes duplicate values from an array, preserving the order of the original elements.

// 87. Write a function `countNumberOfDigits` that counts the total number of digits in a number (ignoring negative signs and decimal points).

// 88. Create a function `filterByMinValue` that filters an array of numbers and returns a new array with values greater than or equal to a specified minimum value.

// 89. Implement a function `findPairsWithSum` that finds pairs of numbers in an array that add up to a given sum and returns them as an array of tuples.

// 90. Write a function `findDuplicateWords` that finds all the duplicate words in a given string, ignoring case and punctuation.

// 91. Create a function `combineObjectArrays` that merges two arrays of objects based on a common property, updating existing objects if the key is found in both arrays.

// 92. Implement a function `countCharacterOccurrences` that counts how many times each character appears in a string and returns the counts in an object.

// 93. Write a function `removeFalsyValuesFromObject` that removes all properties with falsy values (e.g., `null`, `undefined`, `0`, `""`, `false`) from an object.

// 94. Create a function `generatePassword` that generates a random password with specified length, including uppercase, lowercase, numbers, and symbols.

// 95. Implement a function `isSortedDescending` that checks if an array of numbers is sorted in descending order.

// 96. Write a function `convertToCamelCase` that converts a string with spaces or underscores into camel case.

// 97. Create a function `findLongestSubarrayWithSum` that finds the longest subarray in an array whose sum is less than or equal to a given value.

// 98. Implement a function `generateMultiplicationTable` that generates a multiplication table for a given number up to a specified limit.

// 99. Write a function `findArrayIntersection` that finds the intersection of two arrays (common elements) and returns it as a new array with no duplicates.

// 100. Create a function `countUppercaseLetters` that counts the number of uppercase letters in a string.



// 1. Create a type alias `Matrix` for a 2D array of numbers. Write a function `addMatrices` that accepts two matrices and returns their sum. Ensure that the matrices are of the same size.
type Matrix = number[][];
function addMatrices(matrix1: Matrix, matrix2: Matrix): Matrix {
  const rows = matrix1.length;
  const cols = matrix1[0].length;
  const result: Matrix = [];
  
  for (let i = 0; i < rows; i++) {
    result[i] = [];
    for (let j = 0; j < cols; j++) {
      result[i][j] = matrix1[i][j] + matrix2[i][j];
    }
  }
  return result;
}

// 2. Define a recursive function `flatten` that takes a nested array (array of arrays) and flattens it into a single array.
function flatten(arr: any[]): any[] {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

// 3. Write a function `deepClone` that accepts an object and returns a deep clone (including nested objects) using recursion.
function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') return obj;
  const clone: any = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

// 4. Create a generic `mergeObjects` function that accepts two objects and merges them. Ensure that the properties from the second object overwrite those in the first object, and that no properties are lost.
function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

// 5. Write a function that accepts a list of products (with properties `name`, `price`, `category`) and filters them based on a specified category. Then, sort the filtered products by price in descending order.
interface Product {
  name: string;
  price: number;
  category: string;
}

function filterAndSortProducts(products: Product[], category: string): Product[] {
  return products
    .filter(product => product.category === category)
    .sort((a, b) => b.price - a.price);
}

// 6. Implement a function `findLongestCommonSubstring` that accepts two strings and returns the longest common substring between them.
function findLongestCommonSubstring(str1: string, str2: string): string {
  let longest = '';
  const matrix: number[][] = Array(str1.length + 1).fill(0).map(() => Array(str2.length + 1).fill(0));

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
        if (matrix[i][j] > longest.length) {
          longest = str1.slice(i - matrix[i][j], i);
        }
      }
    }
  }

  return longest;
}

// 7. Write a function `deepCompare` that recursively compares two objects and returns `true` if they are deeply equal, including nested objects and arrays. If the objects are not equal, return `false`.
function deepCompare(obj1: any, obj2: any): boolean {
  if (obj1 === obj2) return true;
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;
  if (obj1 === null || obj2 === null) return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepCompare(obj1[key], obj2[key])) return false;
  }

  return true;
}

// 8. Create a `LazyPromise` class that wraps around a promise but does not execute it until a `.start()` method is called.
class LazyPromise<T> {
  private executor: () => T | Promise<T>;
  private promise: Promise<T> | null = null;

  constructor(executor: () => T | Promise<T>) {
    this.executor = executor;
  }

  start(): Promise<T> {
    if (!this.promise) {
      this.promise = new Promise(this.executor);
    }
    return this.promise;
  }
}

// 9. Implement a function `memoize` that accepts a function and returns a new function that caches the results of function calls. The cached results should be based on the arguments passed to the function.
function memoize<T extends (...args: any[]) => any>(func: T): T {
  const cache: Map<string, any> = new Map();
  return function (...args: any[]) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func(...args);
    cache.set(key, result);
    return result;
  } as T;
}

// 10. Write a function `deepCloneArray` that recursively clones an array and its nested arrays, ensuring that the cloned arrays are not affected by mutations in the original arrays.
function deepCloneArray<T>(arr: T[]): T[] {
  return arr.map(item => (Array.isArray(item) ? deepCloneArray(item) : item));
}

// 11. Write a function `deepEqualArrays` that compares two arrays for deep equality (including their nested elements). If the arrays are equal, return `true`; otherwise, return `false`.
function deepEqualArrays<T>(arr1: T[], arr2: T[]): boolean {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!deepEqualArrays(arr1[i], arr2[i])) return false;
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

// 12. Write a function `flattenObject` that takes an object with nested objects and flattens it into a single object with dot-separated keys. Example: `{ a: { b: { c: 1 } } }` becomes `{ 'a.b.c': 1 }`.
function flattenObject(obj: Record<string, any>, prefix: string = ''): Record<string, any> {
  let result: Record<string, any> = {};

  for (let key in obj) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      Object.assign(result, flattenObject(obj[key], newKey));
    } else {
      result[newKey] = obj[key];
    }
  }

  return result;
}

// 13. Create a type alias `Tree` that represents a binary tree, where each node has a `value` and optional left and right child nodes. Write a function to find the height of the tree.
type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

function treeHeight<T>(root: TreeNode<T> | null): number {
  if (!root) return 0;
  const leftHeight = treeHeight(root.left);
  const rightHeight = treeHeight(root.right);
  return Math.max(leftHeight, rightHeight) + 1;
}

// 14. Write a function `groupBy` that takes an array of objects and a property key, and groups the objects by the specified property. The result should be an object with keys corresponding to the values of the property.
function groupBy<T>(arr: T[], key: keyof T): Record<string, T[]> {
  return arr.reduce((result, item) => {
    const groupKey = String(item[key]);
    if (!result[groupKey]) result[groupKey] = [];
    result[groupKey].push(item);
    return result;
  }, {});
}

// 15. Write a function `memoizeAsync` that works similarly to the `memoize` function, but for async functions. It should cache the results of async function calls based on their arguments.
function memoizeAsync<T extends (...args: any[]) => Promise<any>>(func: T): T {
  const cache: Map<string, Promise<any>> = new Map();
  return function (...args: any[]) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const promise = func(...args);
    cache.set(key, promise);
    return promise;
  } as T;
}

// 16. Create a class `Person` that represents a person with properties `name` and `age`. Then, create a method `greet` that returns a greeting message. Write a subclass `Employee` that extends `Person` and adds a `salary` property and an overridden `greet` method.
class Person {
  constructor(public name: string, public age: number) {}
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Employee extends Person {
  constructor(name: string, age: number, public salary: number) {
    super(name, age);
  }
  greet() {
    return `${super.greet()} I am an employee, and my salary is ${this.salary}.`;
  }
}

// 17. Write a function `findMissingNumber` that accepts an array of numbers from 1 to `n` with one number missing, and returns the missing number. Assume the array contains no duplicates.
function findMissingNumber(arr: number[]): number {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

// 18. Implement a `debounce` function that limits the number of times a given function can be invoked in a certain period of time. The function should only be invoked once after the delay has passed since the last invocation.
function debounce(func: Function, delay: number): Function {
  let timeout: any;
  return function (...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

// 19. Create a function `invertObject` that takes an object and inverts its keys and values. If the values are not unique, only one key-value pair should remain in the result object.
function invertObject(obj: Record<string, string>): Record<string, string> {
  const inverted: Record<string, string> = {};
  for (const key in obj) {
    inverted[obj[key]] = key;
  }
  return inverted;
}

// 20. Write a function `combineSortedArrays` that takes two sorted arrays and merges them into one sorted array while maintaining the order.
function combineSortedArrays(arr1: number[], arr2: number[]): number[] {
  let result: number[] = [];
  let i = 0, j = 0;
  
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  
  return result.concat(arr1.slice(i), arr2.slice(j));
}

// 21. Write a function `isPalindrome` that checks if a given string is a palindrome.
function isPalindrome(str: string): boolean {
  const cleaned = str.replace(/\s+/g, '').toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
}

// 22. Write a function `findMissingNumber` that accepts an array of numbers from 1 to n with one number missing, and returns the missing number. Assume the array contains no duplicates.
function findMissingNumber(arr: number[]): number {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

// 23. Write a function `flattenArray` that flattens an array of arrays into a single array.
function flattenArray(arr: any[]): any[] {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
  }, []);
}

// 24. Create a `PriorityQueue` class where each element has a priority. Implement the `enqueue`, `dequeue`, and `peek` methods, ensuring that elements are dequeued in order of priority.
class PriorityQueue<T> {
  private queue: { value: T, priority: number }[] = [];

  enqueue(value: T, priority: number) {
    this.queue.push({ value, priority });
    this.queue.sort((a, b) => b.priority - a.priority);  // Sort by priority
  }

  dequeue(): T | undefined {
    return this.queue.shift()?.value;
  }

  peek(): T | undefined {
    return this.queue[0]?.value;
  }
}

// 25. Write a function `convertToBase` that converts a number from base 10 to any other base (binary, octal, hexadecimal, etc.).
function convertToBase(num: number, base: number): string {
  return num.toString(base);
}

// 26. Write a function `groupBy` that takes an array of objects and a property key, and groups the objects by the specified property. The result should be an object with keys corresponding to the values of the property.
function groupBy<T>(arr: T[], key: keyof T): Record<string, T[]> {
  return arr.reduce((result, item) => {
    const groupKey = String(item[key]);
    if (!result[groupKey]) result[groupKey] = [];
    result[groupKey].push(item);
    return result;
  }, {});
}

// 27. Create a function `combineSortedArrays` that merges two sorted arrays and returns a single sorted array.
function combineSortedArrays(arr1: number[], arr2: number[]): number[] {
  let result: number[] = [];
  let i = 0, j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  return result.concat(arr1.slice(i), arr2.slice(j));
}

// 28. Write a function `reverseString` that reverses the characters in a string.
function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

// 29. Write a function `sumOfDigits` that calculates the sum of digits of a number.
function sumOfDigits(num: number): number {
  return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}

// 30. Create a function `deepCloneObject` that deep clones an object using recursion, handling nested arrays and objects.
function deepCloneObject<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') return obj;
  const clone: any = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepCloneObject(obj[key]);
    }
  }
  return clone;
}

// 31. Write a function `findIntersection` that finds the intersection of two arrays (common elements) and returns it as a new array with no duplicates.
function findIntersection(arr1: number[], arr2: number[]): number[] {
  return [...new Set(arr1.filter(item => arr2.includes(item)))];
}

// 32. Write a function `removeDuplicatesFromArray` that removes duplicate values from an array, preserving the order of the original elements.
function removeDuplicatesFromArray<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

// 33. Implement a function `generatePassword` that generates a random password with a specified length, including uppercase, lowercase, numbers, and symbols.
function generatePassword(length: number): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

// 34. Write a function `sumOfMultiples` that calculates the sum of all multiples of a given number up to a limit.
function sumOfMultiples(limit: number, multiple: number): number {
  let sum = 0;
  for (let i = 0; i < limit; i++) {
    if (i % multiple === 0) sum += i;
  }
  return sum;
}

// 35. Create a function `isSortedDescending` that checks if an array of numbers is sorted in descending order.
function isSortedDescending(arr: number[]): boolean {
  return arr.every((val, i, arr) => i === 0 || val <= arr[i - 1]);
}

// 36. Write a function `convertToCamelCase` that converts a string with spaces or underscores into camel case.
function convertToCamelCase(str: string): string {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => 
      index === 0 ? match.toLowerCase() : match.toUpperCase())
    .replace(/\s+/g, '');
}

// 37. Create a function `findLongestSubarrayWithSum` that finds the longest subarray in an array whose sum is less than or equal to a given value.
function findLongestSubarrayWithSum(arr: number[], sum: number): number[] {
  let maxLength = 0;
  let currentSum = 0;
  let start = 0;
  let result: number[] = [];

  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end];
    
    while (currentSum > sum) {
      currentSum -= arr[start++];
    }

    if (end - start + 1 > maxLength) {
      maxLength = end - start + 1;
      result = arr.slice(start, end + 1);
    }
  }

  return result;
}

// 38. Implement a `LinkedList` class with methods for inserting nodes at the head, tail, and at a specific index. Also, implement a method to print the list.
class LinkedList<T> {
  private head: { value: T, next: any } | null = null;

  insertAtHead(value: T): void {
    const newNode = { value, next: this.head };
    this.head = newNode;
  }

  insertAtTail(value: T): void {
    const newNode = { value, next: null };
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  insertAtIndex(value: T, index: number): void {
    if (index === 0) {
      this.insertAtHead(value);
      return;
    }

    let current = this.head;
    let count = 0;

    while (current && count < index - 1) {
      current = current.next;
      count++;
    }

    if (!current) return;

    const newNode = { value, next: current.next };
    current.next = newNode;
  }

  printList(): void {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// 39. Write a function `createPagination` that takes a list of items and divides them into pages of a specified size. It should return an object with `currentPage`, `totalPages`, and `items` for the current page.
function createPagination<T>(items: T[], pageSize: number, currentPage: number): { currentPage: number, totalPages: number, items: T[] } {
  const totalPages = Math.ceil(items.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, items.length);
  const paginatedItems = items.slice(startIndex, endIndex);

  return { currentPage, totalPages, items: paginatedItems };
}

// 40. Create a function `extractKeys` that extracts the values from an object based on a list of keys. The function should return a new object with only those properties.
function extractKeys<T>(obj: T, keys: (keyof T)[]): Partial<T> {
  return keys.reduce((result, key) => {
    if (key in obj) {
      result[key] = obj[key];
    }
    return result;
  }, {} as Partial<T>);
}


// 41. Write a function `flattenJsonObject` that flattens a nested JSON object into a single object with dot notation keys.
function flattenJsonObject(obj: Record<string, any>, prefix: string = ''): Record<string, any> {
  let result: Record<string, any> = {};
  
  for (let key in obj) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      Object.assign(result, flattenJsonObject(obj[key], newKey));
    } else {
      result[newKey] = obj[key];
    }
  }

  return result;
}

// 42. Write a function `filterByKey` that accepts an array of objects and a key, and returns an array of values corresponding to that key for each object.
function filterByKey<T>(arr: T[], key: keyof T): any[] {
  return arr.map(item => item[key]);
}

// 43. Implement a function `sumDigitsUntilSingleDigit` that repeatedly sums the digits of a number until the result is a single digit.
function sumDigitsUntilSingleDigit(num: number): number {
  let sum = num;
  while (sum >= 10) {
    sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  }
  return sum;
}

// 44. Write a function `removeObjectKeys` that accepts an object and a list of keys, and returns a new object with those keys removed.
function removeObjectKeys<T>(obj: T, keys: (keyof T)[]): T {
  const newObj = { ...obj };
  keys.forEach(key => {
    delete newObj[key];
  });
  return newObj;
}

// 45. Create a function `findPairsWithSum` that finds pairs of numbers in an array that add up to a given sum and returns them as an array of tuples.
function findPairsWithSum(arr: number[], sum: number): [number, number][] {
  let pairs: [number, number][] = [];
  let seen: Set<number> = new Set();

  for (let num of arr) {
    const complement = sum - num;
    if (seen.has(complement)) {
      pairs.push([complement, num]);
    }
    seen.add(num);
  }

  return pairs;
}

// 46. Write a function `calculateAge` that accepts a birthdate string in the format "YYYY-MM-DD" and returns the person's age in years, assuming the current date is the reference date.
function calculateAge(birthdate: string): number {
  const birthDate = new Date(birthdate);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

// 47. Create a function `mergeSort` that sorts an array using the merge sort algorithm. Use recursion to implement the sorting logic.
function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  let result: number[] = [];
  let i = 0;
  let j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }

  return result.concat(left.slice(i), right.slice(j));
}

// 48. Implement a function `combineSortedArrays` that merges two sorted arrays and returns a single sorted array while maintaining the order.
function combineSortedArrays(arr1: number[], arr2: number[]): number[] {
  let result: number[] = [];
  let i = 0, j = 0;
  
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  
  return result.concat(arr1.slice(i), arr2.slice(j));
}

// 49. Write a function `createSlug` that converts a string into a URL-friendly slug, replacing spaces with dashes and making all letters lowercase.
function createSlug(str: string): string {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}

// 50. Create a function `memoizeAsync` that memoizes an asynchronous function, storing results in a cache for repeated calls with the same arguments.
function memoizeAsync<T extends (...args: any[]) => Promise<any>>(func: T): T {
  const cache: Map<string, Promise<any>> = new Map();
  return function (...args: any[]) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const promise = func(...args);
    cache.set(key, promise);
    return promise;
  } as T;
}

// 51. Write a function `isValidHexColor` that checks whether a given string is a valid hexadecimal color code (e.g., "#ff5733").
function isValidHexColor(str: string): boolean {
  const regex = /^#[0-9A-Fa-f]{6}$/;
  return regex.test(str);
}

// 52. Write a function `findCommonElements` that takes two arrays and returns an array of elements that are common to both arrays, without duplicates.
function findCommonElements(arr1: number[], arr2: number[]): number[] {
  return [...new Set(arr1.filter(item => arr2.includes(item)))];
}

// 53. Create a function `sumDigitsUntilSingleDigit` that repeatedly sums the digits of a number until the result is a single digit.
function sumDigitsUntilSingleDigit(num: number): number {
  let sum = num;
  while (sum >= 10) {
    sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  }
  return sum;
}

// 54. Implement a function `removeFalsyFromArray` that removes all falsy values (e.g., `false`, `null`, `undefined`, `NaN`, `0`, `""`) from an array.
function removeFalsyFromArray(arr: any[]): any[] {
  return arr.filter(Boolean);
}

// 55. Create a function `generateRandomString` that generates a random alphanumeric string of a specified length.
function generateRandomString(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// 56. Write a function `removeFalsyFromArray` that removes all falsy values (e.g., `false`, `null`, `undefined`, `NaN`, `0`, `""`) from an array.
function removeFalsyFromArray(arr: any[]): any[] {
  return arr.filter(Boolean);
}

// 57. Create a function `deepFlattenArray` that recursively flattens an array of any depth into a single-level array, preserving the order of elements.
function deepFlattenArray(arr: any[]): any[] {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten) ? deepFlattenArray(toFlatten) : toFlatten);
  }, []);
}

// 58. Write a function `countOddNumbers` that returns the count of odd numbers in an array.
function countOddNumbers(arr: number[]): number {
  return arr.filter(num => num % 2 !== 0).length;
}

// 59. Implement a `Queue` class that follows the FIFO (first in, first out) principle. The class should have methods `enqueue`, `dequeue`, and `peek` to add, remove, and view the front element of the queue, respectively.
class Queue<T> {
  private queue: T[] = [];
  
  enqueue(value: T): void {
    this.queue.push(value);
  }

  dequeue(): T | undefined {
    return this.queue.shift();
  }

  peek(): T | undefined {
    return this.queue[0];
  }
}

// 60. Write a function `findMaxSubArraySum` that finds the maximum sum of a contiguous subarray within a given array of integers. Use Kadane's algorithm to solve this in linear time.
function findMaxSubArraySum(arr: number[]): number {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  
  return maxSoFar;
}

// 61. Create a function `findMaxProfit` that accepts an array of stock prices and returns the maximum profit that can be achieved by buying and selling the stock at different times.
function findMaxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let maxProfit = 0;
  
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
  }
  
  return maxProfit;
}

// 62. Write a function `generateRange` that generates an array of numbers between two values, inclusive.
function generateRange(start: number, end: number): number[] {
  let range: number[] = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
}

// 63. Implement a function `removeFalsyFromArray` that removes all falsy values (e.g., `false`, `null`, `undefined`, `NaN`, `0`, `""`) from an array.
function removeFalsyFromArray(arr: any[]): any[] {
  return arr.filter(Boolean);
}

// 64. Write a function `countUppercaseLetters` that counts the number of uppercase letters in a string.
function countUppercaseLetters(str: string): number {
  return str.split('').filter(char => char === char.toUpperCase()).length;
}

// 65. Create a function `flattenArray` that flattens a nested array into a single array.
function flattenArray(arr: any[]): any[] {
  return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten), []);
}

// 66. Write a function `getFirstNElements` that returns the first `n` elements of an array.
function getFirstNElements<T>(arr: T[], n: number): T[] {
  return arr.slice(0, n);
}

// 67. Create a function `reverseWordsInString` that reverses the order of words in a sentence but leaves the words themselves intact.
function reverseWordsInString(str: string): string {
  return str.split(' ').reverse().join(' ');
}

// 68. Write a function `isSortedAscending` that checks if an array of numbers is sorted in ascending order.
function isSortedAscending(arr: number[]): boolean {
  return arr.every((val, i, arr) => i === 0 || val >= arr[i - 1]);
}

// 69. Create a function `getUniqueElements` that returns only the unique elements from an array.
function getUniqueElements<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

// 70. Write a function `calculateAge` that accepts a birthdate string in the format "YYYY-MM-DD" and returns the person's age in years, assuming the current date is the reference date.
function calculateAge(birthdate: string): number {
  const birthDate = new Date(birthdate);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

// 71. Write a function `generateRandomNumber` that generates a random number between a given range.
function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 72. Write a function `removeElement` that accepts an array and a value to remove. The function should return the array with all occurrences of that value removed.
function removeElement<T>(arr: T[], value: T): T[] {
  return arr.filter(item => item !== value);
}

// 73. Implement a function `removeDuplicates` that removes all duplicate values from an array, preserving the order of the original elements.
function removeDuplicates<T>(arr: T[]): T[] {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
}

// 74. Create a function `combineObjectArrays` that merges two arrays of objects based on a common property, updating existing objects if the key is found in both arrays.
function combineObjectArrays<T, K extends keyof T>(arr1: T[], arr2: T[], key: K): T[] {
  const result = [...arr1];

  arr2.forEach(item2 => {
    const index = result.findIndex(item1 => item1[key] === item2[key]);
    if (index >= 0) {
      result[index] = { ...result[index], ...item2 };
    } else {
      result.push(item2);
    }
  });

  return result;
}

// 75. Write a function `reverseArray` that reverses the elements of an array.
function reverseArray<T>(arr: T[]): T[] {
  return arr.reverse();
}

// 76. Implement a function `findCommonWords` that finds all the words that appear in both strings and returns them in an array.
function findCommonWords(str1: string, str2: string): string[] {
  const words1 = new Set(str1.split(' '));
  const words2 = str2.split(' ');
  return words2.filter(word => words1.has(word));
}

// 77. Write a function `calculateAverage` that calculates the average of an array of numbers.
function calculateAverage(numbers: number[]): number {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

// 78. Create a function `generateUniqueId` that generates a unique identifier string using `Date.now()` and a random number.
function generateUniqueId(): string {
  return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

// 79. Write a function `isAnagram` that checks if two strings are anagrams (ignoring spaces and case).
function isAnagram(str1: string, str2: string): boolean {
  const cleanStr1 = str1.replace(/\s+/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/\s+/g, '').toLowerCase();
  return cleanStr1.split('').sort().join('') === cleanStr2.split('').sort().join('');
}

// 80. Create a function `countOccurrences` that counts the number of occurrences of a value in an array.
function countOccurrences<T>(arr: T[], value: T): number {
  return arr.filter(item => item === value).length;
}


// 81. Write a function `isPrime` that checks if a number is prime.
function isPrime(num: number): boolean {
  if (num <= 1) return false;
  for (let i = 2; i < Math.sqrt(num) + 1; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 82. Create a function `removeFalsyFromObject` that removes all properties with falsy values (e.g., `null`, `undefined`, `0`, `""`, `false`) from an object.
function removeFalsyFromObject<T>(obj: T): T {
  const result: any = {};
  for (const key in obj) {
    if (obj[key]) result[key] = obj[key];
  }
  return result;
}

// 83. Implement a function `sumArray` that returns the sum of all numbers in an array.
function sumArray(arr: number[]): number {
  return arr.reduce((sum, num) => sum + num, 0);
}

// 84. Write a function `convertToBase` that converts a number from base 10 to any other base (binary, octal, hexadecimal, etc.).
function convertToBase(num: number, base: number): string {
  return num.toString(base);
}

// 85. Create a function `replaceString` that accepts a string and replaces a specified substring with another substring.
function replaceString(str: string, target: string, replacement: string): string {
  return str.split(target).join(replacement);
}

// 86. Write a function `removeFirstElement` that removes the first element from an array and returns the new array.
function removeFirstElement<T>(arr: T[]): T[] {
  return arr.slice(1);
}

// 87. Create a function `getKeys` that returns the keys of an object as an array.
function getKeys(obj: object): string[] {
  return Object.keys(obj);
}

// 88. Write a function `deepFlatten` that recursively flattens an array of any depth into a single-level array, preserving the order of elements.
function deepFlatten(arr: any[]): any[] {
  return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? deepFlatten(toFlatten) : toFlatten), []);
}

// 89. Write a function `combineArrays` that merges two arrays and removes any duplicate values, preserving the order.
function combineArrays<T>(arr1: T[], arr2: T[]): T[] {
  return [...new Set([...arr1, ...arr2])];
}

// 90. Create a function `getMax` that returns the largest number in an array of numbers.
function getMax(arr: number[]): number {
  return Math.max(...arr);
}

// 91. Write a function `isBalancedBrackets` that checks if the brackets in a string are balanced (i.e., for every opening bracket, there is a corresponding closing bracket).
function isBalancedBrackets(str: string): boolean {
  const stack: string[] = [];
  const map: Record<string, string> = { '(': ')', '{': '}', '[': ']' };
  
  for (let char of str) {
    if (map[char]) {
      stack.push(char);
    } else if (Object.values(map).includes(char)) {
      const last = stack.pop();
      if (map[last!] !== char) return false;
    }
  }
  
  return stack.length === 0;
}

// 92. Create a function `findDuplicateValues` that finds all duplicate values in an array.
function findDuplicateValues<T>(arr: T[]): T[] {
  const seen: Set<T> = new Set();
  const duplicates: T[] = [];
  
  for (const item of arr) {
    if (seen.has(item)) {
      duplicates.push(item);
    } else {
      seen.add(item);
    }
  }
  
  return duplicates;
}

// 93. Write a function `groupArray` that groups an array of objects based on a specified property.
function groupArray<T>(arr: T[], key: keyof T): Record<string, T[]> {
  return arr.reduce((result, item) => {
    const groupKey = String(item[key]);
    if (!result[groupKey]) result[groupKey] = [];
    result[groupKey].push(item);
    return result;
  }, {});
}

// 94. Implement a function `getMedian` that returns the median of an array of numbers.
function getMedian(arr: number[]): number {
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  
  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    return sorted[mid];
  }
}

// 95. Create a function `findMaxSum` that finds the maximum sum of any contiguous subarray in an array of numbers.
function findMaxSum(arr: number[]): number {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  
  return maxSoFar;
}

// 96. Write a function `removeVowels` that removes all vowels from a string.
function removeVowels(str: string): string {
  return str.replace(/[aeiouAEIOU]/g, '');
}

// 97. Create a function `flattenObject` that flattens a nested object into a single-level object with dot notation keys.
function flattenObject(obj: Record<string, any>, prefix: string = ''): Record<string, any> {
  let result: Record<string, any> = {};
  
  for (let key in obj) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      Object.assign(result, flattenObject(obj[key], newKey));
    } else {
      result[newKey] = obj[key];
    }
  }
  
  return result;
}

// 98. Write a function `removeFalsy` that removes falsy values from an array.
function removeFalsy(arr: any[]): any[] {
  return arr.filter(Boolean);
}

// 99. Implement a function `reverseString` that reverses the characters in a string.
function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

// 100. Create a function `sumNumbers` that returns the sum of all numbers in an array.
function sumNumbers(arr: number[]): number {
  return arr.reduce((sum, num) => sum + num, 0);
}
