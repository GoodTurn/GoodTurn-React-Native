var exports = module.exports = {}
import app from './index';

const db = app.get('db');

//
// exports.getFeed = function (req, res, next) {
//   console.log(req.body, 'finding data from coords');
//
//   // db.getUserInfoForFeed()
//   const promise = new Promise((resolve, reject) => {
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
