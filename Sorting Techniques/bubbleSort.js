// Comparison based sorting.
// More number of swap = bubbleSort.
// taking largest element at the extreme right

function bubbleSort(arr){
    let swapped = false;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;

                swapped = true;
            }
        }
        if(!swapped){
            break;
        }
    }
}
let arr = [1, 4, 2, 5, 3, 7, 9, 8, 6];
bubbleSort(arr);
console.log(arr);