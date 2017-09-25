const hyphe = require('./lib/hyphe-lib-ger');

hyphe('HTML','Alle meine 13 Entchen, schwimmen auf dem See!', (h) => {
  console.log(h);
});

hyphe('uni','Alle meine 13 Entchen, \n schwimmen auf dem See.', (h) => {
  console.log(h);
});