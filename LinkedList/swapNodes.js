const LinkedList = require('./linkedList');

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var swapNodes = function(head, k) {
    let fast = head;
    let slow = head;
    let firstNode = null;
    let secondNode = null;
    let counter = 1;

    while (counter < k) {
        fast = fast.next;
        counter++;
    }

    firstNode = fast;

    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    secondNode = slow;

    if (firstNode && secondNode) {
        let temp = secondNode.val;
        secondNode.val = firstNode.val;
        firstNode.val = temp;
    }

    return head;
};

function main() {
    const linkedList = new LinkedList(1);
    linkedList.addNode(2);
    linkedList.addNode(3);
    linkedList.addNode(4);
    linkedList.addNode(5);

    linkedList.printLinkedList();
    LinkedList.printLinkedList(swapNodes(linkedList.getHead(), 2));

    const linkedList2 = new LinkedList(7);
    linkedList2.addNode(9);
    linkedList2.addNode(6);
    linkedList2.addNode(6);
    linkedList2.addNode(7);
    linkedList2.addNode(8);
    linkedList2.addNode(3);
    linkedList2.addNode(0);
    linkedList2.addNode(9);
    linkedList2.addNode(5);

    linkedList2.printLinkedList();
    LinkedList.printLinkedList(swapNodes(linkedList2.getHead(), 5));
}

main();