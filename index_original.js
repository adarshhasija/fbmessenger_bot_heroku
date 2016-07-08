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

function letterToISL(sender, letter) {
    switch(letter) {
      case 'a':
          var elements = []
            elements.push({
                    "title": letter.toUpperCase(),
                    "subtitle": "Indian Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fa_isl.png?alt=media&token=1f5c35a4-3113-4547-9c27-4d600b09cee0",
                })
            sendGenericMessage(sender, elements)
            sendTextMessage(sender, "Raise both your hands with fingers pointing up and palms pointing away from you. Extend both your thumbs so that"+
                                    "the tips are touching. Finally curl all your other fingers inwards")
          break
      case 'b':
          var elements = []
            elements.push({
                    "title": letter.toUpperCase(),
                    "subtitle": "Indian Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fb_isl.png?alt=media&token=cf006cc1-c02b-4597-a4f3-daaab1c3072a",
                })
            sendGenericMessage(sender, elements)
            sendTextMessage(sender, "Raise both your hands with fingers pointing up and palms pointing inwards, towards the other "+
                                    "hand. Close each hand so that the tips of the fingers touch the tip of the thumb. Now move both "+
                                    "hands together so that the tip of the thumbs of one hand touches the tip of the thumb of the other")
            break
      case 'c':
          var elements = []
            elements.push({
                    "title": letter.toUpperCase(),
                    "subtitle": "Indian Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fc_isl.png?alt=media&token=d67d00b2-00de-4854-ad60-d348fc0ec4e9",
                })
            sendGenericMessage(sender, elements)
            sendTextMessage(sender, "Raise your hand with your palm pointing left or right. Curl your fingers downwards and your thumb "+
                                    "upwards to form a curve shape")
            break
      case 'd':
            var elements = []
            elements.push({
                    "title": letter.toUpperCase(),
                    "subtitle": "Indian Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fd_isl.png?alt=media&token=83d2db2c-ddcc-469d-a4ac-960cee153fb0",
                })
            sendGenericMessage(sender, elements)
            sendTextMessage(sender, "Raise your left hand with fingers pointed up and palm pointed outwards. Extend your thumb "+
                                    "out to right and close your 3,4 and 5th fingers. Now raise your right hand. Place the tip of your first "+
                                    "finger at the tip of your left hand first finger place your right hand thumb tip at the base of "+
                                    "your left hand first finger")
            break
      case 'e':
            var elements = []
            elements.push({
                    "title": letter.toUpperCase(),
                    "subtitle": "Indian Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fe_isl.png?alt=media&token=a59d77eb-fbe2-44c5-9cb4-f7f88b13074f",
                })
            sendGenericMessage(sender, elements)
            break
      case 'f':
            var elements = []
            elements.push({
                    "title": letter.toUpperCase(),
                    "subtitle": "Indian Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Ff_isl.png?alt=media&token=cd2c4b0b-e793-4e04-bf53-af5899309da1",
                })
            sendGenericMessage(sender, elements)
            break
      case 'g':
            var elements = []
            elements.push({
                    "title": letter.toUpperCase(),
                    "subtitle": "Indian Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fg_isl.png?alt=media&token=ba2efb29-15f6-460d-9cd3-6dc449e4497d",
                })
            sendGenericMessage(sender, elements)
            break
      case 'h':
            var elements = []
            elements.push({
                    "title": letter.toUpperCase(),
                    "subtitle": "Indian Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fh_isl.png?alt=media&token=95172ccb-3dfa-4671-8449-5ac387162006",
                })
            sendGenericMessage(sender, elements)
            break
      case 'i':
            var elements = []
            elements.push({
                    "title": letter.toUpperCase(),
                    "subtitle": "Indian Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fi_isl.png?alt=media&token=1ba4be80-87e2-4c2e-9710-49a60028ceb0",
                })
            sendGenericMessage(sender, elements)
            break
      case 'j':
            var elements = []
            elements.push({
                    "title": letter.toUpperCase(),
                    "subtitle": "Indian Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fj_isl.png?alt=media&token=bbeb352c-5deb-4eaa-9525-457fee2d7e80",
                })
            sendGenericMessage(sender, elements)
            break
      case 'k':
          var elements = []
            elements.push({
                    "title": letter.toUpperCase(),
                    "subtitle": "Indian Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fk_isl.png?alt=media&token=6f72f2ee-1c2b-4c97-95b5-d56a520b1427",
                })
            sendGenericMessage(sender, elements)
            break
      case 'l':
          var elements = []
            elements.push({
                    "title": letter.toUpperCase(),
                    "subtitle": "Indian Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fl_isl.png?alt=media&token=a5176bc7-ebc9-4842-9a79-fddd4292e0c1",
                })
            sendGenericMessage(sender, elements)
            break
      case 'm':
          var elements = []
            elements.push({
                    "title": letter.toUpperCase(),
                    "subtitle": "Indian Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fm_isl.png?alt=media&token=f43d60cf-ee02-41f7-b370-6d3aa577dd55",
                })
            sendGenericMessage(sender, elements)
            break
      case 'n':
          var elements = []
            elements.push({
                    "title": letter.toUpperCase(),
                    "subtitle": "Indian Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fn_isl.png?alt=media&token=af05b408-a1dd-40a3-9e08-a4e118a53009",
                })
            sendGenericMessage(sender, elements)
            break
      case 'o':
          var elements = []
            elements.push({
                    "title": letter.toUpperCase(),
                    "subtitle": "Indian Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fo_isl.png?alt=media&token=7539ff08-2c6e-495f-83a6-34ea4fddeed0",
                })
            sendGenericMessage(sender, elements)
            break
      case 'p':
          var elements = []
            elements.push({
                    "title": letter.toUpperCase(),
                    "subtitle": "Indian Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fp_isl.png?alt=media&token=158d1986-3b97-4698-a112-4a7540bc2ddc",
                })
            sendGenericMessage(sender, elements)
            break
      case 'q':
          var elements = []
            elements.push({
                    "title": letter.toUpperCase(),
                    "subtitle": "Indian Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fq_isl.png?alt=media&token=fad9a01c-34e7-41de-9ef8-a9b5a617cf95",
                })
            sendGenericMessage(sender, elements)
            break
      case 'r':
          var elements = []
            elements.push({
                    "title": letter.toUpperCase(),
                    "subtitle": "Indian Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fr_isl.png?alt=media&token=552d9d01-508f-4899-b3fa-2f170f31d472",
                })
            sendGenericMessage(sender, elements)
            break
      case 's':
          var elements = []
            elements.push({
                    "title": letter.toUpperCase(),
                    "subtitle": "Indian Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fs_isl.png?alt=media&token=e09aa80e-0d19-4e91-a6cc-d97bf23e21a9",
                })
            sendGenericMessage(sender, elements)
            break
      case 't':
          var elements = []
            elements.push({
                    "title": letter.toUpperCase(),
                    "subtitle": "Indian Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Ft_isl.png?alt=media&token=21e8e412-183f-42b4-a5b0-178cc120af42",
                })
            sendGenericMessage(sender, elements)
            break
      case 'u':
          var elements = []
            elements.push({
                    "title": letter.toUpperCase(),
                    "subtitle": "Indian Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fu_isl.png?alt=media&token=1b73e175-f8da-4da9-96a8-513d25206212",
                })
            sendGenericMessage(sender, elements)
            break
      case 'v':
          var elements = []
            elements.push({
                    "title": letter.toUpperCase(),
                    "subtitle": "Indian Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fv_isl.png?alt=media&token=f746d54a-f26f-40e0-a7a0-cb6528e3fc50",
                })
            sendGenericMessage(sender, elements)
            break
      case 'w':
            var elements = []
            elements.push({
                    "title": letter.toUpperCase(),
                    "subtitle": "Indian Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fw_isl.png?alt=media&token=8158f6af-dc4b-4024-a3fd-01b360ce0e81",
                })
            sendGenericMessage(sender, elements)
            break
      case 'x':
            var elements = []
            elements.push({
                    "title": letter.toUpperCase(),
                    "subtitle": "Indian Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fx_isl.png?alt=media&token=3065a954-eb31-4649-8d52-aec052d27cd3",
                })
            sendGenericMessage(sender, elements)
            break
      case 'y':
            var elements = []
            elements.push({
                    "title": letter.toUpperCase(),
                    "subtitle": "Indian Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fy_isl.png?alt=media&token=7b027197-6c2d-46f5-aa65-f0ccc521a8ff",
                })
            sendGenericMessage(sender, elements)
            break
      case 'z':
            var elements = []
            elements.push({
                    "title": letter.toUpperCase(),
                    "subtitle": "Indian Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fz_isl.png?alt=media&token=03e12c87-d3eb-410a-92f8-268c898757e9",
                })
            sendGenericMessage(sender, elements)
            break
      default:
          break
    }
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



