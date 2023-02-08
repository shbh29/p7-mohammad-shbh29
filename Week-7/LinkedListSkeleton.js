class MyNode {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    add(newData) {
        this.length++;
        if (this.head == null) { 
            this.head = new MyNode(newData, null);
            return
        }
        let n = this.head;
        while(n.next != null) { n = n.next; }
        n.next = new MyNode(newData, null);
    }
    print() {
        let n = this.head;
        let list = "";
        while(n != null) {
            list = `${list} ${n.data}`;
            n = n.next;
        }
        console.log(`list is:${list}`);
    }
}

module.exports = LinkedList;
