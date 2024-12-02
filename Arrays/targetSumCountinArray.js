perfectSum(arr, target) {
    // code here
    
       let n = arr.length ;

  let memo = Array.from({ length : n+1 } , () => Array(target + 1).fill(-1) ) ;
    
   
   function targetSum( target , i )
   {
       
       
   
           
       if( i === arr.length ) {
           
            if( target === 0 ) return 1;
           return 0;
           
       }
       
       
       
       if( memo[i][target] !== -1 ) return memo[i][target];
       
       
       let include = 0 ; 
       
       if( arr[i] <= target )
        include = targetSum( target - arr[i] , i+1 );
        
       let  exclude = targetSum( target , i+1 );
        
       memo[i][target] = include + exclude ;
       
       return memo[i][target];
   }
      
  return targetSum( target , 0 );
}