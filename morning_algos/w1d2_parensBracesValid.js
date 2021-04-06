// Parens Valid
// Create a function that, given an input string str, returns a boolean whether parentheses in str are valid. Valid sets of parentheses always open before they close, for example. For "Y(3(p)p(3)r)s", return true. Given "N(0(p)3", return false: not every parenthesis is closed. Given "N(0)t )0(k", return false, because the underlined ")" is premature: there is nothing open for it to close.

function parensValid(str) {
    const parensStack = [];

    for (const char of str) {
        if (char === "(") {
            parensStack.push(char);
        } else if (char === ")") {
            if (parensStack.length === 0) {
                return false;
            } else {
                parensStack.pop();
            }
        }
    }
    return parensStack.length === 0;
}

// Braces Valid
// Given a sequence of parentheses, braces and brackets, determine whether it is valid. Example: "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!" => true. "D(i{a}l[ t]o)n{e" => false.
// "A(1)s[O (n]0{t) 0}k" => false.

function bracesValid(str) {
    const stack = [];
    const opens = "({[";
    const closeToOpen = {
        ")": "(",
        "}": "{",
        "]": "["
    };

    for (let i = 0; i < str.length; i++) {
        if (opens.includes(str[i])) {
            stack.push(str[i]);
        } else if (str[i] in closeToOpen) {
            if (closeToOpen[str[i]] === stack[stack.length - 1]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}