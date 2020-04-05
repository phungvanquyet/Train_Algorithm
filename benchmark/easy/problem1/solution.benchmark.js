const glob = require('glob');
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite();
const _ = require('lodash');

const getMode = (arr, mode = ['easy', 'medium', 'hard']) => {
    for (let i = 0, size = arr.length; i < size; i += 1) {
        if (_.findIndex(mode, el => el === arr[i]) !== -1) {
            return arr[i];
        }
    }
    return 'unknown';
};
const getListFuncProblem = path => {
    return _.flow([
        _.partialRight(_.map, item =>
            _.assign(
                {},
                {
                    dir: _.split(item, '/')[_.split(item, '/').length - 2],
                    mode: getMode(_.split(item, '/')),
                    run: require(item),
                    nameFunc: require(item).name,
                },
            ),
        ),
    ])(glob.sync(path));
};
const listObj = getListFuncProblem(`${process.cwd()}/src/easy/problem1/**/solution.js`);
const main = () => {
    _.forEach(listObj, value => {
        suite.add(
            `Thư mục ${value.dir} với mode ${value.mode} trong file solution.js với function ${value.nameFunc}`,
            () => {
                value.run([10, 15, 3, 7], 17);
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
