/*
A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

S is empty;
S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings.
For example, the string "{[()()]}" is properly nested but "([)()]" is not.

Write a function:

function solution(S);

that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..200,000];
string S is made only of the following characters: '(', '{', '[', ']', '}' and/or ')'.
*/

function solution(S) {
    // Implement your solution here
    if (!S.length) return 1; //empty string is also considered as properly nested
    if (S.length % 2 !== 0) return 0;
    const stack = [];
    let i = 0;

    while (i < S.length) {
        if (S[i] == '[' || S[i] == '{' || S[i] == '(') {
            stack.push(S[i]);
        }
        else if (S[i] == ']') {
            if (stack.length === 0) return 0; //not properly nested
            if (stack[stack.length - 1] === '[') stack.pop();
            else return 0; //not properly nested
        }
        else if (S[i] == '}') {
            if (stack.length === 0) return 0; //not properly nested
            if (stack[stack.length - 1] === '{') stack.pop();
            else return 0; //not properly nested
        }
        else if (S[i] == ')') {
            if (stack.length === 0) return 0; //not properly nested
            if (stack[stack.length - 1] === '(') stack.pop();
            else return 0; //not properly nested
        }
        i = i + 1;
    }
    return stack.length === 0 ? 1 : 0; //IF STACK IS EMPTY AFTER ITRATION THEN  STRING IS PROPERLY NESTED OTHERWISE NOT
}

console.log(solution('{[()()]}'));
module.exports = { solution } 