function largest(arr){
    arr.sort((a,b) => {
        return a-b;
    });
    return arr[arr.length-1];
}
let arr = [1,3,4,12,5,7,9]
console.log(largest(arr))