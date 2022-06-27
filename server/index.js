const paypal = require('paypal-rest-sdk');
const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override');
// const dotenv = require('dotenv').config({path: __dirname + '/.env'})
const axios = require('axios');
const path = require('path');
//var sizeRouter = require('./routes/calculate');
const config = require('./config');
const send = require('./controllers/send');
const app = express()
const apiPort = process.env.PORT || 5003




app.use(express.urlencoded({ extended: true }))
if (process.env.NODE_ENV === `production`) {
  app.use(express.static(path.resolve(__dirname,'../../docs')));
  app.get('/*',(req,res)=>{
      res.sendFile(path.resolve('index.html'));
  });
}
/// MIDDLEWARES
app.use(express.json())
app.use(cookieParser())
app.use(
  cors(),
  express.urlencoded({ extended: true }),
  express.json(),
  methodOverride("X-HTTP-Method-Override")
);
// app.use(express.urlencoded({ extended: true }))
// app.use(cors())
// app.use(express.json())
// app.use(methodOverride('X-HTTP-Method-Override'))


app.use((req,res,next) => {
res.header("Access-Control-Allow-Origin", "*")
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept")
next()
})
//app.post('/size', sizeRouter)
app.post('/api/bespoke',async (req,res,next) => {
  console.info("Bespoke api")
  var options = {
    method: 'POST',
    url: 'https://ombre-ai-fashion-size-recommendation.p.rapidapi.com/sizing',
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-host': 'ombre-ai-fashion-size-recommendation.p.rapidapi.com',
      'x-rapidapi-key': 'fa6146146fmsh0e98eec08434b14p1a16f1jsn77bf46996184'
    },
    data: 
    req.body
    
  };
  try {
    await  axios.request(options).then(function (response) {
      res.send(response.data)
      console.log(response.data);
    })
  } catch (error) {
    console.error("error:"+ error);
  }
  next()
}) //--not working


app.post('/pay', (req, res) => {
  console.info(req.body)
  paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': process.env.CLIENT_ID,
    'client_secret': process.env.CLIENT_KEY
})
    const create_payment_json = {
      "intent": "sale",
      "payer": {
          "payment_method": "paypal"
      },
      "redirect_urls": {
          "return_url": "http://localhost:5003/success",
          "cancel_url": "http://localhost:5003/cancel"
      },
      "transactions": [{
          "item_list": {
              "items": [{
                  "name": "Redhock Bar Soap",
                  "sku": "001",
                  "price": "25.00",
                  "currency": "USD",
                  "quantity": 1
              }]
          },
          "amount": {
              "currency": "USD",
              "total": "25.00"
          },
          "description": "Washing Bar soap"
      }]
  };
  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
        throw error;
    } else {
        for(let i = 0;i < payment.links.length;i++){
          if(payment.links[i].rel === 'approval_url'){
            res.redirect(payment.links[i].href);
          }
        }
    }
  });
})

app.get('/success', (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;
  
    const execute_payment_json = {
      "payer_id": payerId,
      "transactions": [{
          "amount": {
              "currency": "USD",
              "total": "25.00"
          }
      }]
      
    };
  
  // Obtains the transaction details from paypal
    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
        //When error occurs when due to non-existent transaction, throw an error else log the transaction details in the console then send a Success string reposponse to the user.
      if (error) {
          console.log(error.response);
          throw error;
      } else {
          console.log(JSON.stringify(payment));
          res.send('Success');
      }
  });
  });
  
  app.get('/cancel', (req, res) => res.send('Cancelled'));
////////////aSEND EMAIL CONFIG\\\\\\\\\\\\\\\\\\\\\\\\\\\
app.post('/api/send', async (req, res) => {
  console.info(req.body)
    if (req.body.fromEmail.trim()) {
      config.data.from.email = req.body.fromEmail
    }
    if (req.body.toEmail.trim()) {
      config.data.personalizations[0].to[0].email = req.body.toEmail
    }
    if (req.body.subject.trim()) {
      config.data.personalizations[0].subject = req.body.subject
    }
    if (req.body.content.trim()) {
      config.data.content[0].value = req.body.content
    }
    const r = await send(config)
    res.send(r)
  })

  ////////////////////////Server on\\\\\\\\\\\\\\\\\\\\\\\
  app.listen(apiPort, () => {
    console.log(
      `Express Server started on Port ${apiPort} | Environment : ${app.get('env')}`
    );
  });