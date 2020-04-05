const _ = require('lodash');

const run = (arr, k) => {
    const size = arr.length;
    let result = [];
    _.forEach(_.slice(arr, 0, size - 1), (valueBefore, key) => {
        const check = _.compact(_.map(_.slice(arr, key + 1, size), item => item + valueBefore === k));
        result = _.concat(result, check);
    });
    return result.length > 0;
};
module.exports = run;
