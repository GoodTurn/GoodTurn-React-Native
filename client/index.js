const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
// const cors = require('cors');
const config = require('./config.js')
const massive = require('massive');


var app = module.exports = express();
const corsOptions = {
	origin: 'http://localhost:8080'
};
const port = 8080
app.use(express.static(__dirname + '/build'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
// app.use(cors(corsOptions));
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


const feedCtrl = require('./feedCtrl.js');
const profileCtrl = require('./profileCtrl.js');
const issueCtrl = require('./issueCtrl.js');



//SIGN UP (CREATE NEW ACCOUNT)
app.post('/profile/', profileCtrl.createUser);
//AUTHENTICATION (LOGIN)
app.get('/profile/:email/', profileCtrl.getUser);
//UPDATE USER INFORMATION
app.put('/profile/:id', profileCtrl.updateUser);
app.put('/newimage/', profileCtrl.postImage);
//DELETE ACCOUNT
app.delete('/profile/:id', profileCtrl.deleteUser);

//RETRIEVE THE FEED
app.put('/feed/:id', feedCtrl.updateCoordsAndGetFeed);

//TEST SESSIONS
app.get('/test/', function (req, res, next) {
	console.log(req.session);
	req.session.user = { name: 'Cameron' }
	console.log(req.session);
	res.status(200).send(req.session);
})

//CREATE ISSUE
app.post('/help/', issueCtrl.createIssue);


app.listen(port, function () {
  console.log('LISTENING..........' + port);
})
