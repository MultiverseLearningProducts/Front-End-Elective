class Node {
    constructor() {
        // your code here!
  
  
  
        
    }
  }
  
  module.exports = { Node };
  
  
  
  
  
  
  
  
  /* create 3 instances of Node */
  const node1 = new Node('I am the first node!');
  const node2 = new Node('I\'m not quite first, I\'m the second.');
  const node3 = new Node('third 😃');
  
  /* associate the nodes to each other */
  /* node1<->node2<->node3 */
  node1.next = node2;
  node2.previous = node1;
  node2.next = node3;
  node3.previous = node2;
  
  /* verify they're connected via `next`! */
  /* we should see the "first", "second", and "third" logs in that order */
  console.log(node1.value);
  console.log(node1.next.value);
  console.log(node1.next.next.value);
  
  /* verify the connection via `previous` */
  /* we should see the same console logs as above */
  console.log(node3.previous.previous.value);
  console.log(node3.previous.value);
  console.log(node3.value);