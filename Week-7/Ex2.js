// Rotate By given number
// SC : O(1)
// TC: O(n)
class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.cnt = 0;
    }
    add(newData) {
        this.cnt++;
        if (this.head==null) { this.head = new Node(newData, null); }
        else {
            let n = this.head;
            while(n.next != null) {
                n = n.next;
            }
            n.next = new Node(newData, null);
        }

    }
    rotateLinkedList(rotateBy) {
        rotateBy = rotateBy % this.cnt;
        if (rotateBy > 0 && this.cnt > 0) {
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
    printLinkedList() {
        console.log("list is: ");
        let n = this.head;
        while(n != null) {
            console.log(n.data);
            n=n.next;
        }
    }
}

let ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);

ll.printLinkedList();
ll.rotateLinkedList(5);
ll.printLinkedList();