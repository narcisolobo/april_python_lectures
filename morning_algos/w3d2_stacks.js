// Array Stacks and SL STacks
// LIFO - Last In, First Out

class ArrStack {
    constructor(values = []) {
        this.values = values;
    }

    // ArrStack: Push
    // Create push(val) that adds val to our stack.
    push(value) {
        this.values.push(value);
        return this;
    }

    // ArrStack: Pop
    // Create pop() to remove and return the top val.
    pop() {
        return this.values.pop();
    }

    populateRandom(max, length) {
        for (let i = 1; i <= length; i++) {
            let temp = Math.floor(Math.random() * max) + 1;
            this.push(temp);
        }
        return this;
    }

    // ArrStack: Top/Peek
    // Return (not remove) the stack’s top value.
    peek() {
        console.log(this.values[this.values.length - 1]);
        return this.values[this.values.length - 1];
    }

    // ArrStack: Is Empty
    // Return whether the stack is empty.
    isEmpty() {
        return this.values.length === 0;
    }

    // ArrStack: Size
    // Return the number of stacked values.
    size() {
        console.log(this.values.length);
        return this.values.length;
    }

    printVals() {
        console.log(this.values);
        return this;
    }

    // ArrStack: Contains
    // Return whether given value is within the stack.
    contains(value) {
        for (let i = 0; i < this.values.length; i++){
            if(this.values[i] === value) {
                console.log(`Value (${value}) found.`);
                return true;
            }
        }
        console.log(`Value (${value}) not found.`);
        return false;
    }
}

/* 
    Singly Linked List Stack (LIFO)
    You can treat the back of the linked list as the top of the stack, adding to it and removing from the back to maintain LIFO But it's more efficient to add to the front and remove from the front, which is still LIFO
*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SLStack {
    constructor() {
        this.head = null;
    }

    populateRandom(max, length) {
        for (let i = 1; i <= length; i++) {
            let temp = Math.floor(Math.random() * max) + 1;
            this.push(temp);
        }
        return this;
    }

    // push(val) {
    // push val to top of stack
    push(val) {
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    // pop() {
    // remove and return val at top of stack
    pop() {
        if (this.isEmpty()) {
            console.log('Stack is empty.')
            return null;
        } else {
            const removed = this.head;
            this.head = this.head.next;
            return removed.val;
        }
    }

    // peek() {
    // return val at top of stack without removing
    peek() {
        if (this.isEmpty()) {
            console.log('Stack is empty.')
            return null;
        } else {
            console.log(this.head.val);
            return this.head.val;
        }
    }

    // contains(val) {
    // return true if SLStack contains value
    // return false if SLStack does not contain value
    contains(val) {
        if(this.isEmpty()) {
            console.log('Stack is empty.')
            return false;
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

    // isEmpty() {
    // return true if SLStack is empty
    // return false if SLStack is not empty
    isEmpty() {
        return this.head === null;
    }

    // size() {
    // return length of SLStack
    size() {
        let len = 0;
        let runner = this.head;

        while (runner) {
            len += 1;
            runner = runner.next;
        }
        return len;
    }

    // printVals() {
    // print out the values of the SLStack
    printVals() {
        if (this.isEmpty()) {
            console.log('Stack is empty.')
            return this;
        } else {
            let runner = this.head;
            let output = `**********\n`
            while (runner) {
                output += `${runner.val} > `;
                runner = runner.next;
            }
            console.log(output);
        }
        return this;
    }
}

let mySLStack = new SLStack()
mySLStack.populateRandom(1000, 249)
console.log(mySLStack.size())
