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

var getMiddleAndPrevNodeAndLengthList = function(head) {
    let slow = head;
    let fast = head;
    let prev = null;
    let length = 0;

    while (fast && fast.next) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
        length += 2;
    }

    return {
        middleNode: slow,
        prev, 
        length
    };
};

var reverseListFromMiddle = function(head, prevMiddle) {    
    let prev = null;
    let curr = head;

    while(curr) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    prevMiddle.next = prev;

    return prev;
};

var pairSum = function(head) {
    const {
        middleNode,
        prev,
        length
    } = getMiddleAndPrevNodeAndLengthList(head);
    
    reverseListFromMiddle(middleNode, prev);

    let slow = head;
    let fast = head;
    let counter = 0;

    while (counter < length/2) {
        fast = fast.next;
        counter++;
    }

    let maxTwinSum = 0;

    while (fast) {
        maxTwinSum = Math.max(maxTwinSum, slow.val + fast.val);
        slow = slow.next;
        fast = fast.next;
    }

    return maxTwinSum;
}

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

    console.log(pairSum(one));
}

main();