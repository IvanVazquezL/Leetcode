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

var middleNode = function(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow.val;
};

function main() {
    let one = new ListNode(1);
    let two = new ListNode(2);
    let three = new ListNode(3);
    let four = new ListNode(4);
    let five = new ListNode(5);
    let six = new ListNode(6);

    addNode(one, two);
    addNode(two, three);
    addNode(three, four);
    addNode(four, five);
    console.log(middleNode(one));

    addNode(five, six);
    console.log(middleNode(one));
}

main();