const Benchmark = require('benchmark');

const suite = new Benchmark.Suite();
const _ = require('lodash');
const { getListObjectProblem } = require('../../../src/helper/utils');
const data = require('../../../src/tests/hard/problem1/data/sample.json');

const listObj = getListObjectProblem(`${process.cwd()}/src/hard/problem1/**/solution.js`);
const main = () => {
    _.forEach(listObj, value => {
        suite.add(
            `Thư mục ${value.dir} với mode ${value.mode} trong file solution.js với function ${value.nameFunc}`,
            () => {
                _.forEach(_.values(data), item => {
                    value.run(item.input);
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
