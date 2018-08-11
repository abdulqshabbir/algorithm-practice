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
            //while currentNode exists

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
                    currentNode.right = node; 
                    break; 
                }
                else {
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


let firstNode = new BinarySearchTree();
firstNode.insertNode(6);

let secondNode = new BinarySearchTree();
firstNode.insertNode(4);

let thirdNode = new BinarySearchTree();
firstNode.insertNode(2);

console.log(firstNode);
console.log(secondNode);