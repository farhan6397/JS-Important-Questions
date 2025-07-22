let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8, 10];

let mergeArray = new Array(arr1.length + arr2.length);

let i = j = k = 0;

while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
        mergeArray[k] = arr1[i];
        i++;
        k++;
    }
    else if(arr1[i]>arr2[j]){
        mergeArray[k] = arr2[j];
        j++;
        k++;
    }    
}
while (i<arr1.length) {
    mergeArray[k] = arr1[i];
    i++;
    k++;
}
while (j<arr2.length) {
    mergeArray[k] = arr2[j];
    j++;
    k++;
}
console.log(mergeArray);