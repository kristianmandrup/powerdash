var str = require('underscore.string')
var _ = require('lodash')
var S = require('string')
var _addons = require('lodash-addons')


var combined = _.mixin(str.exports());
combined = _.mixin(_addons)

var _S = S('s').constructor
var sProto =_S.prototype

var funs = Object.keys(sProto)

var wrappedFuns = funs.reduce((obj, funName) => {
  console.log(funName)
  let fun = function (s) {
    let res = S(s)[funName]()
    return (funName.match(/^is/)) ? res : res.s
  }
  obj[funName] = fun
  return obj
}, {})

combined = _.mixin(wrappedFuns);

module.exports = combined