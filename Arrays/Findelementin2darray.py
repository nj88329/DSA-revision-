
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        row = len(matrix)
        col = len(matrix[0])

        start = 0 
        end = row*col-1

        while start <= end:
            mid = (start + end)//2
            m = mid//col
            n = mid%col
        
            if matrix[m][n] == target:
                return True

            elif matrix[m][n] > target:
                 end = mid-1

            else:
                start = mid + 1

        return False     