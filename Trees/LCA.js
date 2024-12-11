lca(root, n1, n2) 
{
    // your code here
     function findLCA( root )
     {
         
        // Base case : If root is null || root is n1 or n2
         if( root === null || root.data === n1 || root.data === n2 ) return root;
         
         // check left subtree for the two node
         let left = findLCA( root.left ) ; 

         // now check right for the nodes
         let right = findLCA( root.right );
         
         // if both left and right are not null means one node is found in the left while other in the right
         if( left !== null && right !== null ) return root;
         
         // else return left if ;eft is not null
         else if( left !== null ) return left ;
         
         // else return right. ( In this case, nodes might be found in the right or not. )
         return right;
         
     }
    
  return findLCA( root ) ;

}