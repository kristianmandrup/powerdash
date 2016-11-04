var str = require('underscore.string')
var _ = require('lodash')
var S = require('string')
var _addons = require('lodash-addons')

var combined = _.mixin(str.exports());
combined = _.mixin(_addons)

var _S = S('s').constructor
var sProto =_S.prototype


var uStrFunNames = Object.keys(str.prototype)

for (let key of uStrFunNames) {
  let origFun = str[key]

  function cooolFun() {
    var slicedArgs = Array.prototype.slice.call(arguments);
    var fullArgs = [this.s].concat(slicedArgs)
    var result = origFun.apply(this, fullArgs)
    return new this.constructor(result);
  }

  // avoid overwriting original function of same name
  // prefix function name with '_' if that is the case
  key = sProto[key] ? '_' + key : key
  sProto[key] = cooolFun
}


let stringProto = String.prototype
let jsStringFunNames = ['toLocaleLowerCase', 'toLocaleUpperCase', 'substr', 'substring', 'toUpperCase', 'trim', 'trimLeft', 'trimRight']

for (let key of jsStringFunNames) {
  let origFun = stringProto[key]

  function cooolFun() {
    var slicedArgs = Array.prototype.slice.call(arguments);
    var fullArgs = [this.s].concat(slicedArgs)
    var result = origFun.apply(this, fullArgs)
    return new this.constructor(result);
  }

  // avoid overwriting original function of same name
  // prefix function name with '_' if that is the case
  // only add if available on String.prototype
  if (stringProto[key]) {
    key = sProto[key] ? '_' + key : key
    sProto[key] = cooolFun

  }
}


var SfunNames = Object.keys(sProto)

var wrappedFuns = SfunNames.reduce((obj, funName) => {
  let fun = function (s) {
    let res = S(s)[funName]()
    return (funName.match(/^is/)) ? res : res.s
  }
  obj[funName] = fun
  return obj
}, {})

combined = _.mixin(wrappedFuns);
combined.orig = {
  S: S,
  string: str,
  addons: _addons
}
combined.o = combined.orig

module.exports = combined