class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = prices[0];
        let max = 0;
        for(let price of prices){
            if(price < buy )buy = price;
            if(price - buy > max) max = price - buy;
        }
        return max;
    }
}
