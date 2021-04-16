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

    // Remove front - write a class method that removes the front node of a singly linked list.
    removeFront() {
        if (this.isEmpty()) {
            console.log("This SLL is empty.")
        } else {
            this.head = this.head.next;
        }
        return this;
    }

    // Remove back - write a class method that removes the last node of a singly linked list.
    removeBack() {
        if (this.isEmpty()) {
            console.log("This SLL is empty.")
        } else {
            let previous = this.head;
            let runner = this.head;

            while (runner.next) {
                previous = runner;
                runner = runner.next;
            }

            previous.next = null;
        }

        return this;
    }
    // Min to Front
    // Move the node containing the minimum value to the front of the list.

    minToFront() {
        // First, check if the list is empty.
        if (this.isEmpty()) {
            console.log("This SLL is empty.")
            return this;

        } else {
            // Set your variables
            let minNode = this.head;
            let runner = this.head;
            let prevNode = this.head;

            // Find and set the minNode.
            while (runner) {
                if (runner.val < minNode.val) {
                    minNode = runner;
                }
                runner = runner.next;
            }
            console.log(`The minNode val is: ${minNode.val}`)
            // If the minNode was already at the beginning, we're done.
            if (minNode === this.head) {
                return this;
            }

            // If not, set your runner at the head again.
            runner = this.head;

            // Go to the minNode
            while (runner !== minNode) {
                prevNode = runner;
                runner = runner.next;
            }

            // Remove the minNode
            prevNode.next = minNode.next;
            // Set the old head to minNode.next
            minNode.next = this.head;
            // Set the head to minNode
            this.head = minNode;
        }
        return this;
    }

    maxToBack() {
        // First, check if the SLL is empty.
        if (this.isEmpty()) {
            console.log("This SLL is empty.")
            return this;
        } else {
            // If the list isn't empty, find the maxNode.
            let maxNode = this.head;
            let runner = this.head;

            while (runner) {
                if (runner.val > maxNode.val) {
                    maxNode = runner;
                }
                runner = runner.next;
            }

            // Just printing the val of maxNode to confirm.
            console.log(`The maxNode val is: ${maxNode.val}`);

            // If maxNode is head, snip it out.
            if (maxNode === this.head) {
                this.head = this.head.next;
                runner = this.head;

                // Run to the end node.
                while (runner.next) {
                    runner = runner.next;
                }

                // Set next of last node to maxNode.
                runner.next = maxNode;
                // Set next of maxNode to null.
                maxNode.next = null;
            }

            // Is is already the tail?
            else if (!maxNode.next) {
                return this;
            }

            // If it's not the head or the tail.
            else {
                runner = this.head;

                // Run to the end.
                while (runner.next) {
                    // But stop at maxNode on the way.
                    if (runner.next === maxNode) {
                        // Snip maxNode out.
                        runner.next = maxNode.next;
                    }
                    runner = runner.next;
                }
                // Set next of last node to maxNode.
                runner.next = maxNode;
                maxNode.next = null;
            }

        }
        return this;
    }

    // Prepend Value
    // Create method prependVal(val, target) that, given a value and a target, creates a new node with that value and inserts it into the list before the node containing the target value.
    prependVal(val, target) {
        const newNode = new Node(val);
        let runner = this.head;

        while (runner.next.val != target) {
            runner = runner.next;
        }
        newNode.next = runner.next;
        runner.next = newNode;

        return this;
    }

    // Append Value
    // Create method appendVal(val, target) that, given a value and a target, creates a new node with that value and inserts it into the list after the node containing the target value.
    appendVal(val, target) {
        const newNode = new Node(val);
        let runner = this.head;

        while (runner.val != target) {
            runner = runner.next;
        }
        newNode.next = runner.next;
        runner.next = newNode;

        return this;
    }

    // SList: Remove Negatives
    // Create a method that removes any nodes containing negative values. You can return the modified list at completion.
    removeNegatives() {
        let prev = null;
        let runner = this.head;

        while (runner) {
            if(runner.val < 0) {
                if(prev === null) {
                    this.head = runner.next;
                } else {
                    prev.next = runner.next;
                }
            }
            prev = runner;
            runner = runner.next;
        }
        return this;
    }

    // SList: Partition
    // Create method partition(value) that, given a value, locates the first node with that value, and moves all nodes with values less than that value to be earlier, and all nodes with values greater than that value to be later. Otherwise, original order need not be perfectly preserved. Return the new singly linked list.
    partition(val) {
        if (this.isEmpty()) {
            console.log("This SLL is empty.")
            return this;
        } else {
            if(!this.contains(val)) {
                return this;
            } else {
                let lowerList = new SinglyLinkedList();
                let higherList = new SinglyLinkedList();
                let valCount = 0;
                let runner = this.head;

                while(runner) {
                    if (runner.val < val) {
                        lowerList.addFront(runner.val);
                    } else if (runner.val > val) {
                        higherList.addFront(runner.val)
                    } else {
                        valCount++;
                    }
                    runner = runner.next
                }
                for (let i = 0; i < valCount; i++) {
                    higherList.addFront(val);
                }
                runner = lowerList.head;
                while(runner.next){
                    runner = runner.next;
                }
                runner.next = higherList.head;
                this.head = lowerList.head;
            }
        }
        return this;
    }
}

const mySLL = new SinglyLinkedList();
mySLL.populateRandom(300, 10).addFront(150).populateRandom(300, 10).printVals()
mySLL.partition(150).printVals()

// SList: Second to Last Value
// Create a standalone function that, given a pointer to the first node in a singly linked list, will return the second-to-last value in that list. What will you return if the list is not long enough?
function secondToLastVal(singlyLinkedList) {
    let runner = singlyLinkedList.head;
    if(runner === null || runner.next == null) {
        console.log("This list does not contain enough nodes.")
        return singlyLinkedList;
    } else {
        let prev = null;
        while(runner.next) {
            prev = runner;
            runner = runner.next;
        }
        console.log(`Second-to-last val: ${prev.val}`)
    }
    return singlyLinkedList;
}