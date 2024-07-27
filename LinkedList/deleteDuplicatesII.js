const LinkedList = require('./linkedList');
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
var deleteDuplicates = function(head) {
    if (!head) return null;

    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    let current = head;

    while (current) {
        if (current.next && current.val === current.next.val) {
            while (current.next && current.val === current.next.val) {
                current = current.next;
            }

            prev.next = current.next;
        } else {
            prev = prev.next;
        }

        current = current.next;
    }

    return dummy.next;
};

function main() {
    const linkedList = new LinkedList(1);
    linkedList.addNode(2);
    linkedList.addNode(3);
    linkedList.addNode(3);
    linkedList.addNode(4);
    linkedList.addNode(4);
    linkedList.addNode(5);

    linkedList.printLinkedList();
    LinkedList.printLinkedList(deleteDuplicates(linkedList.getHead()));

    const linkedList2 = new LinkedList(1);
    linkedList2.addNode(1);
    linkedList2.addNode(1);
    linkedList2.addNode(2);
    linkedList2.addNode(3);

    linkedList2.printLinkedList();
    LinkedList.printLinkedList(deleteDuplicates(linkedList2.getHead()));



}

main();