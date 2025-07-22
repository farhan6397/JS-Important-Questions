let arr = [1, 2, 3, 4, 5];
let k = 2;
k = k % arr.length;

function reverse(f, l) {
  while (f < l) {
    let temp = arr[f];
    arr[f] = arr[l];
    arr[l] = temp;
    f++;
    l--;
  }
}

reverse(0, k - 1);
reverse(k, arr.length - 1);
reverse(0, arr.length - 1);

console.log(arr);
