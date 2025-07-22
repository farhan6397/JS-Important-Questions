let arr = [0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0];

let i = 0, j = 0;

for(let i=0; i<arr.length; i++){
    if(arr[i]==0){
        let temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp;
        j++;
    }
    
}
console.log(arr)