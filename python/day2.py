# You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

# You may assume the two numbers do not contain any leading zero, except the number 0 itself.

# Example:

# Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
# Output: 7 -> 0 -> 8
# Explanation: 342 + 465 = 807.
class ListNode:
     def __init__(self, val=0, next=None):
         self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        head = None
        current = None
        summa = 0
        carry = 0
        while l1 or l2:
            if l1 and l2:
                summa = carry + l1.val + l2.val
                l1 = l1.next
                l2 = l2.next
            elif l1 and not l2:
                summa = carry + l1.val
                l1 = l1.next
            elif not l1 and l2:
                summa = carry + l2.val
                l2 = l2.next
            carry = summa // 10
            if head is None:
                head = ListNode(summa % 10)
                current = head
            else:
                current.next = ListNode(summa % 10)
                current = current.next
        if carry > 0:
            current.next = ListNode(carry)
        return head
