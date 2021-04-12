class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    // add front - add a new node to the list
    addFront(val) {
        const newHead = new Node(val);
        newHead.next = this.head;
        this.head = newHead;
        return this;
    }

    // add back - add a node to the back of the list
    addBack(val) {
        const newTail = new Node(val);
        let runner = this.head;

        if (runner === null) {
            this.head = newTail;
        } else {
            while (runner.next) {
                runner = runner.next;
            }
            runner.next = newTail;
        }

        return this;
    }

    // display (printValues) prints out all values in the list
    printVals() {
        if (this.isEmpty()) {
            console.log("This SLL is empty.")
            return this;
        } else {
            let runner = this.head;
            let output = '**********\n';
            while (runner) {
                output += `${runner.val} -> `;
                runner = runner.next;
            }
            console.log(output);
        }
        return this;
    }

    // contains - returns true if value is found, false if it is not.
    contains(val) {
        if (this.isEmpty()) {
            console.log("This SLL is empty.")
            return this;
        } else {
            let runner = this.head;
            while (runner) {
                if (runner.val === val) {
                    console.log(`Value (${val}) found.`)
                    return true;
                }
                runner = runner.next;
            }
            console.log(`Value (${val}) not found.`)
            return false;
        }
    }

    populateRandom(max, length) {
        for (let i = 1; i <= length; i++) {
            let temp = Math.ceil(Math.random() * max);
            this.addFront(temp);
        }
        return this;
    }

    isEmpty() {
        return this.head === null;
    }
}

const mySLL = new SinglyLinkedList();
mySLL.populateRandom(300, 10).addFront(150).populateRandom(300, 10).printVals().contains(151)

