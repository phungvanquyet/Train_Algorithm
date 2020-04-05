const run = (arr, k) => {
    for (let i = 0, size = arr.length; i < size - 1; i += 1) {
        if (arr.slice(i + 1).includes(k - arr[parseInt(i, 10)])) return true;
    }
    return false;
};
module.exports = run;
