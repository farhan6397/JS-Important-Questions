// Comparison based sorting.
// just like sorting playing cards
// Better for almost or fully sort.
// It is Stable sort.

function insertionSort(arr){
    for(let i=0; i<arr.length; i++){
        let j = i;
        while(j>0 && arr[j]<arr[j-1]){
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
            j--;
        }
    }
}
let arr = [1, 4, 2, 5, 3, 7, 9, 8, 6];
insertionSort(arr);
console.log(arr);