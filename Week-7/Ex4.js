// paranthesis match
//TC: O(n)
//SC: O(1)

const Stack = require('./SkeletonStack.js');

function matchParathesis(expression) {
    let stack = new Stack();
    let i = 0;
    while (i < expression.length) {
        let c;
        switch(c = expression.charAt(i)) {
            case '{':
            case '[':
            case '(':
                stack.push(c);
                break;
            case '}':
            case ']':
            case ')':
                if (matchBrackets(c)) {
                    stack.pop();
                } else {
                    return false;
                }
                break;
            default:
                break;
        }    
        i++;
    }
    function matchBrackets(closingBracket) {
        switch (closingBracket) {
            case '}':
                return stack.peek() == '{';
            case ']':
                return stack.peek() == '[';
            case ')':
                return stack.peek() == '(';
            default:
                console.log("invalid input!!");
        }
    }    

    return stack.isEmpty();
}


// let expression = "{[]}()({[]})";

let expression = "{[]}()"
// let expression = "{[]}()({[}])"
console.log(`paranthesis matching result for expression 
             ${expression} is ${matchParathesis(expression)}`)