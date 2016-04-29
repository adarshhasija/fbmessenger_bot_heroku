var bodyParser = require('body-parser')
var request = require('request')
var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000));

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// Process application/json
app.use(bodyParser.json())


app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', function(request, response) {
  //response.render('pages/index');
  res.send('hello world, I am a chat bot')
});


app.get('/webhook/', function (req, res) {
	if (req.query['hub.verify_token'] === '1234') {
		res.send(req.query['hub.challenge']);
	} else {
		res.send('Error, wrong validation token');
	}
});
/*
app.post('/webhook/', function (req, res) {
  messaging_events = req.body.entry[0].messaging;
  for (i = 0; i < messaging_events.length; i++) {
    event = req.body.entry[0].messaging[i];
    sender = event.sender.id;
    if (event.message && event.message.text) {
      text = event.message.text;
      // Handle a text message from this sender
      sendTextMessage(sender, "Text received, echo: "+ text.substring(0, 200));
    }
  }
  res.sendStatus(200);
});

var token = "EAAW44q2oO0ABAGrD9Re8hRnRDjyG9ZAuXwZCOfR316urfRE5nZB2uPih2zk1UhWiWmZAlqQUGwXl3Nxi6KUNxUJcegIzdHKZCvlzw9LJ8KcOFOehRGkeiZCorRpG4Gwgs2nUrYUb7D1FaH2d1YKNMLpkhQryOLqgF9XOEW8ZC6b3wZDZD";

function sendTextMessage(sender, text) {
  messageData = {
    text:text
  }
  request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: {access_token:token},
    method: 'POST',
    json: {
      recipient: {id:sender},
      message: messageData,
    }
  }, function(error, response, body) {
    if (error) {
      console.log('Error sending message: ', error);
    } else if (response.body.error) {
      console.log('Error: ', response.body.error);
    }
  });
};
*/
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


