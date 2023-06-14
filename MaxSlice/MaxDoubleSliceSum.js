/*
A non-empty array A consisting of N integers is given.

A triplet (X, Y, Z), such that 0 ≤ X < Y < Z < N, is called a double slice.

The sum of double slice (X, Y, Z) is the total of A[X + 1] + A[X + 2] + ... + A[Y − 1] + A[Y + 1] + A[Y + 2] + ... + A[Z − 1].

For example, array A such that:

    A[0] = 3
    A[1] = 2
    A[2] = 6
    A[3] = -1
    A[4] = 4
    A[5] = 5
    A[6] = -1
    A[7] = 2
contains the following example double slices:

double slice (0, 3, 6), sum is 2 + 6 + 4 + 5 = 17,
double slice (0, 3, 7), sum is 2 + 6 + 4 + 5 − 1 = 16,
double slice (3, 4, 5), sum is 0.
The goal is to find the maximal sum of any double slice.

Write a function:

function solution(A);

that, given a non-empty array A consisting of N integers, returns the maximal sum of any double slice.

For example, given:

    A[0] = 3
    A[1] = 2
    A[2] = 6
    A[3] = -1
    A[4] = 4
    A[5] = 5
    A[6] = -1
    A[7] = 2
the function should return 17, because no double slice of array A has a sum of greater than 17.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [3..100,000];
each element of array A is an integer within the range [−10,000..10,000].
*/

//NOTE THIS SOLUTION IS NOT EFFICIENT. IT COSTS N^2
function solution(A) {
    // Implement your solution here
    if (A.length === 0) return 0;
    let maxDoubleSlice = Number.NEGATIVE_INFINITY;

    let preFixSum = [];
    preFixSum[0] = A[0];
    //prefix sum to calculate the sum ahead of the time
    for (let i = 1; i < A.length; i++) {
        preFixSum[i] = preFixSum[i - 1] + A[i];
    }

    for (let x = 0; x < A.length - 2; x++) {
        for (let y = x + 1; y < A.length - 1; y++) {
            for (let z = y + 1; z < A.length; z++) {
                let sum = (preFixSum[y - 1] - preFixSum[x]) + (preFixSum[z - 1] - preFixSum[y]);
                if (sum > maxDoubleSlice) maxDoubleSlice = sum;

            }
        }
    }
    return maxDoubleSlice;
}