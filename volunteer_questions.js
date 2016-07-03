function volunteerQuestions(response) {
        if (text === 'Generic') {
                sendGenericMessage(sender)
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
}