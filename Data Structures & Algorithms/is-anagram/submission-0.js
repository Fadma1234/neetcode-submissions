class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sorteds= s.split('').sort().join('');
         const sortedt= t.split('').sort().join('');
         return sorteds === sortedt;
    }
}
