
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = new Node("dummyHead", 0);
        this.tail = new Node("dummyTail", 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(key) {
        if (!this.map.has(key)) return -1;

        const node = this.map.get(key);
        this.remove(node);
        this.add(node);

        return node.value;
    }

    put(key, value) {
        if (this.map.get(key)) {
            const node = this.map.get(key);
            this.remove(node);
        }

        const newNode = new Node(key, value);
        this.map.set(key, newNode);
        this.add(newNode);

        if (this.map.size > this.capacity) {
            const nodeToDelete = this.head.next;
            this.remove(nodeToDelete);
            this.map.delete(nodeToDelete.key);
        }
    }

    add(node) {
        const previousEnd = this.tail.prev;
        previousEnd.next = node;
        node.prev = previousEnd;
        node.next = this.tail;
        this.tail.prev = node;
    }

    remove(node) {
        const nextNode = node.next;
        const prevNode = node.prev;
        nextNode.prev = prevNode;
        prevNode.next = nextNode;
    }

}