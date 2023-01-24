//SC: O(1)
//TC: O(mxn) where m is total number of row of array 
//           and n is total number of column of array.

//spiral order traversal.
function goSpiral(arr) {
    // I know I need to traverse in one direction at a time.
    // I know we need to go right, then down, then left, then up.
    let i = 0, j = -1; // need to traversal variable.
    let jBorderEnd = arr[0].length - 1;
    let iBorderEnd = arr.length - 1;
    let iBorderStart = 1, jBorderStart = 0;
    
    while(iBorderStart <= iBorderEnd || jBorderStart <= jBorderEnd) {
        while(j < jBorderEnd) {
            j = goRight(arr, i, j);
        }
        jBorderEnd--;
        while(i < iBorderEnd) {
            i = goDown(arr, i, j);
        }
        iBorderEnd--;
        while(j > jBorderStart) {
            j = goLeft(arr, i, j);
        }
        jBorderStart++;
        while(i > iBorderStart) {
            i = goUp(arr, i, j);
        }
        iBorderStart++;
    }
}

function goRight(arr, i, j) {
    console.log(` ${arr[i][j+1]}`);
    return j+1;
}
function goDown(arr, i, j) {
    console.log(` ${arr[i+1][j]}`);
    return i+1;
}
function goLeft(arr, i, j) {
    console.log(` ${arr[i][j-1]}`);
    return j-1;
}
function goUp(arr, i, j) {
    console.log(` ${arr[i-1][j]}`);
    return i-1;
}

let arr = [[1,2,3],[4,5,6],[7,8,9]];
arr = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];
goSpiral(arr);