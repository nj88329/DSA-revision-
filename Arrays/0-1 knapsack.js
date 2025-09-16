knapSack(capacity, val, wt) {
    // code here
   let n = wt.length ;
   
// initialise memoised array with i (row ) index and  changing value with column (index)
    let memoised = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(-1));

        function sumOfValue( capacity ,  i )
        {
            
// if capacity will be 0 or index will be equal to length of value; 
            if( capacity === 0 || i === val.length ) return 0;
            
            
    // return memoised value if already calculated
            if( memoised[i][capacity] !== -1 ) return memoised[i][capacity];
             
                let include  =  0 ; let exclude = 0 ; 

// include the value only if current wt is less than capacity                 
            if( capacity >= wt[i] )
                     include  = val[i] + sumOfValue( capacity - wt[i] , i + 1 );
                     
// exclude if current wt is greater
                 exclude = sumOfValue( capacity , i + 1 );
             
  // store max value in the memoised array
            memoised[i][capacity] = Math.max(  include , exclude );
            
            return memoised[i][capacity] ;
        }
     return  sumOfValue(capacity , 0 );
}