# hyphe-lib-ger.js 
## Adding soft-hyphens to German text
### About
using the packages [hyphenation](https://github.com/bramstein/hypher)
and [hyphenation.de](https://github.com/bramstein/hyphenation-patterns) to parse a normal, german text adding soft-hyphens to allow soft-hyphens in older browsers and Google Chrome.

The HTML-Code that is added:
```` 
&shy;
````

It is also possible to get an Unicode (CharCode 173) output but configurating the parser als 'uni'.

### Install

````
// In your Terminal use

npm i --save hype-lib-ger

// In your JavaScript file use

const hyphe = require('hyphe-lib-ger')
````

### Usage

````
hyphe(config, text, (output))
````

config: String 
can be "HTML" or "uni" for HTML-Output of the soft-hyphen or Unicode-Output of the whole Input

text: String
the text to parse

(output): callback
the callback including the 'hyphenated' text

### Example

````
const hyphe = require('hyphe-lib-ger')

hyphe('HTML', 'Alle meine Entchen, schwimmen auf dem See!', (o) => {
  console.log(o);
})

/*
Will return:

Al&shy;le mei&shy;ne Ent&shy;chen, schwim&shy;men auf dem See!
*/
````


### Browserified version

You can also use it in your browser by importing the .js oder the minified .js file
Just see the browser-package folder for an example

A working example with this lib and vue.js is seen [here](https://blurrryy.github.io)