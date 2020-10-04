
   const maggie = {val:'Maggie',next:null};
   const lisa = {val:'Lisa',next:maggie};
   const bart = {val:'Bart',next:lisa};;
   const homer = {val:'Homer',next:bart};;
   const abe = {val:'Abe',next:homer};;
   function findNode(head,target){
    let currentNode = head;
    while(true){
        if (currentNode.val ===target){
            return currentNode;
        }else{
            if(currentNode.next===null){
                return null;
            }
            currentNode = currentNode.next;
        }
    }
    
    }
    console.log(findNode(abe,"Homer"));

   
   
   
   

