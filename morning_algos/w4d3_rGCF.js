/* 
    Greatest Common Factor
    Input: two integers
    Output: greatest common factor (the largest integer that can be evenly divided into both given integers)
*/

// 12, 9 -> GCF is 3
// 12 % 9 -> 3
// 9 % 3 -> 0
// 3, 0

// GCF can be found by modulous.
// Take the larger number and modulous it by the smaller number until one of them is zero.
// When one integer gets to zero, the other number is the GCF.

function rGCF(a, b) {
    if (b === 0) {
        return a;
    }
    return rGCF(b, a % b);
}

// rGCF(12, 81)
// rGCF(81, 12)
// rGCF(12, 9)
// rGCF(9, 3)
// rGCF(3, 0)

console.log(rGCF(12, 81));