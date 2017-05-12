var exports = module.exports = {}
var app = require('./index.js');
var db = app.get('db');

exports.createIssue = function (req, res, next) {
  db.createIssue([req.body.email, req.body.subject, req.body.body], function (err) {
    if(!err) {
      res.status(200).send('Issue Created')
    }
  })
}
