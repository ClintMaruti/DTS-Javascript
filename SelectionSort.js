/**
 * Algorithm: selection sort
 * Run Time: O(n^2)
 */

let swap = (arr, firstIndx, secondIndx) => {
    let temp = arr[firstIndx]
    arr[firstIndx] = arr[secondIndx]
    arr[secondIndx] = temp
    return arr
  }
  
  let selectionSort = (arr) => {
    for(let i = 0; i < arr.length; i++){
      // set min to the currecnt iteration of i
      let min = i
      for(let j = i+1; j < arr.length; j++){
        if(arr[j] < arr[min]){
          min = j
        }
      }
      swap(arr, i, min)
    }
    return arr
  }
  
  selectionSort([3,2,10,1])