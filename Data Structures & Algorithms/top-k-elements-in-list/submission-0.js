class Solution {
    topKFrequent(nums, k) {
        const count = {};

        // Count frequency
        for (let num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        // Sort by frequency and take top k
        return Object.keys(count)
            .sort((a, b) => count[b] - count[a])
            .slice(0, k)
            .map(Number);
    }
}
