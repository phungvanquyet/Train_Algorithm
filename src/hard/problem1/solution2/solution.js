// eslint-disable-next-line no-unused-vars
const _ = require('lodash');

const run = arr => {
    let result = 1;
    function multiplicationArray(value) {
        result *= value;
    }
    // eslint-disable-next-line no-use-before-define
    arr.forEach(multiplicationArray);
    return arr.map(x => result / x);
};

module.exports = run;
