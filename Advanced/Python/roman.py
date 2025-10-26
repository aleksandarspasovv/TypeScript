class Solution:
    def roman_function(self, s):
        list_of_roman_numerals = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
        }

        sum = 0
        n = len(s)
        i = 0
        while i < n:
            if i < n - 1 and list_of_roman_numerals[i]