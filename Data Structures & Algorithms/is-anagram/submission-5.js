class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let sArr = s.split('').sort().join('');
        let tArr = t.split('').sort().join('');
        return sArr === tArr;
    }
}
