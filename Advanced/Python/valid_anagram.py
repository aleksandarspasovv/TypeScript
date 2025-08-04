class Solution:

    def valid_anagram(self, s: str, t: str) -> bool:
        counter_s = Counter(s)
        counter_t = Counter(t)

        return counter_s == counter_t