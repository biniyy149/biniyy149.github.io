class TreeNode {
    constructor(value) {
    this.value = value;
    this.next = null;
    }
   }
   // create nodes with values
   const abe = new TreeNode('Abe');
   const homer = new TreeNode('Homer');
   const bart = new TreeNode('Bart');
   const lisa = new TreeNode('Lisa');
   const maggie = new TreeNode('Maggie');
   // associate root with is descendents
   abe.next = homer;
   homer.next = bart;
   bart.next = lisa;
   lisa.next = maggie;
   maggie.next = null;
   console.log(homer.value);
   