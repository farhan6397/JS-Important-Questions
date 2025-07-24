// method -1

let s = "farhan";
let rev = "";
for (let i = s.length - 1; i >= 0; i--) {
  rev = rev + s.charAt(i);
}
console.log(rev);

// method-2

// If you need to reverse a string, you can convert the string into an array of characters using split(''), then call reverse() on the array, and finally use join('') to convert it back into a string.
//  For example, "Hello World".split('').reverse().join('') will produce "dlroW olleH"

let str = "Helllo";

let reverse = str.split("").reverse().join("");
console.log(reverse);
