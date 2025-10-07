function countOccurences<T>(arr: T[]): Record<string, number> {
    const countMap: Record<string, number> = {};

    arr.forEach(item => {
        const key = String(item);
        countMap[key] = (countMap[key] || 0) +1;
    }); 

    return countMap;
}
;
const numbers = [1, 2, 3, 4, 4, 4, 4, 4];
const result = countOccurences(numbers);

