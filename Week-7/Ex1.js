// Linked List Reverse Problem
// TC: O(n)
// SC: O(1)

const LinkedList = require('./LinkedListSkeleton')

class LLReverse extends LinkedList{
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



let ll = new LLReverse();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.print();
ll.reverseList();
ll.print();
