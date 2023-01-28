// Rotate By given number
// SC : O(1)
// TC: O(n)
const LinkedList = require('./LinkedListSkeleton');

class LLRotate extends LinkedList {
    rotateLinkedList(rotateBy) {
        rotateBy = rotateBy % this.length;
        if (rotateBy > 0 && this.length > 0) {
            let i = 1;
            let newHead = this.head.next;
            let newTail = this.head
            while(i < rotateBy && newHead != null) {
                newTail = newHead;
                newHead = newHead.next;
                i++;
            }
            let currentTail;
            let n = this.head;
            while(n.next != null) {
                n = n.next;
            }
            currentTail = n;

            // perform rotate operations
            currentTail.next = this.head;
            this.head = newHead;
            newTail.next = null;
        } else {
            console.log("No rotate operations required!")
        }
    }
}

let ll = new LLRotate();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);

ll.print();
ll.rotateLinkedList(2);
ll.print();