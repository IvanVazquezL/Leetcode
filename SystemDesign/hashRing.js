const crypto = require('crypto');

class Node {
    constructor(id) {
        this.id = id;
        this.hash = this.hashId(id); // Unique hash for the node
    }

    hashId(id) {
        return parseInt(crypto.createHash('sha1').update(id).digest('hex').substring(0, 8), 16);
    }
}

class HashRing {
    constructor() {
        this.nodes = []; // Sorted array of nodes
    }

    // Insert node and maintain sorted order by hash
    insertNode(node) {
        this.nodes.push(node);
        this.nodes.sort((a, b) => a.hash - b.hash);
        console.log(`Inserted node ${node.id} with hash ${node.hash}`);
    }

    // Remove node from the ring
    removeNode(nodeId) {
        const nodeHash = parseInt(crypto.createHash('sha1').update(nodeId).digest('hex').substring(0, 8), 16);
        const nodeIndex = this.nodes.findIndex(n => n.hash === nodeHash);
        
        if (nodeIndex !== -1) {
            const removedNode = this.nodes.splice(nodeIndex, 1); // Remove the node
            console.log(`Removed node ${removedNode[0].id} with hash ${removedNode[0].hash}`);
        } else {
            console.log(`Node ${nodeId} not found in the ring.`);
        }
    }

    // Find the node responsible for a particular key using binary search
    findNodeForKey(key) {
        const keyHash = parseInt(crypto.createHash('sha1').update(key).digest('hex').substring(0, 8), 16);

        // Binary search for the correct node
        let low = 0, high = this.nodes.length - 1;
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (this.nodes[mid].hash === keyHash) {
                return this.nodes[mid].id;
            } else if (this.nodes[mid].hash < keyHash) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        // If no larger node found, wrap around to the first node
        const node = (low >= this.nodes.length) ? this.nodes[0] : this.nodes[low];
        console.log(`Key ${key} with hash ${keyHash} is handled by node ${node.id}`);
        return node.id;
    }
}

// Simulate the hash ring
const ring = new HashRing();
ring.insertNode(new Node('Node A'));
ring.insertNode(new Node('Node B'));
ring.insertNode(new Node('Node C'));

console.log(ring.nodes)

// Test key assignment
ring.findNodeForKey('myKey10000000000000000');
ring.findNodeForKey('myKey2');
ring.findNodeForKey('myKey3');

// Remove a node from the ring
ring.removeNode('Node B');

// Test key assignment after removal
ring.findNodeForKey('myKey10000000000000000');
ring.findNodeForKey('myKey2');
ring.findNodeForKey('myKey3');
