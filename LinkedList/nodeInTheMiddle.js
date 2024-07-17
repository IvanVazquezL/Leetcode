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

function main() {
    let one = new ListNode(1);
    let two = new ListNode(2);
    let three = new ListNode(3);
    let four = new ListNode(4);
    let five = new ListNode(5);

    addNode(one, two);
    addNode(two, three);
    addNode(three, four);
    addNode(four, five);

    console.log(nodeInTheMiddle(one))
}

function nodeInTheMiddle(head) {
    let dummy = head;
    let length = 0;

    while (dummy) {
        length++;
        dummy = dummy.next
    }

    const middlePosition = Math.floor(length/2);
    let position = 0;
    let middle = null;
    let dummyII = head;

    while (position < middlePosition) {
        position++;
        middle = dummyII.next;
        dummyII = dummyII.next;
    }

    return middle.val;
}

let getMiddle = head => {
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow.val;
}

main();