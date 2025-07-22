let arr = [1, 2, 3, 4, 5];

let last = arr.length-1;
let copy = arr[last];

for(let i=arr.length-1; i>0; i--){
    arr[i] = arr[i-1];
}
arr[0] = copy;

console.log(arr);
