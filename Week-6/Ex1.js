function getMaxSum(arr) {
    let maxSum = 0;
    let currentSum = 0;
    for (let e of arr) {
        currentSum += e;
        if ( currentSum < e) {
            currentSum = e;
        }
        if (maxSum <= currentSum) {
            maxSum = currentSum;
        } 
    }
    return maxSum;
}

let arr = [2,4,-10,7,4,-3,2,2];
// arr = [1,2,3,4,-10];
arr = [-2,-3,4,-1,-2,1,5,-3];
console.log("max sum from sequence of array is: ",getMaxSum(arr));