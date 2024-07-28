const LinkedList = require('./linkedList');

var getDecimalValue = function(head) {
    let array = [];
    let current = head;

    while (current) {
        array.push(current.val);
        current = current.next;
    }

    let number = 0;
    let power = 0;

    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i]) {
            number += Math.pow(2, power);
        }

        power += 1;
    }

    return number;
};

function main() {
    const linkedList = LinkedList.createLinkedListByArray([1,0,1]);
    console.log(getDecimalValue(linkedList.getHead()));

    const linkedList2 = LinkedList.createLinkedListByArray([1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]);
    console.log(getDecimalValue(linkedList2.getHead()));

}

main();