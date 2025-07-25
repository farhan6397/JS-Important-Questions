// method-1
// function largest(arr){
//     arr.sort((a,b) => {
//         return a-b;
//     });
//     return arr[arr.length-1];
// }
// let arr = [1,3,4,12,5,7,9]
// console.log(largest(arr))

// method-2

function largest(arr){
    let l = 0;
    let h = arr.length - 1;
    let large = -Infinity;
    
    while (l <= h) {
        large = Math.max(large, arr[l], arr[h]);
        l++;
        h--;
    }
    return large;

}

let arr = [1, 3, 4, 2, 6, 8, 0];
console.log(largest(arr)); // Output: 8
