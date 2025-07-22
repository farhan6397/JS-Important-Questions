// 1. At every iteration we get smallest Element at exteme left.
// 2. time complexity = O(n^2).
// 3. Space complexity = O(1)
// 4. Comparison based sorting.
// 5. More number of swap = bubbleSort.
//    Single swap in every iteration = Selection Sort. 
// 6. Better than bubble sort.

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min_idx = i;
    // min_idx is taking the index of minimum element of every iteration..
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      }
    } 
    if (min_idx !== i) {
      let temp = arr[i];
      arr[i] = arr[min_idx];
      arr[min_idx] = temp;
    }
  }
}
let arr = [4, 2, 5, 3, 7, 9, 8, 6];
selectionSort(arr);
console.log(arr);
