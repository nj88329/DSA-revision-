find(arr, x)
{
    // code here    
    let firstOccurence = -1 ; let lastoccurence = -1;
    
    let ans = []
    for( let i = 0 ; i < arr.length ; i ++)
    {
        if( arr[i] === x ) 
           {
               if(firstOccurence === -1)
               {
                   firstOccurence = i;
                   lastoccurence = i ;
               }
               else
                 lastoccurence = i ;
           }
    }   
    ans.push(firstOccurence , lastoccurence)
    return ans;
}