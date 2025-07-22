let arr = [3, 5,66, 755, 4,366]
let max = arr[0]

for(let i=0; i<arr.length; i++){
    if(max<arr[i]){
        max=arr[i]
    }
}
console.log(max)