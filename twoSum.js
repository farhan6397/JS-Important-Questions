function twoSum(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === target) {
                return [i,j];
            }
        }
    }
}

let arr = [10, 5, 7, 6, 8, 9, 1];
let target = 8;
console.log(twoSum(arr, target)); // Output: [2, 6]