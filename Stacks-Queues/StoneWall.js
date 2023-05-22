/*
You are going to build a stone wall. The wall should be straight and N meters long, and its thickness should be constant; however, it should have different heights in different places. The height of the wall is specified by an array H of N positive integers. H[I] is the height of the wall from I to I+1 meters to the right of its left end. In particular, H[0] is the height of the wall's left end and H[N−1] is the height of the wall's right end.

The wall should be built of cuboid stone blocks (that is, all sides of such blocks are rectangular). Your task is to compute the minimum number of blocks needed to build the wall.

Write a function:

function solution(H);

that, given an array H of N positive integers specifying the height of the wall, returns the minimum number of blocks needed to build it.

For example, given array H containing N = 9 integers:

  H[0] = 8    H[1] = 8    H[2] = 5
  H[3] = 7    H[4] = 9    H[5] = 8
  H[6] = 7    H[7] = 4    H[8] = 8
the function should return 7. The figure shows one possible arrangement of seven blocks.
Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array H is an integer within the range [1..1,000,000,000].
*/

function solution(H) {
    // THIS SOLUTION HAS 100% PERCENT SCORE ON CODILITY PLATFORM. ITS RUNNING COST IS O(N)

    //itrate though array
    //use minimum blocks to complete the wall
    //blocks can be reused and overlap the blocks
    //if stack is empty push the block of specific height and increment the block
    //if stack is not empty a) compare the current value with last value of
    //stack, if both are same, dont increment the block num, just continue the
    //loop, if stack last value is greater then current value, loop through the
    //stack and remove all values which is greater than current values,
    //compare again if current value is equal to stack last value then      continue the itration
    //push the current value in stack, increment the block number, if current
    //value is less than last value of stack then just push the current value
    //in stack and increment the block
    let blocks = 0;
    const stack = [];

    for (let i = 0; i < H.length; i++) {

        if (stack.length === 0) {
            stack.push(H[i]);
            blocks++;
        }
        else if (H[i] === stack[stack.length - 1]) {

        }
        else if (H[i] > stack[stack.length - 1]) {
            stack.push(H[i]);
            blocks++
        }
        else if (H[i] < stack[stack.length - 1]) {
            let j = stack.length - 1;
            while (stack.length > 0 && H[i] < stack[j]) {
                if (H[i] < stack[j]) {
                    stack.pop();
                }
                j = j - 1;
            }
            if (stack.length > 0 && H[i] === stack[stack.length - 1]) { //if stack last value and current value are same then do not increase the block size
                continue;
            }
            else {
                stack.push(H[i]);
                blocks++;
            }
        }
    }
    return blocks
}
console.log(solution([8,8,5,7,9,8,7,4,8]))
module.exports = { solution } 