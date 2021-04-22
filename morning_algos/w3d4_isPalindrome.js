// Queue: Is Palindrome
// Given a Queue, return true if its values are a palindrome (if they are same in reverse order), else return false. Restore Queue to original state before exiting. For storage, use one additional Stack.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// LIFO
// Last In, First Out

class SLStack {
    constructor() {
        this.head = null;
    }

    // push(val) {
    // push val to top of stack
    push(val) {
        const newNode = new Node(val);

        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        return this;
    }

    // pop() {
    // remove and return val at top of stack
    pop() {
        if (this.head === null) {
            return null;
        } else {
            const removed = this.head;
            this.head = this.head.next;
            return removed.val;
        }
    }

    // printVals() {
    // print out the values of the SLStack
    printVals() {
        let runner = this.head;
        let output = `**********\n`
        while (runner) {
            output += `${runner.val.toString()} > `;
            runner = runner.next;
        }
        console.log(output);
        return this;
    }
}

// FIFO
// First In, First Out

class SLQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    randomLetters(num) {
        const letters = 'abcdefghijklmnopqrstuvxyz';
        for (let i = 0; i < num; i++) {
            let randomIdx = Math.floor(Math.random() * letters.length);
            let tempLetter = letters[randomIdx];
            this.enqueue(tempLetter);
        }
        return this;
    }

    popPalindrome(num) {
        const letters = 'abcdefghijklmnopqrstuvxyz';
        let half = '';
        for (let i = 0; i < num / 2; i++) {
            let randomIdx = Math.floor(Math.random() * letters.length);
            let tempLetter = letters[randomIdx];
            half += tempLetter
            this.enqueue(tempLetter);
        }
        for (let i = half.length - 1 - (num % 2); i >= 0; i--) {
            this.enqueue(half[i]);
        }
        return this;
    }

    isEmpty() {
        return this.head === null;
    }

    printVals() {
        if (this.isEmpty()) {
            console.log('Queue is empty.')
            return this;
        } else {
            let runner = this.head;
            let output = '**********\n'
            while (runner) {
                output += `${runner.val.toString()} > `;
                runner = runner.next;
            }
            console.log(output);
        }
        return this;
    }

    // SLQueue: Enqueue
    // Create SLQueue method enqueue(val) to add the given value to end of our queue.
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

    // Queue: Is Palindrome
    // Given a Queue, return true if its values are a palindrome (if they are same in reverse order), else return false. Restore Queue to original state before exiting. For storage, use one additional Stack.
    isPalindrome() {
        // create a storage stack
        let storageStack = new SLStack();

        // loop through queue
        for (let i = 0; i < this.size; i++) {
            // dequeue node into temp
            let temp = this.dequeue();
            // push temp into storage stack
            storageStack.push(temp);
            // enqueue temp back into queue
            this.enqueue(temp);
        }
        // loop through queue
        for (let i = 0; i < this.size; i++) {
            // dequeue from queue into temp
            let q = this.dequeue();
            // pop from stack into temp
            let s = storageStack.pop();
            // compare
            if(q !== s) {
                // if not equal, return false
                console.log('This queue is not a palindrome.')
                return false;
            }
            // enqueue back into queue
            this.enqueue(q);
        }
        // after loop, return true
        console.log('This queue is a palindrome.')
        return true;
    }
}

let mySLQueue = new SLQueue()
mySLQueue.popPalindrome(26).printVals().isPalindrome()