# extend-with-super

[![NPM version](https://badge.fury.io/js/extend-with-super.svg)](http://badge.fury.io/js/extend-with-super) [![Build Status](https://travis-ci.org/michaelBenin/extend-with-super.svg)](https://travis-ci.org/michaelBenin/extend-with-super) [![Coverage Status](https://coveralls.io/repos/michaelbenin/extend-with-super/badge.png)](https://coveralls.io/r/michaelbenin/extend-with-super)
 [![Dependency status](https://david-dm.org/michaelbenin/extend-with-super/status.png)](https://david-dm.org/michaelbenin/extend-with-super#info=dependencies&view=table) [![Dev Dependency Status](https://david-dm.org/michaelbenin/extend-with-super/dev-status.png)](https://david-dm.org/michaelbenin/extend-with-super#info=devDependencies&view=table) [![Code Climate](https://codeclimate.com/github/michaelBenin/extend-with-super/badges/gpa.svg)](https://codeclimate.com/github/michaelBenin/extend-with-super) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/) [![Codeship Status for michaelBenin/extend-with-super](https://codeship.com/projects/980edb90-87e6-0132-1c4e-2af52e5bc1ec/status)](https://codeship.com/projects/59289/)
[![NPM](https://nodei.co/npm/extend-with-super.png?downloads=true&stars=true)](https://nodei.co/npm/extend-with-super/)

Quickstart Example & Description

```javascript

// Extend object literals with function properties to have a
// _super method that references the original function, instead
// of overwriting it.
// (No dependencies, but borrowed methods from underscore.js.)

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

// Note just like _.extend, only the first argument is modified
var sampleObj3 = extendWithSuper({}, sampleObj, sampleObj2);

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
    npm test

Open a github issue for the bug/enhancement discussion.

Any contributions must be accompanied with tests.

Make a pull request to the develop branch referencing the issue.

Please do not introduce any external dependencies.

Main functionality influenced by underscore.js.


License MIT

