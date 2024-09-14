class MyQueue {
    queue = [];

    push(x) {
        this.queue.push(x);
    }

    pop() {
        return this.queue.shift();
    }

    peek() {
        return this.queue[0];
    }

    empty() {
        return this.queue.length === 0;
    }
}