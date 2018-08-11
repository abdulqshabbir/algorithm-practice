'use strict'

function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype.insertNode = function(val) {
    var node = {
        data: val, 
        left: null,
        right: null
    };

    var currentNode; 

    if(!this.root) {
        //set current node being inserted to be the root node
        this.root = node;
    }
    else {
        currentNode = this.root;
        while(currentNode) {
            //loop until node has been inserted

            if(val < currentNode.data) {
                if(!currentNode.left) {
                    //if left node on current node doesn't exist, crease it
                    currentNode.left = node;
                    break;
                }
                else {
                    // traverse the tree to the next node on the left
                    currentNode = currentNode.left; 
                }
            }
            else if (val > currentNode.data) {
                if(!currentNode.right) {
                    //if right node on current node desn't exist, create it
                    currentNode.right = node; 
                    break; 
                }
                else {
                    // traverse the tree to the next node on the right
                    currentNode = currentNode.right; 
                }
            }
            else {
                console.log('Provide UNIQUE VALUES'); 
                break; 
            }
        }
    }
};


let myShinyNewTree = new BinarySearchTree();
myShinyNewTree.insertNode(6);
myShinyNewTree.insertNode(4);
myShinyNewTree.insertNode(2);
myShinyNewTree.insertNode(7);
myShinyNewTree.insertNode(5);