const isFloat = require('../is_float');

const run = (arr, k) => {
    for (let i = 0, size = arr.length; i < size - 1; i += 1) {
        for (let j = i + 1; j < size; j += 1) {
            const total = arr[parseInt(i, 10)] + arr[parseInt(j, 10)];
            if (isFloat(total) && isFloat(k)) {
                const getLengthDecimal = Number(k)
                    .toString()
                    .split('.')[1].length;
                const roundTotal = parseFloat(Number(total).toFixed(getLengthDecimal));
                if (roundTotal === k) return true;
            } else if (arr[parseInt(i, 10)] + arr[parseInt(j, 10)] === k) return true;
        }
    }
    return false;
};
const result = run([0.1, 0.2], 0.3);
console.log(result);
module.exports = run;
