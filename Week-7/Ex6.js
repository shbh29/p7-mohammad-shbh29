// implement queue using stack
// TC: push: O(1) and pop O(n)
// SC: O(1)

const Stack = require("./SkeletonStack");

class Queue {
    constructor() {
        this.pushStack = new Stack();
        this.popStack = new Stack();
    }
    push(no) {
        this.pushStack.push(no);
        console.log(`pushed: ${no}`);
    }
    pop() {
        if(this.popStack.isEmpty()) {
            while(!this.pushStack.isEmpty()) {
                this.popStack.push(this.pushStack.pop());
            }
        }
        let no = this.popStack.pop();
        console.log(`poped: ${no}`);
        return no;
    }
}


let l = new Queue();

l.push(1);
l.push(2);
l.push(3);
l.pop();
l.push(4);
l.push(5);
l.pop();
l.push(6);
l.push(7);
l.pop();
l.push(8);
l.pop();
l.push(9);
l.pop();