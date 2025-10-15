


function pluck<T, K extends keyof T>(arr: T[], key: K): T[K][]{
    return arr.map(item => item[key])
}


const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
];

console.log(pluck(users, 'name'))
console.log(pluck(users, 'age'))
