function sort012(arr) {
    let i = 0;
    let iteration = 0;
    while(iteration < arr.length) {
        console.log(`iteration element: ${arr[i]}`);
        if (arr[i]==0) {
            let e = arr.splice(i,1);
            arr.unshift(e);
            i++;
        } else if (arr[i]==1) {
            // just skip to next element
            i++;
        } else if (arr[i]==2) {
            let e = arr.splice(i,1);
            arr.push(e);
            // next element will be element of current index. So, no i++;
        } else {
            throw new Error(`Invalid input array element: ${arr[i]}`);
        }
        iteration++;
    }
    
    return arr;
}

let arr = [1,0,0,2,1,0,2,2,1,0];
console.log(`${arr} array has now been sorted as: ${sort012(arr)}`);