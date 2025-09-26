class Solution:
    def maximumUnits(self, boxTypes: List[List[int]], truckSize: int) -> int:
        
        boxTypes.sort(key=lambda x:x[1], reverse = True)
        value = 0
        
        for left, right in boxTypes:

            if truckSize == 0:
                break
            
            if left <= truckSize:
                value += left*right
                truckSize -= left
            
            else:
                value += (truckSize*right)
                truckSize=0
            
        return value

        
