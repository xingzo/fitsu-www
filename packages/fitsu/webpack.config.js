/* eslint-disable flowtype/require-valid-file-annotation, import/no-commonjs */
'use strict';
const build = require('build');
const environment = require('./environment.json');

module.exports = build(environment);
