# Write a function to find the longest common prefix string amongst an array of strings.

# If there is no common prefix, return an empty string "".

# Example 1:

#Input: ["flower","flow","flight"]
#Output: "fl"
# Example 2:

#Input: ["dog","racecar","car"]
#Output: ""
# Explanation: There is no common prefix among the input strings.
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        prefix = ''
        if strs:
            maxlength = len(strs[0])
            index = maxlength
            while len(prefix) != index:
                for s in strs[1:]:
                    if not s.startswith(strs[0][:index]):
                        maxlength = index
                        index = maxlength // 2
                        break
                else:
                    prefix = strs[0][:index]
                    index = (index + maxlength) // 2
        return prefix
        