module.exports = app => {
  const { config } = app;
  const nunjucks = require('./lib/nobita-nunjucks');
  nunjucks(app);
}