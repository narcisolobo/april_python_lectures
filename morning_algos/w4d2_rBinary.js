// Binary Search: Search a sorted array by repeatedly dividing the search interval in half. Begin with an interval covering the whole array. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise narrow it to the upper half. Repeatedly check until the value is found or the interval is empty.

// We basically ignore half of the elements after just one comparison.

// Compare val with the middle element.
// If val matches with middle element, we return true.
// Else if val is greater than the mid element, then val can only lie in right half subarray after the mid element. So we recur for right half.
// Else (val is smaller) recur for the left half.

function bSearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor((left + right) / 2);

    while (left <= right) {
        if (val === arr[mid]) {
            console.log(`Value (${val}) found at the ${mid} index.`);
            return true;
        }
        else if (val > arr[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
        mid = Math.floor((left + right) / 2);
    }
    console.log(`Value (${val}) not found.`);
    return false;
}

function rBSearch(arr, val, left, right) {
    if (right >= left) {
        const mid = Math.floor((left + right) /2)
        if (arr[mid] === val) {
            console.log(`Value (${val}) found at index ${mid}.`)
            return true
        } else if (val > arr[mid]) {
            return rBSearch(arr, val, mid + 1, right)
        } else {
            return rBSearch(arr, val, left, mid - 1)
        }
    } else {
        console.log(`Value (${val}) not found.`)
        return false
    }
}

const arr = [2, 3, 4, 10, 40]
const val = 34

rBSearch(arr, val, 0, arr.length - 1)