var exports = module.exports = {}
var app = require('./index.js');
var db = app.get('db');

//
// exports.getFeed = function (req, res, next) {
//   console.log(req.body, 'finding data from coords');
//
//   // db.getUserInfoForFeed()
//   var promise = new Promise(function(resolve, reject) {
//     for (var i = 0; i < req.body.feed.length; i++) {
//       db.getUserInfoForFeed(function (err, userInfo) {
//
//       })
//     }
//   });
//
//
//   res.status(200).send(req.body)
//   next();
// }
