// leetcode.com/problems/palindrome-number/description/

/** 
Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
**/

https: function isPalindrome(x: number): any {
  // Negative numbers or numbers ending in 0 (except 0 itself) cannot be palindromes
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let original = x;
  let reversed = 0;

  // Reverse the number
  while (original > 0) {
    const lastDigit = original % 10; // Extract the last digit of original
    reversed = reversed * 10 + lastDigit; // Add the extracted digit to the reversed number, shifting existing digits in reversed one place to the left.
    original = Math.floor(original / 10); // Remove the last digit from original by dividing it by 10 and truncating the decimal part.
  }

  return x === reversed;
}
