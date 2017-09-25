const hypher = require('hypher');
const langDe = require('hyphenation.de');
let hype = new hypher(langDe);
let mode = 'HTML';
let hypheMode = (m) => {
  if (m == "HTML") {
    mode = 'HTML';
    return true;
  } else if (m == "uni") {
    mode = 'uni';
    return true;
  }
  return false;
};
let hypheWord = (inputWord, callback) => {
  let hyphed = hype.hyphenate(inputWord);
  let word = '';
  hyphed.forEach((h, index) => {
    if (index == 0) {
      word = h;
    } else {
      if (mode == 'HTML') {
        word = word + '&shy;' + h;
      } else if (mode == "uni") {
        word = word + String.fromCharCode(173) + h;
      }
    }
  });
  callback(word);
};
let multihypheWord = (inputString, callback) => {
  let outputWord = '';
  splitString(inputString, (splittedString) => {
    splittedString.forEach((wordArray, index) => {
      if (wordArray.match(/[^a-zA-ZöäüÖÜÄß]/g) != null) {
        let char = wordArray.match(/[^a-zA-ZöäüÖÜÄß]/g)[0].charCodeAt(0);
        let addChar;
        if (char == 10) {
          // to be tested
          // addChar = "<br>";
          addChar = String.fromCharCode(10);
        } else {
          addChar = String.fromCharCode(char);
        }
        outputWord = outputWord + addChar;

      } else {
        hypheWord(wordArray, (word) => {
          outputWord = outputWord + word;
        });
      }
    });
  })
  callback(outputWord);
};
let splitString = (inputWord, callback) => {
  let matchedWords = inputWord.match(/[a-zA-ZöäüÖÜÄß]+|\W|[0-9]/g);
  callback(matchedWords);
};
module.exports = (config, string, callback) => {
  if (hypheMode(config)) {
    multihypheWord(string, (s) => {
      callback(s);
    })
  } else {
    callback('Error: Config seems to be wrong.');
  }
}