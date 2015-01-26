'use strict';

var chai = require('chai');
var expect = chai.expect;
var extendWithSuper = require('../../lib/extend-with-super');

global.extendWithSuper = extendWithSuper;
global.expect = expect;

require('../shared/extend-with-super-isomorphic-test.js');
