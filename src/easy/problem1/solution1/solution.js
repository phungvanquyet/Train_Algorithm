const run = (arr, k) => {
    for (let i = 0, size = arr.length; i < size - 1; i += 1) {
        for (let j = i + 1; j < size; j += 1) {
            if (arr[parseInt(i, 10)] + arr[parseInt(j, 10)] === k) return true;
        }
    }
    return false;
};
module.exports = run;
