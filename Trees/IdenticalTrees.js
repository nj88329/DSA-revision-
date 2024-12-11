isIdentical(r1, r2)
 {
    // function to check Identical Trees
       function checkIdentical( r1 , r2 )
       {
           
           if( r1 === null && r2 === null) return true;
             
            if( r1 === null || r2 === null ) return false;
            
            if( r1.data !== r2.data )
            {
                return false;
            }
           
        return checkIdentical( r1.left , r2.left ) &&  checkIdentical( r1.right , r2.right );
           
       }
 return  checkIdentical( r1 , r2 );
}