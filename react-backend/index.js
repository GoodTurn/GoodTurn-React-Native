const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const config = require('./config.js')
const massive = require('massive');


var app = module.exports = express();
const corsOptions = {
	origin: 'http://localhost:8080'
};
const port = 8080
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({
	resave: true,
	saveUninitialized: true,
	secret: config.secret
}));



var conn = massive.connectSync({
  connectionString: config.connectionString
});
app.set('db', conn);
var db = app.get('db');


// const feedCtrl = require('./feedCtrl.js')
const profileCtrl = require('./profileCtrl.js')

//retrieve the feed
app.put('/feed', profileCtrl.updateCoords)

//update data
// app.put('/profile')







app.listen(port, function () {
  console.log('LISTENING..........' + port);
})
