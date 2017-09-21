const hyphe = require('./lib/hyphe-lib-ger');

module.exports.id = (id) => {
  let t = document.getElementById(id).innerHTML;
  hyphe('HTML',t, (o) => {
    document.getElementById(id).innerHTML = o;
  })
}