const hypher = require("hypher");
const langDe = require("hyphenation.de");
const TypograhizerJS = require("typographizer-js");

const hypherGer = new hypher(langDe);
const typo = new TypograhizerJS();

const defaultOpts = {
  typographize: true,
  ignoreLineBreaks: false,
  escapeToHTML: true
};

const hypheLib = () => {
  return {
    __softHypen: String.fromCharCode(173),
    __regExSplit: /[\wöäüÖÜÄß]+|\W/g,
    __opts: {},
    async typographize(string) {
      return await typo.typographize(string);
    },
    escapeToHTML(word) {
      if (this.__opts.escapeToHTML) {
        const old = word;
        word = "";
        for (let i in old) {
          word += `&#${old.charCodeAt(i)};`;
        }
      }
      return word;
    },
    applyToSingleWord(word) {
      return hypherGer
        .hyphenate(word)
        .join(this.escapeToHTML(this.__softHypen));
    },
    applyToNonWordChars(char) {
      let charCode = char[0].charCodeAt(0);
      switch (charCode) {
        case 47:
          return this.__opts.ignoreLineBreaks
            ? char
            : this.escapeToHTML(char + String.fromCharCode(8203));
        default:
          return this.escapeToHTML(char);
      }
    },
    async run(string, opts) {
      this.__opts = { ...defaultOpts, ...opts };
      if (!string || string.length < 1) return "";
      if (opts.typographize) string = await this.typographize(string);
      string = string.match(this.__regExSplit).map(word => {
        if (word.match(/[^\wöäüÖÜÄß]/g)) return this.applyToNonWordChars(word);
        else return this.applyToSingleWord(word);
      });
      return string.join("");
    }
  };
};

module.exports = (string, opts = defaultOpts) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hyphe = hypheLib();
      const output = await hyphe.run(string, opts);
      resolve(output);
    } catch (err) {
      reject(err);
    }
  });
};
