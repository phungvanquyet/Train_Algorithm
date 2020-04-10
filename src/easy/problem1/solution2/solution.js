const isFloat = require('../is_float');

let maxlength = 0;
function getMax(value) {
    if (
        isFloat(value) &&
        value
            .toString()
            .split('.')
            .pop().length > maxlength
    ) {
        maxlength = value
            .toString()
            .split('.')
            .pop().length;
    }
}
const run = (arr, k) => {
    arr.forEach(getMax);
    for (let i = 0, size = arr.length; i < size - 1; i += 1) {
        if (arr.slice(i + 1).includes(parseFloat((k - arr[i]).toFixed(maxlength)))) return true;
    }
    return false;
};

module.exports = run;
