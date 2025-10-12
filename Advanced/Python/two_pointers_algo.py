class Solution:

    def twoSum(self, numbers, target):     #Two Sum II -> cllassic amazaon question
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



# Two Pointer Algo -> Palindrome check the word RACECAR

def isPalindrome(string):
    n = len(string)
    l = 0
    r = n-1

    while l <= r:
        if string[l] == string[r]:
            l += 1
            r -= 1
        else:
            return False
    return True