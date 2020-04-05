const glob = require('glob');
const _ = require('lodash');

const getListFuncProblem = path => {
    return _.flow([_.partialRight(_.map, item => require(item))])(glob.sync(path));
};
describe('TestCase Easy', () => {
    describe('TestCase Problem 1', () => {
        const listObj = getListFuncProblem(`${process.cwd()}/src/easy/problem1/**/solution.js`);
        it('Test Success', async () => {
            _.forEach(listObj, func => {
                expect(func([10, 15, 3, 7], 17)).toBeTruthy();
            });
        });
    });
});
