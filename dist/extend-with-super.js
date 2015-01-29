!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.extendWithSuper=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function isObject(obj) {
  var type = typeof obj;
  return type === 'function' || type === 'object' && !!obj;
}

function isFunction(obj) {
  return typeof obj == 'function' || false;
}

function makeSuper(sourceProp, objProp) {

  var Class = function() {
    this._super = objProp;
  };

  var tmpClass = new Class();

  return function() {
    return sourceProp.apply(tmpClass, Array.prototype.slice.call(arguments));
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

        if (hasOwnProperty.call(source, prop)) {

          if (isFunction(source[prop]) && isFunction(obj[prop])) {
            obj[prop] = makeSuper(source[prop], obj[prop]);
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

},{}]},{},[1])(1)
});