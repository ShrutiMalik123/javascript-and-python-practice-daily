//You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

//You may assume the two numbers do not contain any leading zero, except the number 0 itself.

//Example:

//Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
//Output: 7 -> 0 -> 8
//Explanation: 342 + 465 = 807.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let resultLN = new ListNode();
  let temp = resultLN;

  while (l1 || l2 || carry) {
    let l1_value = 0;
    let l2_value = 0;

    if (l1) l1_value = l1.val;
    if (l2) l2_value = l2.val;

    let result = l1_value + l2_value + carry;

    if (result > 9) {
      carry = 1;
    } else {
      carry = 0;
    }

    if (carry) {
      temp.val = result - 10;
    } else {
      temp.val = result;
    }

    if (carry || l1?.next || l2?.next) {
      temp.next = new ListNode();
      temp = temp.next;
      temp.next = null;
    }

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return resultLN;
};
