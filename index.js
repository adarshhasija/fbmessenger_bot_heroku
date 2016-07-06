'use strict';

const 
  bodyParser = require('body-parser'),
  express = require('express');

var app = express();

app.set('port', process.env.PORT || 5000);
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static('public'));

//Details for Cila
const APP_SECRET = "e72a4da3c3f17067c224f3d372a12e7f";
const VALIDATION_TOKEN = "1234";
const PAGE_ACCESS_TOKEN = "EAAW44q2oO0ABAMtYPDZCNh0DINSOfffzT6a3U7wGieMxPDGSxwzxX6w4Xz7TtQWrsKaqsZCWNzmmRBmoNDtosiC1lsNRVRLbsKM4eO4ZAxEdBTktURvyDqJm5YWY1O16fjgZCHs5k4SofZCMEZC0qbY8YDYI3xMjdAN8FpL2vlmQZDZD";

if (!(APP_SECRET && VALIDATION_TOKEN && PAGE_ACCESS_TOKEN)) {
  console.error("Missing config values");
  process.exit(1);
}


app.get('/', function(req, res) {
  //res.render('pages/index');
  res.send('hello world, I am a chat bot')
});



// Start server
// Webhooks must be available via SSL with a certificate signed by a valid 
// certificate authority.
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});