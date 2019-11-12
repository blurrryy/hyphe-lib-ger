# hyphe-lib-ger.js

[![npm version](https://badge.fury.io/js/hyphe-lib-ger.svg)](https://badge.fury.io/js/hyphe-lib-ger) [![](https://data.jsdelivr.com/v1/package/npm/hyphe-lib-ger/badge)](https://www.jsdelivr.com/package/npm/hyphe-lib-ger)

## Add soft-hyphens to German text

[CHANGELOG](CHANGELOG.md)

### About

Using the packages [hypher](https://github.com/bramstein/hypher)
and [hyphenation.de](https://github.com/bramstein/hyphenation-patterns) to parse a normal, German text adding soft-hyphens to allow soft-hyphens in older browsers and Google Chrome.

New: Use [typographizer-js](https://github.com/ovlb/typographizer-js) to produce better looking typography

### Install

In your terminal use

```bash
npm i --save hyphe-lib-ger
```

In your JavaScript file use

```js
const hyphe = require("hyphe-lib-ger");
```

### Usage

```js
hyphe(Text, { Options }).then(text => {
  console.log(text); // Output the formatted text
});
```

Text: String
A String with the text to parse

Options: Object
The possible options (not required)

### Options

typographize: Boolean (default: false)

- parse the text with typograhize-js first

ignoreLineBreaks: Boolean (default: false)

- ignore line breaks completely?

escapeToHTML: Boolean (default: true)

- escape all non-word characters to their HTML charcode alternative

### Example

```js
const hyphe = require("hyphe-lib-ger");

hyphe(
  `Lass mich dir kurz vorstellen, was hier eigentlich möglich ist: "Hallo, mein Name ist Daniel"`
).then(res => {
  console.log(res);
});

/*
Will return:
Lass&#32;mich&#32;dir&#32;kurz&#32;vor&#173;stel&#173;len&#44;&#32;was&#32;hier&#32;ei&#173;gent&#173;lich&#32;mög&#173;lich&#32;ist&#58;&#32;&#8220;Hal&#173;lo&#44;&#32;mein&#32;Na&#173;me&#32;ist&#32;Da&#173;ni&#173;el&#8221;
*/
```

### Example

A working example with this lib and Angular6 is seen [here](https://blurrryy.github.io)
