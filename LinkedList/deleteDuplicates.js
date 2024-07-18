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

var deleteDuplicates = function(head) {
    if (!head) return head;

    let dummy = head;
    let temp = dummy.next;

    while (dummy.next) {
        if (dummy.val === temp.val) {
            dummy.next = dummy.next.next
            temp = dummy.next;
        } else {
            dummy = dummy.next;
            temp = dummy.next;
        }
    }
    
    return head;
};

var deleteDuplicatesII = function(head) {
    let current = head;

    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
};

function main() {

    deleteDuplicates();

    let one = new ListNode(1);
    let two = new ListNode(1);
    let three = new ListNode(2);

    addNode(one, two);
    addNode(two, three);
    deleteDuplicates(one);
    printLinkedList(one);

    let four = new ListNode(1);
    let five = new ListNode(1);
    let six = new ListNode(2);
    let seven = new ListNode(3);
    let eight = new ListNode(3);

    addNode(four, five);
    addNode(five, six);
    addNode(six, seven);
    addNode(seven, eight);
    deleteDuplicates(four);
    printLinkedList(four);

    let n1 = new ListNode(1);
    let n2 = new ListNode(1);
    addNode(n1, n2);
    deleteDuplicates(n1);
    printLinkedList(n1);

    let n3 = new ListNode(1);
    let n4 = new ListNode(1);
    let n5 = new ListNode(1);
    addNode(n3, n4);
    addNode(n4, n5);
    deleteDuplicates(n3);
    printLinkedList(n3);

    let n6 = new ListNode(1);
    let n7 = new ListNode(2);
    let n8 = new ListNode(3);
    addNode(n6, n7);
    addNode(n7, n8);
    deleteDuplicates(n6);
    printLinkedList(n6);
}

function printLinkedList(head) {
    let dummy = head;

    while (dummy.next) {
        process.stdout.write(`${dummy.val} -> `);
        dummy = dummy.next;
    }
    
    console.log(dummy.val);
}

main()