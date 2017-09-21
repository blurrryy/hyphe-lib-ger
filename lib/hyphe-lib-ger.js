const hypher = require('hypher');
const langDe = require('hyphenation.de');
let hype = new hypher(langDe);
let mode = 'HTML';
let hypheMode = (m) => {
  if (m == "HTML") {
    mode = 'HTML';
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
      }
    }
  });
  callback(word);
};
let multihypheWord = (inputString, callback) => {
  let outputWord = '';
  splitString(inputString, (splittedString) => {
    splittedString.forEach((wordArray, index) => {
      if (wordArray == "") {
        outputWord = outputWord + ' ';
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
  let matchedWords = inputWord.match(/([a-zA-Z]+[öÖüÜäÄß])\w+|([a-zA-Z])\w+|\,|\-|\.|\?|\!|/g);
  callback(matchedWords);
};
module.exports = (config, string, callback) => {
  if(hypheMode(config)) {
    multihypheWord(string, (s) => {
      callback(s);
    })
  } else {
    callback('Error: Config seems to be wrong.');
  }
}