// function twoSum(arr, target) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[i] + arr[j] === target) {
//                 return [i,j];
//             }
//         }
//     }
// }

function twoSum(arr, target) {
    arr = arr.map((num, index) => ({ num, index }));
    arr.sort((a, b) => a.num - b.num);
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        const sum = arr[left].num + arr[right].num;
        if (sum === target) {
            return [arr[left].index, arr[right].index];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
}

let arr = [10, 5, 7, 6, 8, 9, 1];
let target = 9;
console.log(twoSum(arr, target)); // Output: [2, 6]