// This function removes duplicate values from an array using a Set.
// It takes an array as input and returns a new array with unique values.

let arr = [1, 2, 3, 4, 5, 1, 2, 3];

function removeDuplicates(array) {
    return [...new Set(array)];
}

// Using forEach to remove duplicates
let uniqueArr = [];
function removeDuplicates(arr) {
  arr.forEach((item) => {
    if (!uniqueArr.includes(item)) {
      uniqueArr.push(item);
    }
  });
  return uniqueArr;
}

console.log(removeDuplicates(arr)); // Output: [1, 2, 3, 4, 5]
