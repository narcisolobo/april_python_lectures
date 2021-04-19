// Queues - FIFO (First In, First Out - like a movie theater line)
// Stacks - LIFO (Last In, First Out - like a stack of plates)

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Example Node Creation:
// let myNode = new Node(35)

class SLQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    populateRandom(max, length) {
        for (let i = 1; i <= length; i++) {
            let temp = Math.floor(Math.random() * max) + 1;
            this.enqueue(temp);
        }
        return this;
    }

    // SLQueue: Enqueue
    // Create SLQueue method enqueue(val) to create a node with the given value and add it to end of our queue.
    enqueue(val) {
        const newTail = new Node(val);

        if (this.isEmpty()) {
            this.head = newTail;
            this.tail = newTail;

        } else {
            this.tail.next = newTail;
            this.tail = newTail;
        }

        this.size++;
        return this;
    }

    // SLQueue: Dequeue
    // Create SLQueue method dequeue() to remove and return the front value in the queue.
    dequeue() {
        if (this.isEmpty()) {
            console.log('Queue is empty.')
            return null;
        } else {
            // remove head and store it
            const dequeued = this.head;
            this.head = this.head.next;

            if (this.head === null) {
                this.tail = null;
            }

            this.size--;
            return dequeued.val;
        }
    }

    // SLQueue: Peek/Front
    // Create SLQueue method peek() to return the value at front of our queue, without removing it.
    peek() {
        if (this.isEmpty()) {
            console.log('Queue is empty.')
            return null;
        } else {
            console.log(`Peek: ${this.head.val}`)
            return this.head.val;
        }
    }

    // SLQueue: Contains
    // Create SLQueue method contains(val) to return true if the value is contained in the queue, and false if it is not.
    contains(val) {
        if (this.isEmpty()) {
            console.log('Queue is empty.')
            return null;
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

    // Print Values
    // Create SLQueue method to print all the values in the queue.
    printVals() {
        if (this.isEmpty()) {
            console.log('Queue is empty.')
            return this;
        } else {
            let runner = this.head;
            let output = '**********\n'
            while (runner) {
                output += `${runner.val} > `;
                runner = runner.next;
            }
            console.log(output);
        }
        return this;
    }

    // Is Empty
    // Create SLQueue method to return true if the queue is empty and false if it is not.
    isEmpty() {
        return this.head === null;
    }

    // SLQueue: Return Size
    // Create SLQueue method returnSize() to return the number of values in the queue.
    returnSize() {
        console.log(this.size);
        return this.size;
    }
}

let mySLQueue = new (SLQueue);
mySLQueue.populateRandom(100, 5).returnSize()