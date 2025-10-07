function deepClone<T>(obj: T): T {
    if (obj === null || typeof obj !== 'object')
        return obj;

    if (Array.isArray(obj)){
        return obj.map(item => deepClone(item)) as unknown as T;
    }

    const cloneObj: Record<string, any> = {};
    for (const key in obj){
        if (obj.hasOwnProperty(key)){
            cloneObj[key] = deepClone(obj[key]);
        }
    }
    return cloneObj as T
}


const original = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        zip: '10001'
    },
    hobbies: ['reading', 'travelling']
};

const clone = deepClone(original);
clone.address.city = 'Los Angeles';
clone.hobbies.push('coding');

console.log(original.address.city);  // Output: 'New York'
console.log(clone.address.city);     // Output: 'Los Angeles'
console.log(original.hobbies);       // Output: ['reading', 'travelling']
console.log(clone.hobbies);          // Output: ['reading', 'travelling', 'coding']