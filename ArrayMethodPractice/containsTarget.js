
class ListNode {
    constructor(value,next) {
    this.value = value;
    this.next = next;
    }
   }
   const abe = new ListNode('Abe',Homer);
   const homer = new ListNode('Homer',Bart);
   const bart = new ListNode('Bart',Lisa);
   const lisa = new ListNode('Lisa',Maggie);
   const maggie = new ListNode('Maggie',null);
   function contains(node, target) {
    /* base case -- if children is null or empty */
    let found = false;
    while(node.value !== target && !found){
        if(node.value === target){
            return node;
            found = false;
        }else{
            return null;
        }
    }
    
    
    