// Recursion
// Recursive functions are functions which call themselves.
// 1. Base Case
// 2. Function must call itself
// 3. Make forward progress

// Sigma (demo), Factorial, Recursive Fibonacci

// Sigma - write a function that, given an integer, returns the sum of all previous integers.

function sigma(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

console.log(sigma(3))

function recursiveSigma(num) {
    // base case
    if (num < 1) {
        return 0;
    }
    return num + recursiveSigma(num - 1);
}

// Write a function that, given an integer, returns the product of all previous integers.

// linear
function factorial(num) {
    let product = 1;
    for (let i = 1; i <= num; i++) {
        product *= i;
    }
    return product;
}

// recursive
function recursiveFactorial(num) {
    // base case
    if (num == 1) {
        return 1
    }
    return num * recursiveFactorial(num - 1);
}

// Fibonacci sequence - a sequence of integers where every integer is a sum of the previous two.
// Example: [0, 1, 1, 2, 3, 5, 8, 13]

// Write a function that, given an index, returns the fibonacci number at that index.

// linear solution
function fibonacci(idx) {
    let sequence = [0, 1];
    for (let i = 2; i <= idx; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2])
    }
    return sequence[idx];
}

console.log(fibonacci(6))

// recursive solution
function recursiveFibonacci(idx) {
    if (idx < 2) {
        return idx;
    }
    else {
        return recursiveFibonacci(idx - 2) + recursiveFibonacci(idx - 1)
    }
}

console.log(recursiveFibonacci(6))