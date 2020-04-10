const Benchmark = require('benchmark');

const suite = new Benchmark.Suite();
const _ = require('lodash');
const { getListObjectProblem } = require('../../../src/helper/utils');
const dataIntNumber = require('../../../src/tests/easy/problem1/data/int_number.json');
const dataFloatNumber = require('../../../src/tests/easy/problem1/data/float_number.json');

const listObj = getListObjectProblem(`${process.cwd()}/src/easy/problem1/**/solution.js`);
const main = () => {
    _.forEach(listObj, value => {
        suite.add(
            `Thư mục ${value.dir} với mode ${value.mode} trong file solution.js với function ${value.nameFunc}`,
            () => {
                _.forEach(_.values(dataIntNumber), item => {
                    value.run(item.input.arr, item.input.k);
                });
                _.forEach(_.values(dataFloatNumber), item => {
                    value.run(item.input.arr, item.input.k);
                });
            },
        );
    });
    suite
        .on('cycle', event => {
            console.log(String(event.target));
        })
        .on('complete', function() {
            console.log(`Nhanh nhất là ${this.filter('fastest').map('name')}`);
        })
        .run({ async: true });
};
main();
module.exports = main;
