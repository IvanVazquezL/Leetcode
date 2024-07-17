class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function main() {
    let one = new ListNode(1);
    let two = new ListNode(2);
    let three = new ListNode(3);
    //one.next = two;
    //two.next = three;
    addNode(one, two);
    addNode(two, three);
    let head = one;
    
    console.log(head.val);
    console.log(head.next.val);
    console.log(head.next.next.val);
    console.log(getSum(head));
    console.log(getSumRec(head));
}

let getSum = head => {
    let ans = 0;
    while (head) {
        ans += head.val;
        head = head.next;
    }

    return ans;
}

let getSumRec = head => {
    if (!head) {
        return 0;
    }

    return head.val + getSum(head.next);
}

let addNode = (prevNode, nodeToAdd) => {
    nodeToAdd.next = prevNode.next;
    prevNode.next = nodeToAdd;
}

let deleteNode = prevNode => {
    prevNode.next = prevNode.next.next;
}

main();