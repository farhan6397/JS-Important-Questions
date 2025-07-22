let arr = [2, 4, 6, 7, 8, 9 ,0, 12, 12, 10]

let max = Math.max(arr[0], arr[1])
let sMax = Math.min(arr[0], arr[1])

for(let i=2; i<arr.length; i++){
    if(max<arr[i]){
        sMax=max;
        max=arr[i]
    }
    else if(sMax<arr[i] && max!=arr[i]){
        sMax=arr[i]
    }
}
console.log(sMax)

