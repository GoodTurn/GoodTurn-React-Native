var exports = module.exports = {}
const app = require('./index.js');
const db = app.get('db');

const calcDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371000; // metres
  const φ1 = lat1 * Math.PI / 360
  const φ2 = lat2 * Math.PI / 360
  const Δφ = (lat2-lat1) * Math.PI / 360
  const Δλ = (lon2-lon1) * Math.PI / 360

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return R * c * 2;
}

const findWithinDist = (lat, long, dist) => {
  const lat1 = lat * Math.PI / 360;
  const d = dist / 2;
  const R = 6371000;
  const long1 = long * Math.PI / 360;

  let brng = 0 * 2 * Math.PI / 360;
  let lat2 = Math.asin( Math.sin(lat1)*Math.cos(d/R) + Math.cos(lat1)*Math.sin(d/R)*Math.cos(brng) );
  var latChange = Math.abs(lat2-lat1) * 360 / Math.PI;

  brng = 90 * 2 * Math.PI / 360;
  lat2 = Math.asin( Math.sin(lat1)*Math.cos(d/R) + Math.cos(lat1)*Math.sin(d/R)*Math.cos(brng) );
  const long2 = long1 + Math.atan2(Math.sin(brng)*Math.sin(d/R)*Math.cos(lat1), Math.cos(d/R)-Math.sin(lat1)*Math.sin(lat2));
  const longChange = Math.abs(long2-long1) * 360 / Math.PI;

  var block = {
    maxLat: lat + latChange,
    minLat: lat - latChange,
    maxLong: long + longChange,
    minLong: long - longChange,
  };
  if (block.maxLong >= 180) {
    block.maxLong = 180 - (block.maxLong - 180);
  } if (block.minLong <= -180) {
    block.minLong = -180 - (block.minLong + 180);
  }
  return block;
}

const compare = (a,b) => {
  if (a.distance < b.distance) return -1;
  else if (a.distance > b.distance) return 1;
  return 0;
}

exports.updateCoords = (req, res, next) => {
  console.log("updateCoords connected");
  const latitude = Number(req.body.latitude)
  const longitude = Number(req.body.longitude)
  const id = Number(req.body.id)
  //update data
  db.updateCoords([latitude, longitude, id], (err) => {
    if (!err) {
      console.log('updated Coords');
    }
  })


  //query users

  let feedData = [];
  let dist = 200;
  let block;

  const queryUsers = (latitude, longitude, dist) => {
    block = findWithinDist (latitude, longitude, dist);
    const promise = new Promise((resolve, reject) => {
      db.getFeedIds([block.minLat, block.maxLat, block.minLong, block.maxLong], (err, users) => {
        if (!err) {
          resolve(users)
        } else {
          console.log(err);
        }
      })
    });

    promise.then((response) => {
      if (response.length > 14 || dist > 100000000000000) {
        feedData = response
        let latChange;
        let longChange;
        for (const feed of feedData) {
          feed.distance = calcDistance(feed.latitude, feed.longitude, latitude, longitude)
          delete feed.longitude;
          delete feed.latitude;
        }
        feedData.sort(compare);

        req.body.feed = feedData;
        req.body.dist = dist;
        res.status(200).send(req.body);
      } else {
        dist *= 2;
        console.log('repeat?', dist);
        return queryUsers(latitude, longitude, dist);
      }
    })
  }
queryUsers(latitude, longitude, dist);
}
