    def findMinArrowShots(self, points: List[List[int]]) -> int:
        
        points.sort(key=lambda x:x[1])
        it = 0
        curr = float('-inf')
        ans = 0

        for left, right in points:
            if not (left <= curr <= right):
                ans += 1
                curr = right   # ✅ use current interval's right
        return ans
        
        
# burst ballon in total shots( count arrow required)