/*


*/
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    if (A.length <= 2) return 0;
       const peaks = [];
       for (let i = 1; i < A.length - 1; i++) {
           if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
               peaks.push(i)
           }
       }
       let flags = 0;
   
       if (peaks.length) {
           flags = 1;
           let flagsArray = [peaks[0]];
           for (let i = 1; i <= peaks.length; i++) {
             let j = 0;
             while(j < flagsArray.length){
               if (Math.abs(peaks[i] - flagsArray[j]) >= peaks.length) {
                   flags++;
                   flagsArray.push(peaks[i])
                   break
               }
               j++;
             }
           }
       }
       return flags
   }