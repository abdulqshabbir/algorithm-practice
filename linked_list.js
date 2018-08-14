//----------------------CREATE A LINKED LIST ----------------------------//

function LinkedList() {
    this.head = null;
    this.length = 0;
}

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
        this.head.next = newNode;
        return this; 
    } else if (insertPos > 2) {
        //traverse the linked list
        let currentNode = this.head;
        while(currentNode.next !== null) {
            currentNode = currentNode.next; 
        }
        //set last node's next pointer to reference the new node
        currentNode.next = newNode;
    }
};

list = new LinkedList(); 

list.addNodeToGivenPosition('first', 1);
list.addNodeToGivenPosition('second', 2);
list.addNodeToGivenPosition('third', 3);
list.addNodeToGivenPosition('fourth', 4);

console.log(list);
