/*
 * Question - Count Numbers Occurrences
 * Given an array of number, count each number's occurrences in the array
 * For example:
 * [1,1,2,3] -> 1:2, 2:1, 3:1
 */

// const arr = [1,1,2,3];

// function countNumbersOccurrences(array) {
//   const dic = {};
//   array.forEach((num)=> {
//     dic[num] ? dic[num] +=1 : dic[num] = 1;
//   })
//   return dic;
// }
// console.log(countNumbersOccurrences(arr))

// //////////////////////////////////////////////////////////////////

/*
 * Question - Diagonal Difference
 * Given a 2 dimensions array of number, calculate the difference between the sum of the diagonal and the sum of the diagonal on the other side
 * For example:
 * [[1, 2, 3], [4, 5, 6], [7, 8, 9]] -> 2 (1 + 5 + 9 - 3 - 5 - 9)
 */


// function diagonalDifference(arr) {
//   let sum = 0;
//   const len = arr.length;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i][i];
//     sum -= arr[i][len - i - 1];
//   }
//   return Math.abs(sum);
// }

// console.log(diagonalDifference(arrayOfNumbers1));
