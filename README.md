# extend-with-super

[![NPM version](https://badge.fury.io/js/extend-with-super.svg)](http://badge.fury.io/js/extend-with-super)
[![Build Status](https://travis-ci.org/michaelBenin/extend-with-super.svg)](https://travis-ci.org/michaelBenin/extend-with-super)[![Coverage Status](https://coveralls.io/repos/michaelbenin/extend-with-super/badge.png)](https://coveralls.io/r/michaelbenin/extend-with-super)
[![Dependency status](https://david-dm.org/michaelbenin/extend-with-super/status.png)](https://david-dm.org/michaelbenin/extend-with-super#info=dependencies&view=table)
[![Dev Dependency Status](https://david-dm.org/michaelbenin/extend-with-super/dev-status.png)](https://david-dm.org/michaelbenin/extend-with-super#info=devDependencies&view=table)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

[![NPM](https://nodei.co/npm/extend-with-super.png?downloads=true&stars=true)](https://nodei.co/npm/extend-with-super/)


Quickstart Example & Description

```javascript

// Extend object literals with function properties to have a
// _super method that references the original function, instead
// of overwriting it.
// (No dependencies, but borrowed methods from underscore.js.

var sampleObj = {
  funcProp: function(){
    return 'Hello';
  }
};

var sampleObj2 = {
  funcProp: function(){
    var originalMethod = this._super();
    return originalMethod + ' World';
  }
};

var sampleObj3 = extendWithSuper(sampleObj, sampleObj2);

sampleObj3.funcProp(); // Hello World

```

## Usage

CommonJS in npm.

Bower in UMD ~ Global is `extendWithSuper`.

In browser weight

    < 1kb
    gzip: 606 bytes

## Contributing

Commands:

    npm run build
    npm run test

Any contributions must be accompanied with tests.

Make a pull request to master.

Main functionality influenced by underscore.js.

License MIT

