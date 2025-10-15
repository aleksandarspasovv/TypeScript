function romanToInt(s) {
    var romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    var total = 0;
    for (var i = 0; i < s.length; i++) {
        var current = romanMap[s[i]];
        var next = romanMap[s[i + 1]];
        // Check if current is undefined (invalid character)
        if (current === undefined) {
            throw new Error("Invalid Roman numeral at position ".concat(i, ": ").concat(s[i]));
        }
        // If we are at the last character, just add its value to the total
        if (next === undefined) {
            total += current;
        }
        else if (current < next) {
            total -= current; // Subtract if current value is smaller than the next
        }
        else {
            total += current; // Add if current value is greater or equal to the next
        }
    }
    return total;
}
// Example usage:
console.log(romanToInt("III")); // 3
console.log(romanToInt("IV")); // 4
console.log(romanToInt("IX")); // 9
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
