function groupBy(arr, key) {
    return arr.reduce(function (acc, item) {
        var keyValue = String(item[key]); // Convert key value to string
        if (!acc[keyValue]) {
            acc[keyValue] = [];
        }
        acc[keyValue].push(item);
        return acc;
    }, {});
}
// Test example
var data = [
    { category: 'fruit', name: 'apple' },
    { category: 'vegetable', name: 'carrot' },
    { category: 'fruit', name: 'banana' },
];
