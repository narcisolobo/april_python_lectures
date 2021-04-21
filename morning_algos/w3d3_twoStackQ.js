// Two-Stack Queue
// Implement the FIFO architecture - First In, First Out
// With two LIFO stacks as the underlying architecture.


class TwoStackQ {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(val) {
        // Empty out stack1 into stack2
        while (this.stack1.length !== 0) {
            this.stack2.push(this.stack1[this.stack1.length-1]);
            this.stack1.pop();
        }
        this.stack1.push(val);

        while(this.stack2.length !== 0) {
            this.stack1.push(this.stack2[this.stack2.length-1]);
            this.stack2.pop()
        }
        return this;
    }

    dequeue() {
        if(this.isEmpty()) {
            console.log('This two stack queue is empty.');
            return null;
        } else {
            console.log(this.stack1[this.stack1.length-1])
            return this.stack1.pop()
        }
    }

    populateRandom(max, length) {
        for (let i = 1; i <= length; i++) {
            let temp = Math.floor(Math.random() * max) + 1;
            this.enqueue(temp)
        }
        return this;
    }

    printVals() {
        if(this.isEmpty()) {
            console.log('This two stack queue is empty.');
            return this;
        } else {
            let output = '';
            for (let i = this.stack1.length-1; i >= 0; i--) {
                output += this.stack1[i].toString();
                output += ' > ';
            }
            console.log(output);
        }
        return this;
    }

    peek() {
        if(this.isEmpty()) {
            console.log('This two stack queue is empty.');
        } else {
            console.log(`Here is your peek: ${this.stack1[this.stack1.length-1]}`);
            return this.stack1[this.stack1.length-1];
        }
    }

    isEmpty() {
        return this.stack1.length === 0;
    }

    contains(val) {
        if(this.isEmpty()) {
            console.log('This two stack queue is empty.');
            return false;
        } else {
            for (let i = this.stack1.length-1; i >=0; i--) {
                if (this.stack1[i] === val) {
                    console.log(`Value (${val}) found.`);
                    return true;
                }
            }
            console.log(`Value (${val}) not found.`);
            return false;
        }
    }

    size() {
        console.log(this.stack1.length);
        return this.stack1.length;
    }
}

let myTwoStackQ = new TwoStackQ();
myTwoStackQ.populateRandom(500, 28).enqueue(286).populateRandom(200, 10).contains(286)
myTwoStackQ.printVals();