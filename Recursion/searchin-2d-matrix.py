def searchMatrix( matrix , target ):
  if not matrix or not matrix[0]:
    return False
  
  m,n = len(matrix), len(matrix[0])
  left, right = 0,m*n - 1 


  while left <= right :
     mid = (left + right) // 2
     row, col = divmod(mid , n)
     midval = matrix[row][col]

     if midval == target:
       return True
     elif midval < target:
       left = midval + 1
     else:
       right = midval - 1

  return False