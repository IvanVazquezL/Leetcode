class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(val) {
        this.currentNode = new ListNode(val);
        this.head = this.currentNode;
    }

    addNode(val) {
        const newNode = new ListNode(val);
        this.currentNode.next = newNode;
        this.currentNode = newNode;
    }

    printLinkedList() {
        let dummy = this.head;
    
        while (dummy.next) {
            process.stdout.write(`${dummy.val} -> `);
            dummy = dummy.next;
        }
        
        console.log(dummy.val);
    }

    getHead() {
        return this.head;
    }
}

module.exports = LinkedList;
