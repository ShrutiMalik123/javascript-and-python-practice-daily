//Write a function to find the longest common prefix string amongst an array of strings.

//If there is no common prefix, return an empty string "".

//Example 1:

//Input: ["flower","flow","flight"]
//Output: "fl"
//Example 2:

//Input: ["dog","racecar","car"]
//Output: ""
//Explanation: There is no common prefix among the input strings.
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  const sorted = strs.sort((a, b) => a.length - b.length);
  const smallest = sorted[0];

  for (let i = smallest.length; i >= 0; i--) {
    if (sorted.every((e) => e.substring(0, i) === smallest.substring(0, i))) {
      return smallest.substring(0, i);
    }
  }
  return "";
};
