## hyphe-lib-ger.js
### About
using the packages [hyphenation](https://github.com/bramstein/hypher)
and [hyphenation.de](https://github.com/bramstein/hyphenation-patterns) to return a HTML text with 
```` 
&shy;
````
 hyphens

 a working example with this lib and vue.js is seen [here](https://blurrryy.github.io)

### Usage

````
var hypheLibGer = require("hyphe-lib-ger")
hypheLibGer('HTML', '<Your string here>' , (e) => console.log(e));
````

### Browserified version
You can also use it in your browser by importing the .js oder the minified .js file
Just see the browser-package folder for an example

#### Unicode insertion not supported yet
#### Only loads the German language patterns