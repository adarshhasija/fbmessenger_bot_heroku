'use strict';

const 
  bodyParser = require('body-parser'),
  express = require('express');

var app = express();

app.set('port', process.env.PORT || 5000);
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));



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