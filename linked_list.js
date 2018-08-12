//----------------------CREATE A LINKED LIST ----------------------------//

function LinkedList() {
    this.head = {
        next: null,
    }
    this.length = 1;
}

function Node(value) {
    this.value = value;
    this.next = null; 
}

LinkedList.prototype.addToHead = function(value) {
    //create a new node and assign value
    newNode = new Node(value); 

    //store head in a temporary variable
    let tempHead = this.head; 

    if(tempHead.next === null) {
        //if head doesn't reference anything, reference the new node
        this.head.next = newNode;
        this.length++;
        console.log(tempHead.value);
        return; 
    }

    while(tempHead.next !== null) {
        //traverse the head pointer to next node 
        tempHead = tempHead.next; 
    }

    // set the next pointer of last node to point to the new node
    tempHead.next = newNode;
    this.length++; 
    console.log(tempHead.value);
}; 

let list = new LinkedList();  
list.addToHead('hi');
list.addToHead('hi again');

console.log(list);
