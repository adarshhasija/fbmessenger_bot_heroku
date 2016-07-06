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

myFirebaseRef.child("location/city").on("value", function(snapshot) {
  myFirebaseRef.set({
  title: snapshot.val(),
  author: "Firebase",
  location: {
    city: "San Francisco",
    state: "California",
    zip: 94103
  }
});
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
		//sendWelcomeMessage()
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
            text = text.toLowerCase()
            if (text.length == 1) {
              letterToISL(sender, text)
              continue
            }
            else {
              sendTextMessage(sender, "Please enter 1 letter to get the Indian Sign Language translation")
              continue
            }
            //sendStructuredTextMessage("Choose a word to get the sign language", ["Hello", "Goodbye", "Nice to meet you", "Yes"])
        }
        if (event.postback) {
          text = event.postback.payload
          text = text.toLowerCase()
          if (text === 'hello') {
            var elements = []
            elements.push({
                    "title": text,
                    "subtitle": "American Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/hello%2Fhello_americanSL.png?alt=media&token=fbd64055-b748-4f0e-9418-6f9739679c55",
                    "buttons": [{
                        "type": "postback",
                        "title": "Choose another word",
                        "payload": "postback", //meaning default
                    }],
                })
            sendGenericMessage(sender, elements)
          }
          else if (text === 'goodbye') {
            var elements = []
            elements.push({
                    "title": text,
                    "subtitle": "American Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/goodbye%2Fgoodbye_americanSL.png?alt=media&token=c94427a2-497f-4ba7-8baf-9c5698268722",
                    "buttons": [{
                        "type": "postback",
                        "title": "Choose another word",
                        "payload": "postback", //meaning default
                    }],
                })
            sendGenericMessage(sender, elements)
          }
          else if (text === 'nice to meet you') {
            var elements = []
            elements.push({
                    "title": text,
                    "subtitle": "American Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/nice_to_meet_you%2Fnice_to_meet_you_americanSL.png?alt=media&token=310e04e6-4084-4407-a8b0-3835ebb061e7",
                    "buttons": [{
                        "type": "postback",
                        "title": "Choose another word",
                        "payload": "postback", //meaning default
                    }],
                })
            sendGenericMessage(sender, elements)
          }
          else if (text === 'yes') {
            var elements = []
            elements.push({
                    "title": text,
                    "subtitle": "American Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/yes%2Fyes_americanSL.png?alt=media&token=a269b7a7-0d22-4d9c-9f1b-1f508ac444e5",
                    "buttons": [{
                        "type": "postback",
                        "title": "Choose another word",
                        "payload": "postback", //meaning default
                    }],
                })
            sendGenericMessage(sender, elements)
          }
          else if (text === 'no') {
            var elements = []
            elements.push({
                    "title": text,
                    "subtitle": "American Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/no%2Fno_americanSL.png?alt=media&token=3437e2eb-e448-4c88-b18b-b2ffd2ca4c49",
                    "buttons": [{
                        "type": "postback",
                        "title": "Choose another word",
                        "payload": "postback", //meaning default
                    }],
                })
            sendGenericMessage(sender, elements)
          }
          else if (text === 'please') {
            var elements = []
            elements.push({
                    "title": text,
                    "subtitle": "American Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/please%2Fplease_americanSL.png?alt=media&token=6776c70b-442f-49cf-9ce5-1b5bd3f34615",
                    "buttons": [{
                        "type": "postback",
                        "title": "Choose another word",
                        "payload": "postback", //meaning default
                    }],
                })
            sendGenericMessage(sender, elements)
          }
          else if (text === 'thanks') {
            var elements = []
            elements.push({
                    "title": text,
                    "subtitle": "American Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/thanks%2Fthanks_americanSL.png?alt=media&token=541b5fc0-78ac-4b38-973c-fb9ffb761596",
                    "buttons": [{
                        "type": "postback",
                        "title": "Choose another word",
                        "payload": "postback", //meaning default
                    }],
                })
            sendGenericMessage(sender, elements)
          }
          else {
            sendStructuredTextMessage("Choose a word to get the sign language", ["Hello", "Goodbye"])
          }
            //text = JSON.stringify(event.postback)
            //sendTextMessage(sender, "Postback received: "+text.substring(0, 200), token)
            continue
        } 
    }	
    res.sendStatus(200)
})


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
    text:text,
    "quick_replies":[
      {
        "content_type":"text",
        "title":"Hello",
        "payload":"hello"
      },
      {
        "content_type":"text",
        "title":"Goodbye",
        "payload":"goodbye"
      }
    ]
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

function sendStructuredTextMessage(text, buttons) {
    messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": text,
                "buttons":[]
            }
        }
    }
    for(var i=0; i < buttons.length; i++) {
      messageData.attachment.payload.buttons.push({
                    "type":"postback",
                    "title":buttons[i],
                    "payload":buttons[i]
      })
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



function sendGenericMessage(sender, elements) {

    messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": elements,
                /* [{
                    "title": "First card",
                    "subtitle": "Element #1 of an hscroll",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/hello_americanSL.png?alt=media&token=28107045-58d6-43c4-ae9f-0fcdab9c1c11",
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
                }]  */
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


