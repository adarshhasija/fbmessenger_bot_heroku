var bodyParser = require('body-parser')
var request = require('request')
var express = require('express')
var mongodb = require("mongodb")
var firebase = require("firebase")
var myFirebaseRef = new Firebase("https://cila-1.firebaseio.com/")
myFirebaseRef.set({
  title: "Hello World!",
  author: "Firebase",
  location: {
    city: "San Francisco",
    state: "California",
    zip: 94103
  }
});
var ObjectID = mongodb.ObjectID;

var CONTACTS_COLLECTION = "contacts";

var app = express()

app.set('port', (process.env.PORT || 5000));

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// Process application/json
app.use(bodyParser.json())


app.use(express.static(__dirname + '/public'));


// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(app.get('port'), function() {
  		console.log('Node app is running on port', app.get('port'));
	});
});

// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  //res.render('pages/index');
  res.send('hello world, I am a chat bot')
});

var token = "EAAW44q2oO0ABAMtYPDZCNh0DINSOfffzT6a3U7wGieMxPDGSxwzxX6w4Xz7TtQWrsKaqsZCWNzmmRBmoNDtosiC1lsNRVRLbsKM4eO4ZAxEdBTktURvyDqJm5YWY1O16fjgZCHs5k4SofZCMEZC0qbY8YDYI3xMjdAN8FpL2vlmQZDZD";
var PAGE_ID = "188138181333428"; 
var app_name = "Cila"
var cur_state = 'new_user_start';


app.get('/webhook/', function (req, res) {
	if (req.query['hub.verify_token'] === '1234') {
		res.send(req.query['hub.challenge']);
		sendWelcomeMessage()
	} else {
		console.l
		res.send('Error, wrong validation token');
	}
});
/*
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
*/
function resetState() {
	cur_state = 'new_user_start'
}

app.post('/webhook/', function (req, res) {
    messaging_events = req.body.entry[0].messaging
    console.log(req.body.entry[0])
    for (i = 0; i < messaging_events.length; i++) {
        event = req.body.entry[0].messaging[i]
        sender = event.sender.id
        if (event.message && event.message.text) {
            text = event.message.text
            if (text === 'Generic') {
            	getUserProfile()
                //sendGenericMessage(sender)
                continue
            }
            text = text.toLowerCase()
            if (text === 'help') {
            	sendTextMessage(sender, 'What can we help you with? Message us your query and we will respond as soon as possible')
            		cur_state = 'help'
            		continue
            }


            if (text === 'yes') {
            	if (cur_state == 'new_user_start') {
            		sendTextMessage(sender, 'Great! We will ask you a series of questions to understand your availability and '+
            					'preferences. Please reply yes or no for each. If you have doubts at any point, just message '+
            					'the word help. Shall we start?')
            		cur_state = 'volunteer_questions_1'
            		continue
            	}
            	if (cur_state == 'volunteer_questions_1') {
            		sendTextMessage(sender, 'Can you teach English?')
            		cur_state = 'volunteer_questions_2'
            		continue
            	}
            	if (cur_state == 'volunteer_questions_2') {
            		sendTextMessage(sender, 'You answered yes.\n Can you teach Hindi?')
            		cur_state = 'volunteer_questions_3'
            		continue
            	}
            	if (cur_state == 'volunteer_questions_3') {
            		sendTextMessage(sender, 'You answered yes.\n Can you teach Kannada?')
            		cur_state = 'volunteer_questions_4'
            		continue
            	}
            	if (cur_state == 'volunteer_questions_4') {
            		sendTextMessage(sender, 'You answered yes.')
            		cur_state = 'volunteer_questions_complete'
            		continue
            	}
            	
            	
            }
            if (text === 'no') {
            	if (cur_state == 'new_user_start') {
            		sendTextMessage(sender, 'No problem. You can register with us anytime if your are interested. See you next time!')
            		resetState()
            		continue
            	}
            	if (cur_state == 'volunteer_questions_1') {
            		sendTextMessage(sender, 'Can you teach English?')
            		cur_state = 'volunteer_questions_2'
            		continue
            	}
            	if (cur_state == 'volunteer_questions_2') {
            		sendTextMessage(sender, 'You answered no.\n Can you teach Hindi?')
            		cur_state = 'volunteer_questions_3'
            		continue
            	}
            	if (cur_state == 'volunteer_questions_3') {
            		sendTextMessage(sender, 'You answered no.\n Can you teach Kannada?')
            		cur_state = 'volunteer_questions_4'
            		continue
            	}
            	if (cur_state == 'volunteer_questions_4') {
            		sendTextMessage(sender, 'You answered no.')
            		cur_state = 'volunteer_questions_complete'
            		continue
            	}
            	
            }
            
            if (cur_state == 'help') {
            	sendTextMessage(sender, 'Thanks for your query. We will respond as quickly as possible')
            		resetState()
            		continue
            }

            sendTextMessage(sender, "Sorry, I did not understand your reponse. Please try again.");
        }
        if (event.postback) {
            text = JSON.stringify(event.postback)
            sendTextMessage(sender, "Postback received: "+text.substring(0, 200), token)
            continue
        }
    }	
    res.sendStatus(200)
})


function volunteerQuestions(response) {

}


function getUserProfile() {
  request({
    url: 'https://graph.facebook.com/v2.6/711338052302980',
    qs: {fields: "first_name,last_name,profile_pic,locale,timezone,gender", access_token:token},
    method: 'GET',
  }, function(error, response, body) {
    if (error) {
      console.log('Error sending message: ', error);
    } else if (response.body.error) {
      console.log('Error: ', response.body.error);
    } else {
    	console.log(response.body);
    }
  });	
}


function sendWelcomeMessage(text) {
  messageData = {
    text: "Welcome to "+app_name+" . Would you like to register as a volunteer? Please reply yes or no."
  }
  request({
    url: 'https://graph.facebook.com/v2.6/'+PAGE_ID+'/thread_settings',
    qs: {access_token:token},
    method: 'POST',
    json: {
      setting_type: "call_to_actions",
      thread_state: "new_thread",
      call_to_actions: [
      	{
      		message: messageData
      	},
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



