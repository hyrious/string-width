# @hyrious/string-width

> Get displayed width of unicode strings according to UAX#11 rules.

This package is a JS port of [Rust's unicode-width](https://github.com/unicode-rs/unicode-width).

## Caveats

It does not handle [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code) and complex emoji sequences.
You can use [strip-ansi](https://www.npmjs.com/package/strip-ansi) and [emoji-regex](https://www.npmjs.com/package/emoji-regex) before passing strings to this package. See [test.js](./test.js) of commented out test cases.

## Install

```
npm add @hyrious/string-width
```

## Usage

```js
import stringWidth from '@hyrious/string-width'
// const stringWidth = require('@hyrious/string-width')

stringWidth('a')
//=> 1

stringWidth('古')
//=> 2
```

### stringWidth(string, options?)

- `string` {String} The string to get the width of.
- `options` {Object}
  - `ambiguousIsNarrow` {Boolean} (default: `true`) Whether to treat [ambiguous-width characters](https://www.unicode.org/reports/tr11/#Ambiguous) as narrow (count of 1) instead of wide (count of 2).

Returns a number of the column width of the string.

## Alternatives

- [string-width](https://github.com/sindresorhus/string-width)

## License

MIT @ [hyrious](https://github.com/hyrious)
