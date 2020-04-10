const run = arr => {
    let result = 1;
    let countZero = 0;
    function multiplicationArray(value) {
        if (value !== 0) {
            result *= value;
        } else {
            countZero += 1;
        }
    }
    function getResult(value) {
        if (countZero === 0) {
            if (value !== 0) {
                return result / value;
            }
            return result;
        }
        if (countZero === 1) {
            if (value === 0) {
                return result;
            }
            return 0;
        }
        return 0;
    }
    arr.forEach(multiplicationArray);
    return arr.map(getResult);
};

module.exports = run;
