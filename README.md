# hyphe-lib-ger.js

## Adding soft-hyphens to German text

[CHANGELOG](CHANGELOG.md)

### About

using the packages [hypher](https://github.com/bramstein/hypher)
and [hyphenation.de](https://github.com/bramstein/hyphenation-patterns) to parse a normal, german text adding soft-hyphens to allow soft-hyphens in older browsers and Google Chrome.

The HTML-Code that is added:

```
&shy;
```

It is also possible to get an Unicode (CharCode 173) output by configurating the parser as 'uni'.

### Install

```
// In your Terminal use

npm i --save hyphe-lib-ger

// In your JavaScript file use

const hypheLib = require('hyphe-lib-ger')
```

### Usage

```
hypheLib(Text, { Options });
```

Text: String
A String with the text to parse

Options: Object
The possible options (not required)

### Options

mode: String (default: html)

- html: adds &shy; as the soft-hyphen
- uni: adds the charCode 173 as the soft-hyphen

ignoreLineBreaks: Boolean (default: false)

- ignore line breaks completely?

lineBreak: String (default: \<br>)

- sets the string that is used for the linebreak in HTML-mode

### Example

```
const hyphe = require("hyphe-lib-ger");

console.log(
  hyphe("Alle meine Entchön,\nschwimmen auf dem See!")
);

/*
Will return:

Al&shy;le mei&shy;ne Ent&shy;chön,<br>schwim&shy;men auf dem See!
*/
```

### Browserified version (still uses version 1.0.2)

You can also use it in your browser by importing the .js oder the minified .js file
Just see the browser-package folder for an example

A working example with this lib and vue.js is seen [here](https://blurrryy.github.io)
