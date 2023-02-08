
const LinkedList = require('./LinkedListSkeleton.js');

class LLCircular extends LinkedList {
    pointLastNodeTo(index){
        if (this.head == null && (index > this.length || index < 0) ) { return; }
        let lastNode = this.head;
        // traverse till last node
        while (lastNode?.next != null) { lastNode = lastNode.next; }
        // find the node with given data.
        let i = 0;
        let indexElement = this.head;
        while(i < index) { indexElement = indexElement.next; i++; }
        lastNode.next = indexElement;
    }
    isCircular() {
        // travel to last element based on 
        let i = 0;
        let lastNode = this.head;
        while(i < this.length) {
            i++;
            lastNode = lastNode.next;
        }
        // if last node is not null then Linked List is Circular.
        return lastNode?.next != null;
    }
    print() {
        if(this.isCircular()) { console.log(`Cannot print circular Linked List`); return; }
        super.print();
    }
}

let pointLastNodeTo = 1; //i th element
let ll = new LLCircular();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);

ll.print();
ll.pointLastNodeTo(pointLastNodeTo); // point to node with data 2 and index 1;

console.log(`Is this List Circular? : ${ll.isCircular()}`);
ll.print();




