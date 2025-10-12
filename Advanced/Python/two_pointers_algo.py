class Solution:

    def twoSum(self, numbers, target):
        l = 0
        r = n - 1
        n = len(numbers)

        while l < r:
            summ = numbers[l] + numbers[r]

            if summ == target:
                return[l+1, r+1]
            elif summ < target:
                l += 1
            else:
                r -= 1

                