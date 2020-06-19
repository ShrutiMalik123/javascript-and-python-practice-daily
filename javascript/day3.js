//Given a string, find the length of the longest substring without repeating characters.

//Example 1:

//Input: "abcabcbb"
//Output: 3
//Explanation: The answer is "abc", with the length of 3.
//Example 2:

//Input: "bbbbb"
//Output: 1
//Explanation: The answer is "b", with the length of 1.
//Example 3:

//Input: "pwwkew"
//Output: 3
//Explanation: The answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
var lengthOfLongestSubstring = function (s) {
  const map = new Map();
  let longest = 0;
  let start = 0;

  for (i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], i);
    } else {
      const val = map.get(s[i]);
      map.set(s[i], i);
      start = Math.max(start, val + 1);
    }
    longest = Math.max(longest, i + 1 - start);
  }
  return longest;
};
