const hyphe = require("./lib/hyphe-lib-ger-v3");

hyphe(
  `Lass mich dich kurz vorstellen, was hier eigentlich möglich ist: "Hallo, mein Name ist Daniel"`
).then(res => {
  console.log(res);
});
