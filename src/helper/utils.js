/* eslint security/detect-non-literal-require: 0 */
const glob = require('glob');
const _ = require('lodash');

const getMode = (arr, mode = ['easy', 'medium', 'hard']) => {
    for (let i = 0, size = arr.length; i < size; i += 1) {
        if (_.findIndex(mode, el => el === arr[parseInt(i, 10)]) !== -1) {
            return arr[parseInt(i, 10)];
        }
    }
    return 'unknown';
};
module.exports = {
    getMode,
    getListObjectProblem(path) {
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
    },
    getListFuncProblem(path) {
        return _.flow([_.partialRight(_.map, item => require(item))])(glob.sync(path));
    },
};
