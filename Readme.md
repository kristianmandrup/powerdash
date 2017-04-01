# Power utility pack

[![Greenkeeper badge](https://badges.greenkeeper.io/kristianmandrup/powerdash.svg)](https://greenkeeper.io/)

Combines the following javascript utility packs under one roof:
- [lodash](lodash.com)
- [lodash-addons](https://www.npmjs.com/package/lodash-addons)
- [string.js](stringjs.com/)
- [underscore.string](http://epeli.github.io/underscore.string/)

The main namespace now has the functions from all these utils.
We have also added `underscore.string` functions to `string.js` for a fully power chaining API on strings!
We even include `String.prototype` methods which return string values such as `toLocaleUpperCase`

## Install

- Yarn: `yarn add powerdash`
- Npm: `npm add powerdash`

## Usage

```
const _ = require('powerdash')
_.humanize('abc-123')
```

See examples in `test/demo.js`

```js
const _ = require('powerdash')

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
```

You can also use `S` which is combined with `underscore.string` functions added for even more chaining power!

```js
var S = _.S

var chainRes = S('hello you').humanize().dasherize().s
console.log(chainRes) // -hello-you

var cleaned = _.cleanDiacritics("ääkkönen")
console.log('cleaned', cleaned) // aakkonen

// S combined with underscore.string and String.prototype
var chainCombi = S('hello you ääkkönen').cleanDiacritics().dasherize().toLocaleUpperCase().s
console.log(chainCombi) // hello-you-aakkonen
```

### Access original isolated namespaces

```js
_.orig.S // S
_.orig.string // underscore.string
_.orig.addons // lodash-addons

// or using `o` alias
_.o.addons

// using original underscore.string
_.o.string("   epeli  ").trim().capitalize().value()
```

Enjoy :)

## License

MIT

