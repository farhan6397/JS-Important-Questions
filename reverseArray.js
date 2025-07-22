let arr = [2, 4, 6, 7, 8, 9, 1, 12]

let f=0;
let l=arr.length-1;
let temp;
while(f<l){
    temp=arr[f];
    arr[f]=arr[l]
    arr[l]=temp;
    f++;
    l--;
}
console.log(arr)