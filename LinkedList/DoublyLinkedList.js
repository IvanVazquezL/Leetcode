class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

let addToEnd = nodeToAdd => {
    nodeToAdd.next = tail;
    nodeToAdd.prev = tail.prev;
    tail.prev.next = nodeToAdd;
    tail.prev = nodeToAdd;
}

let removeFromEnd = () => {
    if (head.next == tail) {
        return;
    }

    let nodeToRemove = tail.prev;
    nodeToRemove.prev.next = tail;
    tail.prev = nodeToRemove.prev;
}

let addToStart = nodeToAdd => {
    nodeToAdd.prev = head;
    nodeToAdd.next = head.next;
    head.next.prev = nodeToAdd;
    head.next = nodeToAdd;
}

let removeFromStart = () => {
    if (head.next == tail) {
        return;
    }

    let nodeToRemove = head.next;
    nodeToRemove.next.prev = head;
    head.next = nodeToRemove.next;
}

let getSum = head => {
    let ans = 0;
    let dummy = head;
    while (dummy) {
        ans += dummy.val;
        dummy = dummy.next;
    }
    // same as before, but we still have a pointer at the head
    return ans;
}

function main() {
    const one = new ListNode(1);
    const two = new ListNode(2);
    const three = new ListNode(3);

    one.next = two;
    two.prev = one;
    two.next = three;
    three.prev = two;

    const head = one;

    console.log(getSum(head));
}

main();