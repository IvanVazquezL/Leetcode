const LinkedList = require('./linkedList');

var reverseList = function(head, length) {
    let prev = null;
    let curr = head;

    while (length > 0) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
        length--;
    }

    return prev;
}

var reverseEvenLengthGroups = function(head) {
    let current = head;
    let prevGroupEnd = null;
    let groupSize = 1;

    while (current) {
        let groupStart = current;
        let count = 0;
        let prev = null;

        while (count < groupSize && current) {
            prev = current;
            current = current.next;
            count++;
        }

        if (count % 2 === 0) {
            let reverseListHead = reverseList(groupStart, count);

            if (prevGroupEnd) {
                prevGroupEnd.next = reverseListHead;
            } else {
                head = reverseListHead;
            }

            prevGroupEnd = groupStart;
            groupStart.next = current;
        } else {
            prevGroupEnd = prev;
        }

        groupSize++;
    }

    return head;
};

function main() {
    const linkedList = new LinkedList(5);
    linkedList.addNode(2);
    linkedList.addNode(6);
    linkedList.addNode(3);
    linkedList.addNode(9);
    linkedList.addNode(1);
    linkedList.addNode(7);
    linkedList.addNode(3);
    linkedList.addNode(8);
    linkedList.addNode(4);

    linkedList.printLinkedList();
    LinkedList.printLinkedList(reverseEvenLengthGroups(linkedList.getHead()));
}

main();