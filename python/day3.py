# Given a string, find the length of the longest substring without repeating characters.

# Example 1:

#Input: "abcabcbb"
#Output: 3
# Explanation: The answer is "abc", with the length of 3.
# Example 2:

#Input: "bbbbb"
#Output: 1
# Explanation: The answer is "b", with the length of 1.
# Example 3:

#Input: "pwwkew"
#Output: 3
# Explanation: The answer is "wke", with the length of 3.
# Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        v_out = 0
        l_tmp = []
        for i in s:
            if i not in l_tmp:
                l_tmp.append(i)
                v_out = max([v_out, len(l_tmp)])
            else:
                l_tmp = l_tmp[l_tmp.index(i)+1:]
                l_tmp.append(i)
        return v_out
