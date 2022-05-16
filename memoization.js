function addTo80(n) {
    console.log('long time');
    return n + 80;
}

// console.log(addTo80(5));
// console.log(addTo80(5));
// console.log(addTo80(5));

let cache = {};
function memoizedAddTo80(n) {
    if (n in cache) {
        return cache[n];
    }
    console.log('long time');
    return cache[n] = n + 80;
}

console.log(memoizedAddTo80(5));
console.log(memoizedAddTo80(5));
console.log(memoizedAddTo80(5));
