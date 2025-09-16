// minimum Jump DP soln O(n2)
minJumps(arr) 
{
    // code here
    const n = arr.length;
    const memo = Array(n).fill(-1);
    
       function minJumReq (  arr , position  )
       {
           
           if( arr.length-1 <= position  )
             return 0;
             
             if( arr[position] === 0 ) return Infinity;
             
              if (memo[position] !== -1) return memo[position];
             
             
         let minimumStep = Infinity;
             
            
          for (let step = 1;  step <= arr[position] ; step++) {
            const ans = minJumReq(arr , position + step);
            minimumStep = Math.min(minimumStep, 1 + ans);
        }
             
        memo[position] = minimumStep;
        return minimumStep;
       }
       
       // return the ans as it is if it is not Infinity otherwise return -1
        const result = minJumReq(arr , 0);
    return result === Infinity ? -1 : result;
}