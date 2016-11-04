# Power utility pack

Combines the following javascript utility packs under one roof:
- [lodash](lodash.com)
- [lodash-addons](https://www.npmjs.com/package/lodash-addons)
- [string.js](stringjs.com/)
- [underscore.string](http://epeli.github.io/underscore.string/)

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

Enjoy :)

## License

MIT

