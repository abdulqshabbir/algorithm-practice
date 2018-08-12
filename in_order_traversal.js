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

let BST = new BinarySearchTree();
BST.insertNode(10);
BST.insertNode(15);
BST.insertNode(5);
BST.insertNode(2);
BST.insertNode(3);
BST.insertNode(12);
BST.insertNode(17);

console.log('BST', BST); 

//          10
//       5       15
//     2


BinarySearchTree.prototype.inOrderTraversal = function(root) {
    if (root.left) {
        this.inOrderTraversal(root.left);
    }
    console.log(root.data); 

    if (root.right) {
        this.inOrderTraversal(root.right);
    }
    if (!root.right) {
        
    }
};

BST.inOrderTraversal(); 

//        40
//    32       78
// 10   25
