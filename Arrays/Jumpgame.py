
        for i,val in enumerate(nums):
            if farthest < i:
                return False
            
            farthest = max( farthest , i+val)
            
            if( farthest >= len(nums)-1):
                return True
        
        return True