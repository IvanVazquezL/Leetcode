class Stack {
    constructor() {
        this.stack = [];
    }

    empty() {
        this.stack = [];
    }

    push(val) {
        this.stack.push(val);
    }

    pop() {
        return this.stack.pop();
    }

    size() {
        return this.stack.length;
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }
}

function main() {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    console.log(stack.size());

    stack.pop();
    stack.empty();

    console.log(stack.peek());
}

main();