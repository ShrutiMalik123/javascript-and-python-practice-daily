//Given a 32-bit signed integer, reverse digits of an integer.

//Example 1:

//Input: 123
//Output: 321
//Example 2:

//Input: -123
//Output: -321
//Example 3:

//Input: 120
//Output: 21
var reverse = function (x) {
  // Turn input into String, then reverse
  let rev = x.toString().split("").reverse().join("");

  // Turn back to number, add sign
  rev = parseInt(rev) * Math.sign(x);

  // check if result in the range
  return rev > 2 ** 31 - 1 || rev < -(2 ** 31) ? 0 : rev;
};
