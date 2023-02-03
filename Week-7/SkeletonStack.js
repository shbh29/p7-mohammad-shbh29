class Stack {
    constructor() {
        this.stack = [];
        this.top = -1;
    }
    push(element) {
        this.top++;
        this.stack.push(element);
    }
    pop() {
        if (this.isEmpty()) { console.log("stack under flow"); return;}
        this.top--;
        return this.stack.pop();
    }
    peek() {
        if (this.isEmpty()) { console.log("the Stack is empty"); return;}
        return this.stack[this.top];
    }
    isEmpty() {
        return this.top < 0;
    }
}

module.exports = Stack;