const LinkedList = require('./linkedList');
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
var removeElements = function(head, val) {
    if (!head) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let current = head;
    let prev = dummy;

    while (current) {
        if (current.val === val) {
            prev.next = current.next;
        } else {
            prev = current;
        }
        current = current.next;
    }

    return dummy.next;
};

function main() {
    const linkedList = LinkedList.createLinkedListByArray([1,2,6,3,4,5,6]);
    LinkedList.printLinkedList(removeElements(
        linkedList.getHead(),
        6
    ));

    LinkedList.printLinkedList(removeElements(
        null,
        1
    ));

    const linkedList2 = LinkedList.createLinkedListByArray([7,7,7,7]);
    LinkedList.printLinkedList(removeElements(
        linkedList2,
        7
    ));
}

main();