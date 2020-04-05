/* eslint security/detect-non-literal-require: 0 */
const glob = require('glob');
const _ = require('lodash');
const dataPositiveNumbers = require('./data/number_int.json');

const getListFuncProblem = path => {
    return _.flow([_.partialRight(_.map, item => require(item))])(glob.sync(path));
};
describe('TestCase Easy', () => {
    describe('TestCase Problem 1', () => {
        const listObj = getListFuncProblem(`${process.cwd()}/src/easy/problem1/**/solution.js`);
        it('Test with positive numbers', async () => {
            _.forEach(listObj, func => {
                _.forEach(_.values(dataPositiveNumbers), item => {
                    expect(func(item.input.arr, item.input.k)).toBe(item.output);
                });
            });
        });
    });
});
