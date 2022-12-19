console.log(hasDuplicate([1,2,3,-1,3]));
console.log(hasDuplicate([1,2,3,-1]));

const hasDuplicate = (arr) => new Set(arr).size != arr.length