class Solution:
    def findMin(self, n):
       # code here 
       
        count = 0
        denom = [1,2,5,10]
       
        for i in range(len(denom)-1 , -1, -1):
            
            
            while n >= denom[i]:
              n-=denom[i]
              count+=1
            
            
            if n == 0:
               break
            
            
        return count