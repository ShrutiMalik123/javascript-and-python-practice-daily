# Given a 32-bit signed integer, reverse digits of an integer.

# Example 1:

#Input: 123
#Output: 321
# Example 2:

#Input: -123
#Output: -321
# Example 3:

#Input: 120
#Output: 21

class Solution:
    def reverse(self, x: int) -> int:
        f = 0
        if x < 0:
            f = 1
        if x == 0:
            return 0
        num = 0
        x = abs(x)
        while x:
            num = (x % 10) + num*10
            x //= 10
            if num >= (2**31):
                return 0

        return -num if f else num
