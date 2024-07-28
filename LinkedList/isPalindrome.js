const LinkedList = require('./linkedList');

var getMiddleAndLengthList = function(head) {
    let fast = head;
    let slow = head;
    let dummy = head;
    let length = 0;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    while (dummy) {
        dummy = dummy.next;
        length += 1;
    }

    return {
        middle: slow,
        length
    };
}

var reverseListFromMiddle = function(head) {
    let prev = null;
    let curr = head;

    while (curr) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    return prev;
}

var isPalindrome = function(head) {
    const {
        middle,
        length
    } = getMiddleAndLengthList(head);

    if (length === 1) return true;

    const reversedListHead = reverseListFromMiddle(middle);

    let firstHalfList = head;
    let secondHalfListReversed = reversedListHead;
    let counter = 0;

    while (counter < length / 2) {
        if (firstHalfList.val !== secondHalfListReversed.val) return false;
        firstHalfList = firstHalfList.next;
        secondHalfListReversed = secondHalfListReversed.next;
        counter++;
    }

    return true;
};

function main() {
    const linkedList = new LinkedList(1);
    linkedList.addNode(2);
    linkedList.addNode(2);
    linkedList.addNode(1);

    linkedList.printLinkedList();
    console.log(isPalindrome(linkedList.getHead()));

    const linkedList2 = new LinkedList(1);
    linkedList2.addNode(2);
    linkedList2.printLinkedList();
    console.log(isPalindrome(linkedList2.getHead()));

    const linkedList3 = new LinkedList(1);
    linkedList3.printLinkedList();
    console.log(isPalindrome(linkedList3.getHead()));

    const linkedList4 = new LinkedList(1);
    linkedList4.addNode(0);
    linkedList4.addNode(1);
    linkedList4.printLinkedList();
    console.log(isPalindrome(linkedList4.getHead()));



}

main();