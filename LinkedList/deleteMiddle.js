const LinkedList = require('./linkedList');

var deleteMiddle = function(head) {
    let fast = head;
    let slow = head;
    let prev = null;

    while (fast && fast.next) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }

    if (prev)  {
        prev.next = slow.next;
    } else {
        head = prev;
    }
    
    return head;
};

function main() {
    const linkedList = new LinkedList(1);
    linkedList.addNode(3);
    linkedList.addNode(4);
    linkedList.addNode(7);
    linkedList.addNode(1);
    linkedList.addNode(2);
    linkedList.addNode(6);

    const linkedList2 = new LinkedList(1);
    linkedList2.addNode(2);
    linkedList2.addNode(3);
    linkedList2.addNode(4);

    const linkedList3 = new LinkedList(2);
    linkedList3.addNode(1);

    const linkedList4 = new LinkedList(1);

    linkedList.printLinkedList();
    deleteMiddle(linkedList.getHead());
    linkedList.printLinkedList();

    linkedList2.printLinkedList();
    deleteMiddle(linkedList2.getHead());
    linkedList2.printLinkedList();

    linkedList3.printLinkedList();
    deleteMiddle(linkedList3.getHead());
    linkedList3.printLinkedList();

    linkedList4.printLinkedList();
    deleteMiddle(linkedList4.getHead());
    linkedList4.printLinkedList();
}

main();