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

    static printLinkedList(head) {
        let dummy = head;

        if (!dummy) {
            console.log('null');
            return;
        }
    
        while (dummy.next) {
            process.stdout.write(`${dummy.val} -> `);
            dummy = dummy.next;
        }
        
        console.log(dummy.val);
    }

    static createLinkedListByArray(array) {
        if (array.length === 0) return null;

        const linkedList = new LinkedList(array[0]);

        for (let i = 1; i < array.length; i++) {
            linkedList.addNode(array[i]);
        }

        linkedList.printLinkedList();

        return linkedList;

    }

    getHead() {
        return this.head;
    }
}

module.exports = LinkedList;
