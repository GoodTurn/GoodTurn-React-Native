var exports = module.exports = {}
var app = require('./index.js');
var db = app.get('db');

function calcDistance(lat1, lon1, lat2, lon2) {
  var R = 6371000; // metres
  var φ1 = lat1 * Math.PI / 360
  var φ2 = lat2 * Math.PI / 360
  var Δφ = (lat2-lat1) * Math.PI / 360
  var Δλ = (lon2-lon1) * Math.PI / 360

  var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return R * c * 2;
}

function findWithinDist (lat, long, dist) {
  var lat1 = lat * Math.PI / 360;
  var d = dist / 2;
  var R = 6371000;
  var long1 = long * Math.PI / 360;

  var brng = 0 * 2 * Math.PI / 360;
  var lat2 = Math.asin( Math.sin(lat1)*Math.cos(d/R) + Math.cos(lat1)*Math.sin(d/R)*Math.cos(brng) );
  var latChange = Math.abs(lat2-lat1) * 360 / Math.PI;

  brng = 90 * 2 * Math.PI / 360;
  lat2 = Math.asin( Math.sin(lat1)*Math.cos(d/R) + Math.cos(lat1)*Math.sin(d/R)*Math.cos(brng) );
  var long2 = long1 + Math.atan2(Math.sin(brng)*Math.sin(d/R)*Math.cos(lat1), Math.cos(d/R)-Math.sin(lat1)*Math.sin(lat2));
  var longChange = Math.abs(long2-long1) * 360 / Math.PI;

  var block = {
    maxLat: lat + latChange,
    minLat: lat - latChange,
    maxLong: long + longChange,
    minLong: long - longChange,
  };
  if (block.maxLong >= 180) {
    block.maxLong = -180 + (block.maxLong - 180);
  }
  if (block.minLong <= -180) {
    block.minLong = 180 + (block.minLong + 180);
  }
  return block;
}

function compare(a,b) {
  if (a.distance < b.distance)
    return -1;
  if (a.distance > b.distance)
    return 1;
  return 0;
}

exports.updateCoordsAndGetFeed = function (req, res, next) {
  const latitude = Number(req.body.latitude)
  const longitude = Number(req.body.longitude)
  const id = Number(req.params.id)


  db.updateCoords([latitude, longitude, id], function (err) {
    if (!err) {
    } else {
      console.log('error:', err);
    }
  })


  //query users

  var feed = [];
  var dist = 200;
  var block;
  function queryUsers(latitude, longitude, dist) {
    block = findWithinDist (latitude, longitude, dist);
    let promise = new Promise(function(resolve, reject) {
      db.getFeedIds([block.minLat, block.maxLat, block.minLong, block.maxLong, id], function (err, users) {
        if (!err) {
          resolve(users)
        } else {
          console.log(err);
        }
      })
    });

    promise.then(function (response) {
      if (response.length > 14 || dist > 54975581388800) {
        feed =  response
        var latChange;
        var longChange;
        for (var i = 0; i < feed.length; i++) {
          feed[i].distance = calcDistance(feed[i].latitude, feed[i].longitude, latitude, longitude)
          delete feed[i].longitude;
          delete feed[i].latitude;
        }
        feed.sort(compare);

        res.status(200).send({
          id: req.body.id,
          latitude: req.body.latitude,
          longitude: req.body.longitude,
          dist: dist,
          feed: feed
        });
      } else {
        dist *= 2;
        return queryUsers(latitude, longitude, dist);
      }
    })
  }


  queryUsers(latitude, longitude, dist);
}
