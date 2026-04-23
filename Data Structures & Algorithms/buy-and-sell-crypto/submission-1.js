class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = Infinity;
        let maxProfit = 0;

        for (let i = 0; i < prices.length; i++) {
            // Track lowest price to buy
            if (prices[i] < minPrice) {
                minPrice = prices[i];
            }

            // Calculate profit if selling today
            const profit = prices[i] - minPrice;

            // Update best profit
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }

        return maxProfit;
    }
}