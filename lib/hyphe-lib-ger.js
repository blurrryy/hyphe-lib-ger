// Bring in package dependencies
const hypher = require("hypher");
const langDe = require("hyphenation.de");

// Load hypher with the German language package
const hypherGer = new hypher(langDe);

// Initialize the soft-hyphen
let softHyphen = "&shy;";

// Set options object
let opts = {
  mode: "html", // html or uni for HTML or Unicode?
  ignoreLineBreak: false, // ingore line-breaks completely?
  lineBreak: "<br>", // html code for linebreak used?
  zwspAfterSlash: true, // add a zero-width space after a slash?
  zwsp: "<wbr>" // html code for zero-width-space
};

// Handle the options
const executeChangeOptions = () => {
  softHyphen = opts.mode == "uni" ? String.fromCharCode(173) : "&shy;";
};

const handleCharCode = char => {
  let charCode = char[0].charCodeAt(0);
  if (charCode == 10 && opts.mode == "html" && !opts.ignoreLineBreak)
    return "<br>";
  if (charCode == 10 && opts.ignoreLineBreak) return "";
  if (charCode == 47 && opts.zwspAfterSlash) {
    if (opts.mode == "uni")
      return String.fromCharCode(charCode) + String.fromCharCode(8203);
    return String.fromCharCode(charCode) + opts.zwsp;
  }
  return String.fromCharCode(charCode);
};

// Add soft-hyphens to a single word
const addToSingleWord = inputWord => {
  let hyphedWord = hypherGer.hyphenate(inputWord);
  let outputWord = "";
  for (let i = 0; i in hyphedWord; i++) {
    if (i == 0) {
      outputWord = hyphedWord[i];
      continue;
    }
    outputWord += softHyphen + hyphedWord[i];
  }
  return outputWord;
};

// Add soft-hyphens to multiple words
const addToMultipleWords = inputString => {
  // Declare constants for regular expressions
  const splitStringRegEx = /[a-zA-ZöäüÖÜÄß]+|\W|[0-9]/g;
  const wordMatchRegEx = /[^a-zA-ZöäüÖÜÄß]/g;

  // Define output placeholder
  let outputString = "";
  let splittedString = inputString.match(splitStringRegEx);
  for (let stringPart of splittedString) {
    // Check if stringPart is not a word
    let isSingleChar = stringPart.match(wordMatchRegEx);
    if (isSingleChar != null) {
      outputString += handleCharCode(isSingleChar);
      continue;
    }
    outputString += addToSingleWord(stringPart);
  }
  return outputString;
};

// Define the exported function
module.exports = (inputString, inputOptions) => {
  if (inputOptions) {
    opts = { ...opts, ...inputOptions };
    executeChangeOptions();
  }
  return addToMultipleWords(inputString);
};
