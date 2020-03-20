/**
 *
 * QuickSort Algorithm ---- divide and conquer
 * Pseudo Code
 * Pivot = First Element
 * Rest = Rest of the elements
 * smalleritems = elements in the lesser than pivot
 * largerItems = remaining items in rest
 * sort(smaller),pivot,sort(larger)
 *
 */

// const items = [1, 4, 2, 8, 6];
// pivot = 1
// there are no smaller items,
// [1, 4, 2, 8, 6]
// let's do second pass for the rest of elements
// pivot = 4
// smaller = 2
// larger = 8, 6
// arranging: [1, 2, 4, 8, 6]
// another pass:
// pivot = 8
// smaller = 6
// there's no larger element
// final sorted array: [1, 2, 4, 6, 8]

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const [pivot, ...rest] = arr; // [1,2,3,4,5] --> pivot = 1, rest = [2,3,4,5]
  const smaller = rest.filter(x => x < pivot);
  const larger = rest.filter(x => x >= pivot);
  return [...sort(smaller), pivot, ...sort(larger)];
}
