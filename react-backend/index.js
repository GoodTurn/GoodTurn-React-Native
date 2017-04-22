import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import cors from 'cors';

import config from './config';
import massive from 'massive';

// Cameron, why the module.exports?? I forgot
const app = module.exports = express();
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

const conn = massive.connectSync({
  connectionString: config.connectionString
});
app.set('db', conn);
const db = app.get('db');

// const feedCtrl = require('./feedCtrl.js')
const profileCtrl = require('./profileCtrl.js')

//retrieve the feed
app.put('/feed', profileCtrl.updateCoords)

//update data
// app.put('/profile')







app.listen(port, () => {
  console.log('LISTENING..........' + port);
})
