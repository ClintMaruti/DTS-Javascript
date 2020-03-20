/**
 * 
 * @param {integer} i 
 */
function recurs(i){
    if(i === 0) return;
    console.log(i)
    recurs(i-1)
  }
recurs(7);

// ---> prints 7, 6, 5, 4, 3, 2, 1

// n! = n * (n-1)!
// 5! = 5 * 4!
// 5! = 5 * 4 * 3! ....
function fact(n){
    if(n === 1) return 1
    return n * fact(n)
}

/**
 * Divide & Conquer using recursion
 * 
 * 1. Identify the base case ---> the simplest possible case in which the problem can be reduced to
 * 2. Divide & Conquer your problem until the base case is met
 * 
 * When working with arrays mostly, the base case is usually an empty array or an array with one element
 * 
 * Problem:
 * Find the sum using recursion
 */

 // Without Recursion
 function findSum(arr){
   let sum = 0
   for(num of arr){
     sum += num
   }

   return sum;
 }

 // With recursion
 // sum([2,2,3])
 // 2 + sum([2,3])

 function findSumUsingRecursion(arr){
   if(arr.length === 0) return 0; // base case
   return arr[0] + findSumUsingRecursion(arr.slice(1)) // recursive case
 }

