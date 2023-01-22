// getClosestDiff of 3 numbers.
//TC: O(n)
//SC: O(1)

function getClosestSum(arr, target) {
    var closestSum;
    var closestDiff = Infinity;
    var l = 0;
    var m = 1;
    var r = 2;

    //operate on sorted array
    arr.sort((a, b) => a - b);

    while(l >= 0 && m < arr.length && r < arr.length) {
        var currentSum = arr[l] + arr[m] + arr[r];
        var currentDiff = Math.abs(target - currentSum);

        if (closestDiff >= currentDiff) {
            closestDiff = currentDiff;
            closestSum =  currentSum;
        }

        if (target == closestSum) {
            break;
        } else if (currentSum < target && r < arr.length-1) {
            r++;
        } else if (currentSum > target && l > 0) {
            l--;
        } else {
            m++;
            l = m - 1;
            r = m + 1;
        }
    }


    return closestSum;
}


var arr = [-5, -3, 1, 2, 7, 9]
var target = -8;

console.log(`Closest target sum with array ${arr} and target ${target} is ${getClosestSum(arr, target)}`);