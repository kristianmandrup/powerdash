var _ = require('../lib')

// string.js
var hm = _.humanize('abc-123')
console.log(hm)

var alpha = _.isAlphaNumeric('afaf35353afaf')
console.log(alpha)

// lodash-addons
var c = _.changes([false, true], [false, false]);
console.log(c)

// underscore.string
var l =_.levenshtein("kitten", "kittah")
console.log(l)

// lodash
var mergedObj = _.merge({a: 2, b: 3}, {c: 5})
console.log(mergedObj)

var S = _.orig.S

var chainRes = S('hello you').humanize().dasherize().s
console.log(chainRes)

var cleaned = _.cleanDiacritics("ääkkönen")
console.log('cleaned', cleaned)

// S combined with underscore.string
var chainCombi = S('hello you ääkkönen').cleanDiacritics().dasherize().toLocaleUpperCase().s
console.log(chainCombi)

var s = _.o.string
console.log('original underscore.string', s("   epeli  ").trim().capitalize().value())