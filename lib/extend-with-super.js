'use strict';

function isObject(obj) {
  var type = typeof obj;
  return type === 'function' || type === 'object' && !!obj;
}

function isFunction(obj) {
  return typeof obj == 'function' || false;
}

function makeSuper(sourceProp, objProp) {

  /* global window */
  /*jshint validthis:true */
  if (!this || this === global) {
    var Class = function() {
      this._super = objProp;
    };

    var tmpClass = new Class();

    return function() {
      return sourceProp.apply(tmpClass, Array.prototype.slice.call(arguments));
    };
  }

  this._super = objProp;

  var scope = this;

  return function() {
    return sourceProp.apply(scope, Array.prototype.slice.call(arguments));
  };
}

function extendWithSuper() {

  var obj = arguments[0];

  if (!obj) {
    return false;
  }

  if (!isObject(obj)) {
    return obj;
  }

  var source;
  var prop;
  var length = arguments.length;

  for (var i = 1; i < length; i++) {

    source = arguments[i];

    if (isObject(source)) {

      for (prop in source) {

        if (Object.hasOwnProperty.call(source, prop)) {

          if (isFunction(source[prop]) && isFunction(obj[prop])) {
            /*jshint validthis:true */
            obj[prop] = makeSuper.apply(this, [source[prop], obj[prop]]);
            obj[prop].prototype = source[prop].prototype;
          } else {
            obj[prop] = source[prop];
          }
        }
      }
    }
  }
  return obj;
}

module.exports = extendWithSuper;
