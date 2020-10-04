let node4 = {val:10,next:null};
let node3 = {val:1,next:node4};
let node2 = {val:109,next:node3};
let head = {val:1099,next:node2};

let nextNode = head.next;
//remove nod3
node2.next = node4;
//put node3 back in
node2.next = node3;
//find with value 109 strarting head
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
console.log(findNode(head,109));