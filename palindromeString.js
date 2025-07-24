// method -1

// let s = "nitin";
// let isPalindrome = true;


// // for(let i=s.length-1; i>=0; i--){
// //     rev = rev + s.charAt(i);
// // }

// let first=0, last=s.length-1;
// while(first<last){
//     if(s.charAt(first) != s.charAt(last)){
//        isPalindrome = false;
//        break;
//     }
//     first++;
//     last--;
// }

// if(isPalindrome == true){
//     console.log("palindrome");
// }
// else{
//     console.log("not palindrome");
    
// }

// method-2 
// Easy way.

let str = "naman";

function isPalindrome(str){
    rev = str.split("").reverse().join("");
    return str === rev;
}

console.log(isPalindrome(str));