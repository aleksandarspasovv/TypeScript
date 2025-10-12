function countBy<T>(arr: T[], key: keyof T): Record<string, number> {
    return arr.reduce((acc, item) => {
        const keyValue = String(item[key]);
        acc[keyValue] = (acc[keyValue] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);
}

// Test
const items = [
    { type: 'fruit', name: 'apple' },
    { type: 'vegetable', name: 'carrot' },
    { type: 'fruit', name: 'banana' },
    { type: 'fruit', name: 'orange' },
    { type: 'vegetable', name: 'broccoli' },
];

console.log(countBy(items, 'type'));
// Output: { fruit: 3, vegetable: 2 }
