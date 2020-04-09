const run = arr => {
    let result = 1;
    function multiplicationArray(value) {
        result *= value;
    }
    arr.forEach(multiplicationArray);
    return arr.map(x => result / x);
};

module.exports = run;
