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

var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) return true; 
    }

    return false;
};

var hasCycleII = function(head) {
    let seen = new Set();
    while (head) {
        if (seen.has(head)) {
            return true;
        }
        
        seen.add(head);
        head = head.next;
    }
    
    return false;
};

function main() {
    let one = new ListNode(3);
    let two = new ListNode(2);
    let three = new ListNode(0);
    let four = new ListNode(-4);

    addNode(one, two);
    addNode(two, three);
    addNode(three, four);
    //four.next = two;

    console.log(hasCycle(one));
}

main();