var extendWithSuper = require('../lib/extend-with-super');

function extendObjectLiterals() {
  var testObj = {
    notFuncProp: 'testing',
    funcProp: function() {
      return 'hello';
    },
    funcPropWithArgs: function(arg1, arg2) {
      return arg1 + ' ' + arg2;
    }
  };

  var test2Obj = {
    notFuncProp: 'should not be testing',
    funcProp: function() {
      var hello = this._super();
      return hello + ' world';
    },
    funcPropWithArgs: function(arg1, arg2) {
      var original = this._super('Hello', 'world!');
      return original + ' ' + arg1 + ' ' + arg2;
    }
  };
  var extendedObj = {};
  return extendWithSuper(extendedObj, testObj, test2Obj);
}

function extendArrays() {

  var testArr = [function() {
    return 'hello';
  }];

  var test2Arr = [function() {
    var hello = this._super();
    return hello + ' world';
  }];

  var extendedArr = [function() {}];

  return extendWithSuper(extendedArr, testArr, test2Arr);
}

function extendingInScope() {

  function Super() {}

  extendWithSuper.apply(Super, [Super.prototype, {
    notFuncProp: 'testing',
    funcProp: function() {
      return 'hello';
    }
  }, {
    notFuncProp: 'should not be testing',
    funcProp: function() {
      var notFuncProp = this.prototype.notFuncProp;
      var hello = this._super();
      return hello + ' world ' + notFuncProp;
    }
  }]);

  return new Super();
}

module.exports = {
  name: 'Extend with super benchmark progress.',
  tests: [{
    name: 'Extending object literals.',
    fn: extendObjectLiterals
  }, {
    name: 'Extending arrays.',
    fn: extendArrays
  }, {
    name: 'Extending object literals in scope.',
    fn: extendingInScope
  }]
};
