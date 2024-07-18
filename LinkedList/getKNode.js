class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let addNode = (prevNode, nodeToAdd) => {
    nodeToAdd.next = prevNode.next;
    prevNode.next = nodeToAdd;
}

var getKNode = function(slow, fast) {
    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow.val;
};

function main(k) {
    let one = new ListNode(1);
    let two = new ListNode(2);
    let three = new ListNode(3);
    let four = new ListNode(4);
    let five = new ListNode(5);

    addNode(one, two);
    addNode(two, three);
    addNode(three, four);
    addNode(four, five);

    const slow = one;
    let fast = one;
    let counter = 0;

    while (counter < k) {
        fast = fast.next;
        counter++;
    }

    console.log(getKNode(slow, fast));
}

main(3);