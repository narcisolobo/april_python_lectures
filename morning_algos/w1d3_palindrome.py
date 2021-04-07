# Is Palindrome
# Strings like "Able was I, ere I saw Elba" or "Madam, I'm Adam" could be considered palindromes, because (if we ignore spaces, punctuation and capitalization) the letters are the same from front and back.

# Create a function that returns a boolean whether the string is a strict palindrome. For "a x a" or "racecar", return true. Do not ignore spaces, punctuation and capitalization: if given "Dud" or "oho!", return false.

def is_palindrome(str):
    reverse = ""
    for i in range(len(str)-1, -1, -1):
        reverse += str[i]
    return reverse == str

print(is_palindrome("racecar"))

# Longest Palindrome
# For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. Given "what up, daddy-o?", return "dad". Given "uh... not much", return "u". Include spaces as well (i.e. be strict, as in previous challenge): given "Yikes! my favorite racecar erupted!", return "e racecar e".

def longest_palindrome(str):
    longest_pal = str[0]
    for left in range(len(str)):
        for right in range(left+1, len(str)):
            substr = str[left:right]
            if (is_palindrome(substr) and len(substr) > len(longest_pal)):
                longest_pal = substr
    return longest_pal

print(longest_palindrome("Yikes! my favorite racecar erupted!"))