


const paypal = ({
    'mode': 'sandbox', //sandbox or live
    'client_id': '',
    'client_secret': ''
})

const email = ({
    "method": "POST",
    "url": "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send",
      "headers": {
          "content-type": "application/json",
          "x-rapidapi-host": "rapidprod-sendgrid-v1.p.rapidapi.com",
          "x-rapidapi-key": "",
          "useQueryString": true
      },
      "data":{
          "personalizations": [
              {
                  "to": [
                      {
                          "email": "lexwest6@gmail.com"
                      }
                  ],
                  "subject": "Hello, World!"
              }
          ],
          "from": {
              "email": "from_address@example.com"
          },
          "content": [
              {
                  "type": "text/plain",
                  "value": "Hello, World!"
              }
          ]
      }
})

exports ={ email, paypal}