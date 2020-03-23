// Binary Search Algorithm
// O(log n)

const arr = [4,8,9,6,4,7,5,3]

const binarySearch = (array, target) => {
  let startIndex = 0;
  let endIndex = array.length - 1;
  let middleIndex;
  while(startIndex <= endIndex) {
    middleIndex = Math.floor((startIndex + endIndex) / 2);
    if(target === array[middleIndex]) {
      console.log("Target was found at index " + middleIndex);
      return middleIndex
    } else if(target < array[middleIndex]) {
      console.log("Searching the left side of Array")
      startIndex = middleIndex + 1;
    } else {
      console.log("Searching the right side of array")
      endIndex = middleIndex - 1;
    }
  }
  return "Target not Found"
}

binarySearch(arr,2)