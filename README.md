
# afinn111-lexicon
[![package version](https://img.shields.io/npm/v/afinn111-lexicon.svg?style=flat-square)](https://npmjs.org/package/afinn111-lexicon)
[![package downloads](https://img.shields.io/npm/dm/afinn111-lexicon.svg?style=flat-square)](https://npmjs.org/package/afinn111-lexicon)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/afinn111-lexicon.svg?style=flat-square)](https://npmjs.org/package/afinn111-lexicon)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> [AFINN 111](http://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010) list of English words rated for valence

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install afinn111-lexicon
$ # OR
$ yarn add afinn111-lexicon
```

## Usage

```js
const afinn111 = require('afinn111-lexicon')

console.log(Object.keys(afinn111)) // [ 'abandon', 'abandoned', ...]

```

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    