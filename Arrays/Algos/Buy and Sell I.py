class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        buy = prices[0]

        for i,val in enumerate(prices): 
            if val < buy:
                buy=val
            
            if val > buy:
                profit = max( profit , val-buy)
        return profit    