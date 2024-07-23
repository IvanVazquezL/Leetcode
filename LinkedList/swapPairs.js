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

var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }

    let dummy = head.next;
    let prev = null;

    while (head && head.next) {
        if (prev) {
            prev.next = head.next;
        }
        
        prev = head;

        let nextNode = head.next.next;
        head.next.next = head;

        head.next = nextNode;
        head = nextNode;
    }

    return dummy;
};

function printLinkedList(head) {
    let dummy = head;

    while (dummy.next) {
        process.stdout.write(`${dummy.val} -> `);
        dummy = dummy.next;
    }
    
    console.log(dummy.val);
}

function main() {
    let one = new ListNode(1);
    let two = new ListNode(2);
    let three = new ListNode(3);
    let four = new ListNode(4);
    let five = new ListNode(5);
    let six = new ListNode(6);

    addNode(one, two);
    addNode(two, three);
    addNode(three, four);
    addNode(four, five);
    addNode(five, six);

    printLinkedList(one);
    printLinkedList(swapPairs(one));
}

main();