/* eslint security/detect-non-literal-require: 0 */
const glob = require('glob');
const _ = require('lodash');

module.exports = {
    getListFuncProblem(path) {
        return _.flow([_.partialRight(_.map, item => require(item))])(glob.sync(path));
    },
};
