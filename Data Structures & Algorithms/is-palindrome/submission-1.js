class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // 1. Clean the string: remove non-alphanumeric characters and make lowercase
        const cleanedS = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

        // 2. Reverse the cleaned string
        const reverseS = cleanedS.split('').reverse().join('');

        // 3. Compare the cleaned string with its reversed counterpart
        return cleanedS === reverseS;
    }
}
