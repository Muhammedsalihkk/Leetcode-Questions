/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
let profit=0
for(i=0;i<prices.length;i++)
{
            if(prices[i]<prices[i+1])
            {
                profit+=prices[i+1]-prices[i]
            }
          
}
return profit
};