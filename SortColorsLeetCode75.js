let arr = [0, 1, 0, 2, 1, 0, 1, 2, 0];
// sabse pehle sare zero fir sare 1 fir sare 2 with sorting library function..

let i=j=0; let k = arr.length-1;
while(i<k){
    if(arr[i]==0){  // sare 0 left par rakh diye..
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        i++;
        j++;
    }
    else if(arr[i]==2){ // sare 2 right par rakh diye..
        let temp = arr[k];
        arr[k] = arr[i];
        arr[i] = temp;
        k--;
    }
    else{
        i++;
    }

}
console.log(arr);