// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). Given "  there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". Given "Live from New York, it's Saturday Night!", return "LFNYISN".

// Create a function named acronym that takes in a string as input.
// Take the first letter of each word, capitalize it and mash them together and return them.
    // 1. Create a variable called firstLetters and assign an empty string as its value.
    // 2. While the character is a space, go to the next character
    // 3. Capitalize the first non-space character.
    // 4. Add character to firstLetters variable.
    // 5. While the character is not a space, go to the next character
    // 6. Go back to step two.
    // 7. Return the firstLetters variable.

    function acronymize(wordsStr) {
        let acronym = "";
        const len = wordsStr.length;
    
        for (let i = 0; i < len; i++) {
            while (wordsStr[i] === " " && i < len) {
                i++; // skip spaces, handles multiple spaces
            }
            // upperCase it now while we are already looping
            // to avoid upperCase having to loop over our output to upperCase
            acronym += wordsStr[i].toUpperCase();
    
            while (wordsStr[i] !== " " && i < len) {
                i++; // skip rest of word
            }
        }
        return acronym;
    }
    
    console.log(acronymize("     there's no     free lunch    - gotta pay yer       way"));

// String: Reverse
// Implement reverseString(str) that, given a string, returns that string with characters reversed. Given "creature", return "erutaerc". Tempting as it seems, do not use the built-in reverse()!

// YOU CANNOT COMPLETE THIS CHALLENGE IN-PLACE!!!
// YOU MUST CREATE A NEW STRING.

function reverseString(str){
    let reversed = ''
    for (let i = str.length-1; i >= 0; i--){
        reversed += str[i]
    }
    return reversed
}

console.log(reverseString('Welcome to Python!'))