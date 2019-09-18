# Dump for Laravel Mix

[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![Latest Version on NPM](https://img.shields.io/npm/v/laravel-mix-dump.svg?style=flat-square)](https://npmjs.com/package/laravel-mix-dump)
[![npm](https://img.shields.io/npm/dt/laravel-mix-dump.svg?style=flat-square)](https://www.npmjs.com/package/laravel-mix-dump)

Adds a dump() method to laravel-mix, to dump the webpack config and the Mix object.

```js
let mix = require('laravel-mix');
require('laravel-mix-dump');

// ...

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .dump();
```

## Installation

Before you get started, make sure you're using `laravel-mix` version 4 or higher.

You can install the package with yarn or npm:

```bash
yarn add laravel-mix-dump
```

```bash
npm install laravel-mix-dump
```

Then install the extension by requiring the module in your Mix configuration.

```js
let mix = require('laravel-mix');
require('laravel-mix-dump');

// ...
```

dump can then be enabled by calling `.dump()` in your Mix chain.

```js
mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .dump();
```

Custom options can be passed when calling dump if necessary.

```js
mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .dump({depth:2, die: true});
```

### Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
