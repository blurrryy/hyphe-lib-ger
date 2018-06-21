const hyphe = require("./lib/hyphe-lib-ger");

console.log(hyphe("Alle meine Entchön,\nschwimmen auf dem See!"));
console.log("\nUnicode Output:");
console.log(
  hyphe("Alle meine Entchön,\nschwimmen auf dem See!", {
    mode: "uni",
    ignoreLineBreak: true
  })
);
