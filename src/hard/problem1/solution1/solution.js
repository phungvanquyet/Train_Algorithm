/* eslint-disable no-param-reassign */
const _ = require('lodash');

const run = arr => {
    const result = [];
    _.forEach(arr, (value, key) => {
        result.push(
            _.reduce(
                _.filter(
                    _.map(arr, (item, index) => (index !== key ? item : null)),
                    item => item !== null,
                ),
                (multiple, n) => {
                    multiple *= n;
                    return multiple;
                },
                1,
            ),
        );
    });
    return result;
};
module.exports = run;
