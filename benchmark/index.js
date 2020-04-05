const glob = require('glob');
const _ = require('lodash');

const listFunc = _.map(glob.sync(`${process.cwd()}/benchmark/**/*.benchmark.js`), item => require(item));
_.forEach(listFunc, func => func);
