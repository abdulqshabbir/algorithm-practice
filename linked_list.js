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
    console.log(this); 
    return this; 
}; 