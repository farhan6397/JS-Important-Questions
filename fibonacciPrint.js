// Using Loop.
// it is in single line...  0 1 1 2 3 5 8 13 21 34
// let n = 10;

// let a = 0;
// let b = 1;

// let result = [a, b];

// for(let i=2; i<n; i++){
//     let next = a+b;
//     result.push(next);
//     a=b;
//     b=next;
// }
// console.log(result.join(" "))

// it is in every time new line.. 

// let n = 10;  // number of terms
// let a = 0, b = 1;

// console.log(a);
// console.log(b);

// for (let i = 2; i < n; i++) {
//     let next = a + b;
//     console.log(next);
//     a = b;
//     b = next;
// }

// Using Recursion...

let n = 10;
function fibonacci(n){
    if(n==0 || n==1){
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}
for(let i=0; i<n; i++){
    console.log(fibonacci(i));
}