perfectSum(arr, target) {
    // code here
    
       let n = arr.length ;


       // initialising the memoised array with value -1
  let memo = Array.from({ length : n+1 } , () => Array(target + 1).fill(-1) ) ;
    
   
   function targetSum( target , i )
   {
       // if current index has reached the element next to the last index.
       if( i === arr.length ) {
           

        //when index has reached last and sum is equal to zero. It should return 1 else 0
            if( target === 0 ) return 1;
           return 0;
           
       }
       
       
       //if subproblem is already calculated return value;
       if( memo[i][target] !== -1 ) return memo[i][target];
       
       
       let include = 0 ; 
       

       //if target >= current indexed element either include it or exclude it
       if( arr[i] <= target )
        include = targetSum( target - arr[i] , i+1 );
        
       // element excluded
       let  exclude = targetSum( target , i+1 );
        
       // storing the value in the memoised array
       memo[i][target] = include + exclude ;
       
       return memo[i][target];
   }
      
  return targetSum( target , 0 );
}