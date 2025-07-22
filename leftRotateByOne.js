let arr = [1, 2, 3, 4, 5];

let first = arr[0];
let last = arr.length-1;

for(let i=0; i<arr.length-1; i++){
    arr[i] = arr[i+1];
}
arr[last] = first;

console.log(arr);
