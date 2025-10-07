function countOccurences(arr) {
    var countMap = {};
    arr.forEach(function (item) {
        var key = String(item);
        countMap[key] = (countMap[key] || 0) + 1;
    });
    return countMap;
}
;
var numbers = [1, 2, 3, 4, 4, 4, 4, 4];
var result = countOccurences(numbers);
console.log(result);
