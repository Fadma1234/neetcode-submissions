class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanS=s.replace(/[^a-z0-9]/gi, '').toLowerCase();
        return cleanS===cleanS.split('').reverse().join('');
    }
}
