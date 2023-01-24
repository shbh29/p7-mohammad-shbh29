// Linked List Reverse Problem
// TC: O(n)
// SC: O(1)
class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
    }
    addNode(newData) {
        if (this.head == null) { 
            this.head = new Node(newData, null); 
            return;
        }
        let n = this.head;
        while (n.next != null) { n = n.next };
        let newNode = new Node(newData, null);
        n.next = newNode;
    }
    printLinkedList() {
        let n = this.head;
        console.log("Linked List Elements are: ");
        while (n != null) {
            console.log(n.data, " ");
            n = n.next;
        }
    }
    reverseList() {
        if(this.head == null || this.head.next == null) {return;}
        let arr = [];
        let n = this.head;
        while( n != null) {
            arr.push(n);
            n = n.next;
        }
        this.head = arr.pop();
        n = this.head;
        while(arr.length > 0) {
            n.next = arr.pop();
            n = n.next;
        }
        n.next = null;
    }
}



let ll = new LinkedList();
ll.addNode(1);
ll.addNode(2);
ll.addNode(3);
ll.addNode(4);
ll.printLinkedList();
ll.reverseList();
ll.printLinkedList();
