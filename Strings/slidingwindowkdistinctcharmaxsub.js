class Solution:
    def longestKSubstr(self, s, k):
        # code here
        char_map = {}
        left = 0 
        
        max_len = -1
        
        for right in range(len(s)):
            
            ch = s[right]
            
            if ch not in char_map and len(char_map) == k:
                
                while len(char_map) >= k :
                    char_map[s[left]]-=1
                    
                    if char_map[s[left]] == 0:
                        del char_map[s[left]]
                        
                        
                    left+=1
                    
            
            char_map[ch]=char_map.get(ch,0)+1
                
            if len(char_map) == k:
                max_len = max(max_len , right-left+1)
                
          
        return max_len
            
            
            