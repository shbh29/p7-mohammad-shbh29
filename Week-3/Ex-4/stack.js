function createStack() {
    let items = [];
    return {
        push(e) {
            return items.push(e);
        },
        pop() {
            return items.pop();
        },
        print() {
            console.log("stack values: ",items);
        }
    }
}

const stack = createStack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.print();

console.log("removed: ",stack.pop());
stack.print();

console.log("removed: ",stack.pop());
stack.print();

console.log("removed: ",stack.pop());
stack.print();

console.log("removed: ",stack.pop());
stack.print();

// items not accessible outside stack object
console.log(stack);
