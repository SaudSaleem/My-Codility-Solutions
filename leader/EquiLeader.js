/*
A non-empty array A consisting of N integers is given.

The leader of this array is the value that occurs in more than half of the elements of A.

An equi leader is an index S such that 0 ≤ S < N − 1 and two sequences A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N − 1] have leaders of the same value.

For example, given array A such that:

    A[0] = 4
    A[1] = 3
    A[2] = 4
    A[3] = 4
    A[4] = 4
    A[5] = 2
we can find two equi leaders:

0, because sequences: (4) and (3, 4, 4, 4, 2) have the same leader, whose value is 4.
2, because sequences: (4, 3, 4) and (4, 4, 2) have the same leader, whose value is 4.
The goal is to count the number of equi leaders.

Write a function:

function solution(A);

that, given a non-empty array A consisting of N integers, returns the number of equi leaders.

For example, given:

    A[0] = 4
    A[1] = 3
    A[2] = 4
    A[3] = 4
    A[4] = 4
    A[5] = 2
the function should return 2, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000,000..1,000,000,000].

NOTE THIS SOLUTION HAS 77% SCORE
*/
function solution(A) {
    // Implement your solution here
    let equiLeader = 0;
    const prefixLeaders = { 0: A[0] };
    let stack = [];
    for (let i = 0; i < A.length; i++) {
        stack.push(A[i]);
        if (stack.length == 1) {
            prefixLeaders[i] = A[i];
        }
        if (stack.length > 1) {
            if (stack[stack.length - 2] == A[i]) {
                prefixLeaders[i] = A[i];
            }
            else {
                stack.pop();
                stack.pop();
                if (stack.length) {
                    prefixLeaders[i] = stack[stack.length - 1]
                }
                else {
                    prefixLeaders[i] = -1;
                }
            }
        }

    }
    const postFixLeaders = { [A.length - 1]: A[A.length - 1] };
    stack = [];
    for (let i = A.length - 1; i >= 0; i--) {
        stack.push(A[i]);
        if (stack.length == 1) {
            postFixLeaders[i] = A[i];
        }
        if (stack.length > 1) {
            if (stack[stack.length - 2] == A[i]) {
                postFixLeaders[i] = A[i];
            }
            else {
                stack.pop();
                stack.pop();
                if (stack.length) {
                    postFixLeaders[i] = stack[stack.length - 1]
                }
                else {
                    postFixLeaders[i] = -1;
                }
            }
        }

    }

    for (let i = 0; i < A.length - 1; i++) {
        if (prefixLeaders[i] == postFixLeaders[i + 1]) equiLeader++

    }
    return equiLeader;
}
console.log(solution([4,3,4,4,4,2]))
module.exports = { solution } 