function merge(arr, l, mid, r) {
    let n1 = mid - l + 1;
    let n2 = r - mid;

    // Temporary arrays
    let left = new Array(n1);
    let right = new Array(n2);

    // Copying data to left[]
    for (let i = 0; i < n1; i++) {
        left[i] = arr[l + i];
    }

    // Copying data to right[]
    for (let j = 0; j < n2; j++) {
        right[j] = arr[mid + 1 + j];
    }

    // Merge the temp arrays back into arr[l...r]
    let i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }

    // Copy remaining elements of left[]
    while (i < n1) {
        arr[k] = left[i];
        i++;
        k++;
    }

    // Copy remaining elements of right[]
    while (j < n2) {
        arr[k] = right[j];
        j++;
        k++;
    }
}

function mergeSort(arr, l, r) {
    if (l < r) {
        let mid = Math.floor((l + r) / 2); // (l+r)/2 = decimal number

        mergeSort(arr, l, mid);
        mergeSort(arr, mid + 1, r);

        merge(arr, l, mid, r);
    }
}

// Driver code
let arr = [50, 20, 40, 90, 88, 11, 13];

console.log("Before sorting:", arr);

mergeSort(arr, 0, arr.length - 1);

console.log("After sorting:", arr);

