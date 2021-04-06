# Parens Valid
# Create a function that, given an input string str, returns a boolean whether parentheses in str are valid. Valid sets of parentheses always open before they close, for example. For "Y(3(p)p(3)r)s", return true. Given "N(0(p)3", return false: not every parenthesis is closed. Given "N(0)t )0(k", return false, because the underlined ")" is premature: there is nothing open for it to close.

def parens_valid(string):
    parens_stack = []

    for char in string:
        if char == "(":
            parens_stack.append(char)
        elif char == ")":
            if len(parens_stack) == 0:
                return False
            else:
                parens_stack.pop()
    return len(parens_stack) == 0

print(parens_valid("Y(3(p)p(3)r)s"))
print(parens_valid("N(0(p)3"))
print(parens_valid("N(0)t )0(k"))

# Braces Valid
# Given a sequence of parentheses, braces and brackets, determine whether it is valid. Example: "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!" => true. "D(i{a}l[ t]o)n{e" => false.
# "A(1)s[O (n]0{t) 0}k" => false.

def braces_valid(string):
    stack = []
    opens = "({["
    close_to_opens = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    for char in string:
        if char in opens:
            stack.append(char)
        elif char in close_to_opens:
            if close_to_opens[char] == stack[-1]:
                stack.pop()
            else:
                return False
    return len(stack) == 0

print(braces_valid("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!"))
print(braces_valid("D(i{a}l[ t]o)n{e"))
print(braces_valid("A(1)s[O (n]0{t) 0}k"))