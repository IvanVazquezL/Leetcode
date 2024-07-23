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

var reverseList = function(head) {    
    let prev = null;
    let curr = head;

    while(curr) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    return prev;
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

    printLinkedList(one);
    printLinkedList(reverseList(one));
}

function printLinkedList(head) {
    let dummy = head;

    while (dummy.next) {
        process.stdout.write(`${dummy.val} -> `);
        dummy = dummy.next;
    }
    
    console.log(dummy.val);
}

main();

