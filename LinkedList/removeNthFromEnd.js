const LinkedList = require('./linkedList');

var removeNthFromEnd = function(head, n) {
    let fast = head;
    let slow = head;
    let counter = 0;
    let prev = null;

    while (counter < n) {
        fast = fast.next;
        counter++;
    }

    if (!fast) {
        return head.next;
    }

    while (fast) {
        prev = slow;
        slow = slow.next;
        fast = fast.next;
    }

    if (prev && slow) {
        prev.next = slow.next;
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
    removeNthFromEnd(linkedList.getHead(), 2);
    linkedList.printLinkedList();

    const linkedList3 = new LinkedList(1);
    linkedList3.addNode(2);
    linkedList3.printLinkedList();
    removeNthFromEnd(linkedList3.getHead(), 1);
    linkedList3.printLinkedList();

    const linkedList4 = new LinkedList(1);
    linkedList4.addNode(2);
    linkedList4.printLinkedList();
    removeNthFromEnd(linkedList4.getHead(), 2);
    linkedList4.printLinkedList();
    
    const linkedList2 = new LinkedList(1);
    linkedList2.printLinkedList();
    LinkedList.printLinkedList(removeNthFromEnd(linkedList2.getHead(), 1));
}

main();