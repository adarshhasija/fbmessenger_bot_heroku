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
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  //res.render('pages/index');
  res.send('hello world, I am a chat bot')
});


app.get('/webhook/', function (req, res) {
	if (req.query['hub.verify_token'] === '1234') {
		res.send(req.query['hub.challenge']);
		sendWelcomeMessage("Welcome")
	} else {
		console.l
		res.send('Error, wrong validation token');
	}
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.post('/webhook/', function (req, res) {
	console.log('Test 1')
    messaging_events = req.body.entry[0].messaging
    for (i = 0; i < messaging_events.length; i++) {
        event = req.body.entry[0].messaging[i]
        sender = event.sender.id
        if (event.message && event.message.text) {
            text = event.message.text
            if (text === 'Generic') {
                sendGenericMessage(sender)
                continue
            }
            sendTextMessage(sender, "Text received, echo: " + text.substring(0, 200))
        }
        if (event.postback) {
            text = JSON.stringify(event.postback)
            sendTextMessage(sender, "Postback received: "+text.substring(0, 200), token)
            continue
        }
    }	
    res.sendStatus(200)
})

var token = "EAAW44q2oO0ABAMtYPDZCNh0DINSOfffzT6a3U7wGieMxPDGSxwzxX6w4Xz7TtQWrsKaqsZCWNzmmRBmoNDtosiC1lsNRVRLbsKM4eO4ZAxEdBTktURvyDqJm5YWY1O16fjgZCHs5k4SofZCMEZC0qbY8YDYI3xMjdAN8FpL2vlmQZDZD";
//var PAGE_ID = "188138181333428";


function sendWelcomeMessage(text) {
  messageData = {
    text:text
  }
  request({
    url: 'https://graph.facebook.com/v2.6/188138181333428/thread_settings',
    qs: {access_token:token},
    method: 'POST',
    json: {
      setting_type: call_to_actions,
      thread_state: new_thread,
      call_to_actions: [
      	{
      		message: messageData
      	}
      ],
    }
  }, function(error, response, body) {
    if (error) {
      console.log('Error sending message: ', error);
    } else if (response.body.error) {
      console.log('Error: ', response.body.error);
    }
  });
};

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



function sendGenericMessage(sender) {
    messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "First card",
                    "subtitle": "Element #1 of an hscroll",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://www.messenger.com",
                        "title": "web url"
                    }, {
                        "type": "postback",
                        "title": "Postback",
                        "payload": "Payload for first element in a generic bubble",
                    }],
                }, {
                    "title": "Second card",
                    "subtitle": "Element #2 of an hscroll",
                    "image_url": "http://messengerdemo.parseapp.com/img/gearvr.png",
                    "buttons": [{
                        "type": "postback",
                        "title": "Postback",
                        "payload": "Payload for second element in a generic bubble",
                    }],
                }]
            }
        }
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
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}



