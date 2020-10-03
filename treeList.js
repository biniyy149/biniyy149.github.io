function docTree(node){
    if(node.children===null){
          console.log(node.name +": "+ node.value);
    }else{
        let nameValue = " ";
        console.log(node.name + ": " + node.value);
        for(let childNode of node.children){
            nameValue = docTree(childNode);
            
        }
        return nameValue;
    }
}

let node3 = {
    name: "p",
    value: "This is text in the a paragraph",
    children: null
   };
   let node4 = {
    name: "label",
    value: "Name",
    children: null
   };
   let node5 = {
    name: "input",
    value: "this was typed by a user",
    children: null
   };
   let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
   };
   let node1 = {
    name: "body",
    children: [node2, node3],
    value: null,
   };
console.log(docTree(node1));
//console.log(docTree(node2));
//console.log(docTree(node3));
//console.log(docTree(node4));
//console.log(docTree(node5));



