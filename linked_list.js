//----------------------Class: Create a Linked List ----------------------------//

function LinkedList() {
    this.head = null;
    this.length = 0;
}


//---------------------- Function: Add a node to the head ----------------------------//
LinkedList.prototype.addToHead = function(value) {
    //define a node to have a value and next pointer/reference
    const newNode = {
        value: value, 
        next: null
    };

    //make the next pointer of new node point towards where the head is currently pointing
    newNode.next = this.head; 

    //make the head point to the new node
    this.head = newNode;

    this.length++; 
    return this; 
};

//---------------------- Function: Add a Node to a Given Position ------------------------//
LinkedList.prototype.addNodeToGivenPosition = function(insertValue, insertPos) {
    //retrieve head pointer
    let head = this.head;  
    const newNode = {
        value: insertValue,
        next: null 
    };
    if(insertPos == 1) {//if inserting into first position
        this.addToHead(insertValue);
        return this; 
    } else if (insertPos == 2) {
        //set the next pointer of the new node to point to the same address as the 
        // next pointer of the first node
        newNode.next = this.head.next;
        this.head.next = newNode;
        this.length++; 
        return this; 
    } else if (insertPos > 2) {
        //traverse the linked list
        let nodeBeforeInsert = this.head;
        let index = 1;
        while(index < insertPos - 1) {
            nodeBeforeInsert = nodeBeforeInsert.next;
            index++; 
        }
        newNode.next = nodeBeforeInsert.next; 
        nodeBeforeInsert.next = newNode;
        this.length++; 
        return this; 
    }
};

//------------ Function: Reverse a linked list using an iterative method ------------------------//

LinkedList.prototype.reverse = function() {
    //use currentNode to iterate over list; Use prevNode and nextNode to keep track of adjacent nodes
    //Psuedo code; 
        /*
            1   set currNode to head 
            2   set prevNode to null
            3   set nextNode to current.next
            4   set currNode.next to prevNode
            5   set currNode to currNode.next
            6.  set prevNode to prevNode.next 
            7.  set currNode.next = preNode
        */
    let currentNode = this.head; 
    let prevNode = null;

    while(currentNode.next!== null) {
        let nextNode = currentNode.next; 
        currentNode.next = prevNode;
        prevNode = currentNode;  
        currrentNode = currentNode.next;
        //current.next and next both point to null at the end of the last iteration
    }
    this.head = currentNode.next; 
}; 

LinkedList.prototype.print = function() {
    let currentNode = this.head; 
    while(currentNode!== null) {
        console.log(currentNode.value);
        currentNode = currentNode.next; 
    }
    return this; 
}; 

list = new LinkedList(); 

list.addNodeToGivenPosition('first', 1);
list.addNodeToGivenPosition('second', 2);
list.addNodeToGivenPosition('third', 3);
list.addNodeToGivenPosition('fourth', 4);

list.reverse(); 
list.print(); 
