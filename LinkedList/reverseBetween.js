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

var reverseBetween = function(head, left, right) {
    if (left === right) return head;

    let dummy = new ListNode(0);  // Create a dummy node to handle edge cases more easily
    dummy.next = head;
    let prev = dummy;

    // Move `prev` to the node before the `left`th node
    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }

    // `start` will point to the `left`th node
    let start = prev.next;
    // `then` will point to the node after `start`
    let then = start.next;

    // Reverse the sublist from `left` to `right`
    for (let i = 0; i < right - left; i++) {
        start.next = then.next;
        then.next = prev.next;
        prev.next = then;
        then = start.next;
    }

    return dummy.next;
};


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

    printLinkedList(reverseBetween(one, 2, 4));

    let six = new ListNode(3);
    let seven = new ListNode(5);

    addNode(six, seven);

    printLinkedList(reverseBetween(six, 1, 2));
    
}

main();

function printLinkedList(head) {
    let dummy = head;

    while (dummy.next) {
        process.stdout.write(`${dummy.val} -> `);
        dummy = dummy.next;
    }
    
    console.log(dummy.val);
}
