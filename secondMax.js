let arr = [2, 4, 6, 7, 8, 9 ,0, 12, 12, 10];

let max = -Infinity;
let sMax = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        sMax = max;
        max = arr[i];
    } else if (arr[i] > sMax && arr[i] < max) {
        sMax = arr[i];
    }
}
console.log(sMax);
