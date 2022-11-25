
function memoize(fn) {
    let cache = new Map();
    return function(...args) {
        const key = args.toString();
        console.log(`key formed is: ${key}`);
        if (cache.has(key)) {
            console.log(`key found in cache`);
            console.log(`cache printing: ${cache.get(key)}`);
            return cache.get(key);
        }
        console.log(`key not found in cache`);
        let res = fn(...args);
        console.log(`result caculated as ${res}`);
        cache.set(key, res);
        console.log(`cache printing: ${cache.key}`);
        return res;
    }
}

function sum(a, b) {
    return a + b;
}

const memoizedSum = memoize(sum);

console.log(memoizedSum(200000000000,50000000000000));
console.log(memoizedSum(200000000000,50000000000000));


