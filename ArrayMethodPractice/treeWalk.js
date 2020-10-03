/**
 * 
 * @param {objec} node 
 */
function printName(node){
    /*base case --if children is null*/
    if(node.children===null){
        console.log(node.name,":",node.value);
    }else{
        console.log(node.name,":",node.value);
        for(let child of node.children){
            printName(child);

        }
    }
}
console.log



function contains(node, target){
    if(node.children===null){
        if(node.name===target){
            return true;
        }else{
            return false;
        }
    }else{
        let childResult = false;
        if(node.name===target){
            return true;
        }
        for(let child of node.children){
            childResult = contains(child,target);
            if(childResult === true){
                return true;
            }

        }
        return childResult;
    }

}
console.log(contains(node1,"div"));
function TreeNode2(value){
    this.value = value;
    this.descendents = [];

}
console.log('new treenode is:',new TreeNode2(22));