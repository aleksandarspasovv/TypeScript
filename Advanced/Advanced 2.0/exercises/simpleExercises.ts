function doubleArray(arr: number[]): number[] {
    return arr.map(num => num * 2)
}

console.log(doubleArray([1, 2, 3, 4]));

function evenNumbers(arr: number[]): number[] {
    return arr.filter(num => num % 2 === 0)
}

console.log(evenNumbers([1, 3, 4, 5, 7]));


function removeDuplicates(arr: number[]): number[] {
    const unique = new Set<number>();
    arr.forEach(num => unique.add(num))
    unique.add()
    unique.has()
    unique.delete()
    unique.clear()
    unique.size()

}

function getAdultNames(users: {name: string, age: number}[]): string[] {
    return users 
        .filter(user => user.age >= 18)
        .map(user => user.name)
}

const users = [
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 19 },
];


function countWords(words: string[]): Map<string, number> {
    const wordCount = new Map<string, number>();

    for (const word of words) {
        if (wordCount.has(word)) {
            wordCount.set(word, (wordCount.get(word) || 0) + 1);
        } else {
            wordCount.set(word, 1);
        }
    }

    return wordCount;
}

// Test
const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
console.log(countWords(words));
