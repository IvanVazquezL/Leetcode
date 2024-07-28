const LinkedList = require('./linkedList');

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var MyLinkedList = function() {
    this.head = null;
    this.tail = null;
    this.length = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index >= this.length || index < 0) return -1;
    let current = this.head;
    for (let i = 0; i < index; i++) {
        current = current.next;
    }
    return current.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const listNode = new ListNode(val);
    if (!this.head) {
        this.head = listNode;
        this.tail = listNode;
    } else {
        listNode.next = this.head;
        this.head = listNode;
    }
    this.length++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const listNode = new ListNode(val);
    if (!this.tail) {
        this.head = listNode;
        this.tail = listNode;
    } else {
        this.tail.next = listNode;
        this.tail = listNode;
    }
    this.length++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this.length) return;
    if (index === 0) {
        this.addAtHead(val);
        return;
    }
    if (index === this.length) {
        this.addAtTail(val);
        return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
        current = current.next;
    }
    const listNode = new ListNode(val);
    listNode.next = current.next;
    current.next = listNode;
    this.length++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index >= this.length || index < 0) return;
    if (index === 0) {
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
        current = current.next;
    }
    current.next = current.next.next;
    if (index === this.length - 1) {
        this.tail = current;
    }
    this.length--;
};

function main() {
    /*
    var myLinkedList = new MyLinkedList();
    myLinkedList.addAtHead(1);
    myLinkedList.addAtTail(3);
    myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
    console.log(myLinkedList.get(1));              // return 2
    myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
    console.log(myLinkedList.get(1));              // return 3

    var myLinkedList2 = new MyLinkedList();
    myLinkedList2.addAtHead(1);
    myLinkedList2.deleteAtIndex(0);

    var myLinkedList3 = new MyLinkedList();
    myLinkedList3.addAtHead(7);
    LinkedList.printLinkedList(myLinkedList3.head);

    myLinkedList3.addAtHead(2);
    LinkedList.printLinkedList(myLinkedList3.head);

    myLinkedList3.addAtHead(1);
    myLinkedList3.addAtIndex(3,0);
    myLinkedList3.deleteAtIndex(2);
    myLinkedList3.addAtHead(6);
    myLinkedList3.addAtTail(4);
    console.log(myLinkedList3.get(4));
    myLinkedList3.addAtHead(4);
    myLinkedList3.addAtIndex(5,0);
    myLinkedList3.addAtHead(6);

    processMyLinkedList(
        ["MyLinkedList","addAtHead","get","addAtHead","addAtHead","deleteAtIndex","addAtHead","get","get","get","addAtHead","deleteAtIndex"],
        [[],[4],[1],[1],[5],[3],[7],[3],[3],[3],[1],[4]]
    );

    processMyLinkedList(
        ["MyLinkedList","addAtHead","get","addAtHead","addAtHead","deleteAtIndex","addAtHead","get","get","get","addAtHead","deleteAtIndex"],
        [[],[4],[1],[1],[5],[3],[7],[3],[3],[3],[1],[4]]    );
                */
    
    processMyLinkedList(
        ["MyLinkedList","addAtHead","get","addAtHead","addAtHead","deleteAtIndex","addAtHead","get","get","get","addAtHead","deleteAtIndex"],
        [[],[4],[1],[1],[5],[3],[7],[3],[3],[3],[1],[4]]
    );

    processMyLinkedList(
        ["MyLinkedList","addAtHead","addAtTail","addAtTail","get","get","addAtTail","addAtIndex","addAtHead","addAtHead","addAtTail","addAtTail","addAtTail","addAtTail","get","addAtHead","addAtHead","addAtIndex","addAtIndex","addAtHead","addAtTail","deleteAtIndex","addAtHead","addAtHead","addAtIndex","addAtTail","get","addAtIndex","addAtTail","addAtHead","addAtHead","addAtIndex","addAtTail","addAtHead","addAtHead","get","deleteAtIndex","addAtTail","addAtTail","addAtHead","addAtTail","get","deleteAtIndex","addAtTail","addAtHead","addAtTail","deleteAtIndex","addAtTail","deleteAtIndex","addAtIndex","deleteAtIndex","addAtTail","addAtHead","addAtIndex","addAtHead","addAtHead","get","addAtHead","get","addAtHead","deleteAtIndex","get","addAtHead","addAtTail","get","addAtHead","get","addAtTail","get","addAtTail","addAtHead","addAtIndex","addAtIndex","addAtHead","addAtHead","deleteAtIndex","get","addAtHead","addAtIndex","addAtTail","get","addAtIndex","get","addAtIndex","get","addAtIndex","addAtIndex","addAtHead","addAtHead","addAtTail","addAtIndex","get","addAtHead","addAtTail","addAtTail","addAtHead","get","addAtTail","addAtHead","addAtTail","get","addAtIndex"],
        [[],[84],[2],[39],[3],[1],[42],[1,80],[14],[1],[53],[98],[19],[12],[2],[16],[33],[4,17],[6,8],[37],[43],[11],[80],[31],[13,23],[17],[4],[10,0],[21],[73],[22],[24,37],[14],[97],[8],[6],[17],[50],[28],[76],[79],[18],[30],[5],[9],[83],[3],[40],[26],[20,90],[30],[40],[56],[15,23],[51],[21],[26],[83],[30],[12],[8],[4],[20],[45],[10],[56],[18],[33],[2],[70],[57],[31,24],[16,92],[40],[23],[26],[1],[92],[3,78],[42],[18],[39,9],[13],[33,17],[51],[18,95],[18,33],[80],[21],[7],[17,46],[33],[60],[26],[4],[9],[45],[38],[95],[78],[54],[42,86]]
    );
}

function processMyLinkedList(methods, inputs) {
    const linkedList = new MyLinkedList();

    for (let i = 1; i < methods.length; i++) {
        console.log({
            method: methods[i],
            input: inputs[i]
        })
        switch(methods[i]) {
            case "get": 
                console.log(linkedList.get(inputs[i][0]));
                break;
            case "addAtHead":
                linkedList.addAtHead(inputs[i][0]);
                LinkedList.printLinkedList(linkedList.head)
                break;
            case "addAtTail":
                linkedList.addAtTail(inputs[i][0]);
                break;
            case "addAtIndex":
                linkedList.addAtIndex(inputs[i][0], inputs[i][1]);
                break;
            case "deleteAtIndex":
                linkedList.deleteAtIndex(inputs[i][0]);
                break;
            default:
                break;
        }
    }
}

main();