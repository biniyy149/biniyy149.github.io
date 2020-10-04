{
class TreeNode {
    constructor(value) {
    this.value = value;
    this.descendents = [];
    }
   }
   // create nodes with values
   const abe = new TreeNode('Abe');
   const homer = new TreeNode('Homer');
   const bart = new TreeNode('Bart');
   const lisa = new TreeNode('Lisa');
   const maggie = new TreeNode('Maggie');
   // associate root with is descendents
   abe.descendents.push(homer);
   homer.descendents.push(bart, lisa, maggie);
function contains(node, target) {
    /* base case -- if children is null or empty */
    if (node.descendents === null) {
        if (node.value === target) {
            return node;
        } else {
            return false;
        }
    } else { //reductive recursion step
        let childResult = null;
        if (node.value === target){
            return node;
        } 
        for (let child of node.descendents) {
            childResult = contains(child, target);
            if (childResult === true) {
                return child;
            }
        }
        //return false; //did not find the target 
    }
}
console.log(contains(abe, "Abe"));
console.log(contains(homer, "Homer"));
//declaration context which is function call then spread operator
//function decleration in case of function parameter then rest operator
describe("contains", function(){

    it("returns the subtree if we found the target", function(){

        assert.deepEqual( contains(homer, "Homer"),  {
            value: 'Homer',
            descendents: [
               { value: 'Bart', descendents: [] },
               { value: 'Lisa', descendents: [] },
               { value: 'Maggie', descendents: [] }
            ] });

    });

    it("returns the subtree of the target", function(){

        assert.deepEqual( contains(abe, "Abe"),  {
            value: 'Abe',
            descendents: [{ value: 'Homer', 
            descendents: [
               { value: 'Bart', descendents: [] },
               { value: 'Lisa', descendents: [] },
               { value: 'Maggie', descendents: [] }] } 
        ] });

    });

    it("returns the node if no children", function(){

        assert.deepEqual( contains(bart, "Bart"),  {
            value: 'Bart', descendents: []}
        );
    });
    
    it("returns false if don't found target", function(){

        assert.deepEqual( contains(homer, "Bini"),
            undefined
        );
    });
    
});
}