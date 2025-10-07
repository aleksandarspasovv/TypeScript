function deepClone(obj) {
    if (obj === null || typeof obj !== 'object')
        return obj;
    if (Array.isArray(obj)) {
        return obj.map(function (item) { return deepClone(item); });
    }
    var cloneObj = {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = deepClone(obj[key]);
        }
    }
    return cloneObj;
}
var original = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        zip: '10001'
    },
    hobbies: ['reading', 'travelling']
};
var clone = deepClone(original);
clone.address.city = 'Los Angeles';
clone.hobbies.push('coding');
console.log(original.address.city); // Output: 'New York'
console.log(clone.address.city); // Output: 'Los Angeles'
console.log(original.hobbies); // Output: ['reading', 'travelling']
console.log(clone.hobbies); // Output: ['reading', 'travelling', 'coding']
