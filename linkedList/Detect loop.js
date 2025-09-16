class Solution {
    // Function to check if the linked list has a loop.
    detectLoop(head) {
        // your code here
     if( head === null ) return false;
           
        let slow = head ;
        let fast = head ;
        
        while( slow !== null && fast !== null &&
            slow.next !== null && fast.next !== null )
        {
             slow = slow.next;
              fast = fast.next.next ;
              
              if( slow === fast ) return true;   
        }        
        return false;
    }
}