const hyphe = require('./lib/hyphe-lib-ger');

module.exports.id = (code, id) => {
  let t = document.getElementById(id).innerHTML;
  hyphe(code,t, (o) => {
    document.getElementById(id).innerHTML = o;
  })
}