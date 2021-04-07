// Is Palindrome
// Strings like "Able was I, ere I saw Elba" or "Madam, I'm Adam" could be considered palindromes, because (if we ignore spaces, punctuation and capitalization) the letters are the same from front and back.

// Create a function that returns a boolean whether the string is a strict palindrome. For "a x a" or "racecar", return true. Do not ignore spaces, punctuation and capitalization: if given "Dud" or "oho!", return false.


function isPalindrome(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse === str;
}

console.log(isPalindrome("racecar"))

// Longest Palindrome
// For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. Given "what up, daddy-o?", return "dad". Given "uh... not much", return "u". Include spaces as well (i.e. be strict, as in previous challenge): given "Yikes! my favorite racecar erupted!", return "e racecar e".


// Create a function called longestPalindrome that takes in a string as input.
function longestPalindrome(str) {
    
    // Create a variable to hold the current longest palindrome.
    let longestPal = str[0];
    
    // Start a for loop that starts "left" at the beginning of the string, stops at the end of the string, and increments by one.
    for (let left = 0; left < str.length; left++) {
        
        // Start a nested for loop that starts "right" at the character to the right of "left", stops at the end of the string, and increments by one.
        for (let right = left + 1; right < str.length; right++) {
            
            // Create a variable to hold the current substring
            // The substring's value will be a slice of the given string starting at "left" and ending at "right".
            let substr = str.slice(left, right)
            
            // If the substring is a palindrome AND it is longer than the current longest palindrome, make that the new longest palindrome.
            if (isPalindrome(substr) && substr.length > longestPal.length) {
                longestPal = substr;
            }
            console.log(`Substring: ${substr}`)
            console.log(`Longest Palindrome: ${longestPal}`)
        }
    }
    // After all looping is done, return the longest palindrome.
    return longestPal;
}

console.log(longestPalindrome("Yikes! my favorite racecar erupted!"));