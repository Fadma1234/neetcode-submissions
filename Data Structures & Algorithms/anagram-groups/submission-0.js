class Solution {
    groupAnagrams(strs) {
        const result = {};

        for (let i = 0; i < strs.length; i++) {
            const word = strs[i];
            const sorted = word.split('').sort().join('');

            if (!result[sorted]) {
                result[sorted] = [];
            }

            result[sorted].push(word);
        }

        return Object.values(result);
    }
}
