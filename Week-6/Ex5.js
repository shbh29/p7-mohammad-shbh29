
//SC: O(1)
//TC: O(n^2)

function isPairWithGivenDiffPresent(numbers, diff) {
    let isPresent = false;
    for(let n of numbers) {
        let currentDiff = n - diff;
        if (numbers.includes(currentDiff)) {
            isPresent = true;
            break;
        }
    }
    return isPresent;
}

let numbers = [5,10,3,2,50,80]
let diff = 78;
console.log(`numbers pair in array: ${numbers} for target diff value is : ${diff} is : ${isPairWithGivenDiffPresent(numbers, diff)}`);