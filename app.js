const hyphe = require("./lib/hyphe-lib-ger");

console.log(hyphe("Alle meine Entchön,\nschwimmen auf dem See/Teich!"));
console.log("\nUnicode Output:");
console.log(
  hyphe("Alle meine Entchön,\nschwimmen auf dem See/Teich!", {
    mode: "uni",
    ignoreLineBreak: true
  })
);
