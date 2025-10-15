function pluck(arr, key) {
    return arr.map(function (item) { return item[key]; });
}
var users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
];
console.log(pluck(users, 'name'));
console.log(pluck(users, 'age'));
