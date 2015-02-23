var scope = this;

describe('Extend with super: main functionality.', function() {

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

  var test3Obj = extendWithSuper(extendedObj, testObj, test2Obj);

  it('testing this._super functionality, return value', function() {
    expect(test3Obj.funcProp()).to.equal('hello world');
  });

  it('testing this._super functionality, extended object', function() {
    expect(extendedObj.funcProp()).to.equal('hello world');
  });

  it('testing normal extending functionality, return value', function() {
    expect(test3Obj.notFuncProp).to.equal('should not be testing');
  });

  it('testing normal extending functionality, extended object', function() {
    expect(extendedObj.notFuncProp).to.equal('should not be testing');
  });

  it('testing normal extending functionality, return value', function() {
    expect(test3Obj.notFuncProp).to.equal('should not be testing');
  });

  it('testing normal extending functionality, extended object', function() {
    expect(extendedObj.notFuncProp).to.equal('should not be testing');
  });

  it('testing multiple argument functionality, with arguments, return value', function() {
    expect(test3Obj.funcPropWithArgs('Well', 'hello!')).to.equal('Hello world! Well hello!');
  });

  it('testing multiple argument functionality, with arguments, extended object', function() {
    expect(extendedObj.funcPropWithArgs('Well', 'hello!')).to.equal('Hello world! Well hello!');
  });
});

describe('Extend with super: extending with 3 args functionality.', function() {

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

  var test3Obj = {
    notFuncProp: 'should not, not be testing',
    funcProp: function() {
      var helloWorld = this._super();
      return helloWorld + '!';
    },
    funcPropWithArgs: function(arg1, arg2) {
      var original = this._super('Hi', 'again!');
      return original + ' ' + arg1 + ' ' + arg2;
    }
  };

  var extendedObj = {};

  var test4Obj = extendWithSuper(extendedObj, testObj, test2Obj, test3Obj);

  it('original method of arguments after first should remain unmodified', function() {
    expect(testObj.notFuncProp).to.equal('testing');
    expect(test2Obj.notFuncProp).to.equal('should not be testing');
    expect(test3Obj.notFuncProp).to.equal('should not, not be testing');
  });

  it('testing this._super functionality with 3 objects, return value', function() {
    expect(test4Obj.funcProp()).to.equal('hello world!');
  });

  it('testing this._super functionality with 3 objects, extended object', function() {
    expect(extendedObj.funcProp()).to.equal('hello world!');
  });

  it('testing this._super functionality with 3 objects, functions that take args, return value', function() {
    expect(test4Obj.funcPropWithArgs('Go', 'away!')).to.equal('Hello world! Hi again! Go away!');
  });

  it('testing this._super functionality with 3 objects, functions that take args, extended object', function() {
    expect(extendedObj.funcPropWithArgs('Go', 'away!')).to.equal('Hello world! Hi again! Go away!');
  });

  it('testing normal extending functionality with 3 objects, return value', function() {
    expect(test3Obj.notFuncProp).to.equal('should not, not be testing');
  });

  it('testing normal extending functionality with 3 objects, extended object', function() {
    expect(extendedObj.notFuncProp).to.equal('should not, not be testing');
  });
});

describe('Extend with super, bad input', function() {

  var testObj = {
    notFuncProp: 'testing',
    funcProp: function() {
      return 'hello';
    }
  };

  var test2Obj = {
    notFuncProp: 'should not be testing',
    funcProp: function() {
      var hello = this._super();
      return hello + ' world';
    }
  };

  var extendedObj = {};

  var test3Obj = extendWithSuper(false, {}, extendedObj, testObj, test2Obj);

  it('testing this._super functionality with bad input as first arg, return value', function() {
    expect(test3Obj.funcProp).to.equal(undefined);
  });

  it('testing this._super functionality with bad input as first arg, extended object', function() {
    expect(extendedObj.funcProp).to.equal(undefined);
  });

  it('testing normal extending functionality bad input as first arg, return value', function() {
    expect(test3Obj.notFuncProp).to.equal(undefined);
  });

  it('testing normal extending functionality bad input as first arg, extended object', function() {
    expect(extendedObj.notFuncProp).to.equal(undefined);
  });

  var extendedObj2 = {};
  var test4Obj = extendWithSuper(extendedObj2, extendedObj, testObj, false, test2Obj);

  it('testing this._super functionality with bad input as third arg, return value', function() {
    expect(test4Obj.funcProp()).to.equal('hello world');
  });

  it('testing this._super functionality with bad input as third arg, extended object', function() {
    expect(extendedObj2.funcProp()).to.equal('hello world');
  });

  it('testing normal extending functionality bad input as third arg, return value', function() {
    expect(test4Obj.notFuncProp).to.equal('should not be testing');
  });

  it('testing normal extending functionality bad input as third arg, extended object', function() {
    expect(extendedObj2.notFuncProp).to.equal('should not be testing');
  });

  describe('Extending array of functions test', function() {

    var testArr = [function() {
      return 'hello';
    }];

    var test2Arr = [function() {
      var hello = this._super();
      return hello + ' world';
    }];

    var extendedArr = [function() {}];

    var test3Arr = extendWithSuper(extendedArr, testArr, test2Arr);

    it('should extend arrays of functions correctly', function() {
      expect(test3Arr[0]()).to.equal('hello world');
    });

  });

  describe('Should receive current scope of execution', function() {

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

    var super_ = new Super();

    it('should not create the property _super on the created class', function() {
      expect(super_._super).to.equal(undefined);
    });

    it('should execute as expected', function() {
      expect(super_.funcProp()).to.equal('hello world should not be testing');
    });

  });

  describe('Should not modify the global scope', function() {

    it('should extend arrays of functions correctly', function() {
      expect(scope._super).to.equal(undefined);
    });

  });

});
