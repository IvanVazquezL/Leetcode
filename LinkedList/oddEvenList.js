const LinkedList = require('./linkedList');

var oddEvenList = function(head) {
    if (!head || !head.next) {
        return head;
    }

    let odd = head;
    let even = head.next;
    let evenHead = even;

    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }

    odd.next = evenHead;
    return head;
};

function main() {
    const linkedList = LinkedList.createLinkedListByArray([1,2,3,4,5]);
    LinkedList.printLinkedList(oddEvenList(linkedList.getHead()));

}

main();