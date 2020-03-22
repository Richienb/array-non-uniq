# array-non-uniq [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/array-non-uniq/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/array-non-uniq)

Get the non-unique items in an array.

[![NPM Badge](https://nodei.co/npm/array-non-uniq.png)](https://npmjs.com/package/array-non-uniq)

## Install

```sh
npm install array-non-uniq
```

## Usage

```js
const arrayNonUniq = require("array-non-uniq");

arrayNonUniq([1, 1, 2, 3, 3]);
//=> [1, 3]

arrayNonUniq(["foo", "foo", "bar", "foo"]);
//=> ['foo']
```

## API

### arrayNonUniq(array)

#### array

Type: `array`

The array to process.
