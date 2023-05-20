/*
A string S consisting of N characters is called properly nested if:

S is empty;
S has the form "(U)" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings.
For example, string "(()(())())" is properly nested but string "())" isn't.

Write a function:

function solution(S);

that, given a string S consisting of N characters, returns 1 if string S is properly nested and 0 otherwise.

For example, given S = "(()(())())", the function should return 1 and given S = "())", the function should return 0, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..1,000,000];
string S is made only of the characters '(' and/or ')'.
*/

function solution(S) {
// THIS SOLUTION HAS 100% PERCENT SCORE ON CODILITY PLATFORM. ITS RUNNING COST IS O(N)
    if(!S.length) return 1;
    const stack = [];
    let i = 0;
    while (i < S.length){
         if (S[i] === '(') {
            stack.push(S[i]);
        }
        else if (S[i] === ')') {
            if(stack.length > 0 && stack[stack.length - 1] === '('){
                stack.pop();
            }
            else {
                return 0;
            }
        }
        i++;
    }
    return stack.length == 0 ? 1 : 0;
}