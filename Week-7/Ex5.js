// Problem Next Greater Number

const Stack = require("./SkeletonStack");


class NextGreaterNumberStack extends Stack {
    constructor() {
        super();
    }
    getMaxFromStack(number) {
        let i = this.top;
        let max = -1;
        while(i >= 0) {
            if(this.stack[i] > number) {
                max = this.stack[i];
                break;
            }
            i--;
        }
        return max;
    }
    push(number) {
        if (this.peek() != number) {
            super.push(number);
        }
    }
}

function nextGreaterNumber(arr) {
    const stack = new NextGreaterNumberStack();
    let resArr = [];
    for (let i = arr.length -1; i >= 0; i--) {
        while(!stack.isEmpty() && stack.peek() < arr[i]) {
            stack.pop();                
        }
        resArr.unshift(stack.getMaxFromStack(arr[i]));
        stack.push(arr[i]);        
    }
    return resArr
}


let arr = [6,8,0,1,3];
// let arr = [1,1,2,1,1];
console.log(`Array ${arr} next greater number series is:  ${nextGreaterNumber(arr)}`);