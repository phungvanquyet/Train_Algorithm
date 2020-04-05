const _ = require('lodash');
const { getListFuncProblem } = require('../../../helper/utils');
const sample = require('./data/sample.json');

describe('Test case Hard', () => {
    describe('Test case Problem 1', () => {
        const listObj = getListFuncProblem(`${process.cwd()}/src/hard/problem1/**/solution.js`);
        it('Test with array integer number', async () => {
            _.forEach(listObj, func => {
                _.forEach(_.values(sample), item => {
                    expect(func(item.input)).toEqual(item.output);
                });
            });
        });
    });
});
