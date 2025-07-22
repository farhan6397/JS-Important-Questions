var trap = function(height) {
    let ans=0;
    let n = height.length;
    let left = new Array(n);
    let right = new Array(n);
    let maxLeft = height[0];
    let maxRight = height[n-1];
    left[0] = maxLeft;
    right[n-1] = maxRight;

    for(let i=1; i<n; i++){
        maxLeft = Math.max(height[i], maxLeft);
        left[i] = maxLeft;
    }
    for(let i=n-2; i>=0; i--){
        maxRight = Math.max(height[i], maxRight)
        right[i] = maxRight;
    }
    for(let i=0; i<n; i++){
       ans = ans+Math.min(left[i], right[i]) - height[i];
    }
    return ans;
};
let height = [4,2,0,3,2,5];
console.log(trap(height));