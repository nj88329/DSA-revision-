lca(root, n1, n2) 
{
    // your code here
    
    
     function findLCA( root )
     {
         
         if( root === null || root.data === n1 || root.data === n2 ) return root;
         
         let left = findLCA( root.left ) ; 
         
         let right = findLCA( root.right );
         
         
         if( left !== null && right !== null ) return root;
         
         
         else if( left !== null ) return left ;
         
         return right;
         
     }
    
  return findLCA( root ) ;

}