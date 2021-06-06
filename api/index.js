const { response } = require('express');
const express = require('express');
const request = require('request');
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const accessToken = "7gIxUaaT/mK/Ueb8tbfLYswh1UJGIPRoQ5/GvzDHCIMqsx8zg9lOuSvEytX3T965MmrlN5nIeTqL4Flgka4LvziVBkjHSYFjJBcq/xCeZfQl0oZaK/11sTaSmbeerZNf6xH7BmswwQIwMu8orwVUpQdB04t89/1O/w1cDnyilFU=";

/*app.get('/',function(req,res){
    //res.send('Hello world!');
    res.json({id:"kusa"});
});*/

/*
app.get('/', function (req,res) {
    res.send('Hello');
 });

 app.post('/api/post', function (req,res) {
    res.send('Heo');
    console.log(req.body);
 });*/

 app.post('/',function(req,res){
   res.send('api:OK');
    const data = req.body;
    console.log('req.body',data);

    const messageId = req.body['events'][0]['message']['id'];
    console.log(messageId);

    const options = {
         url: `https://api-data.line.me/v2/bot/message/${req.body.events[0].message.id}/content`,
         method: 'get',
         headers: {
            'Authorization': 'Bearer ' + accessToken,
         },
         encoding: null
      };

      request(options, function(error, response, body) {
      const buffer = new Buffer.from(body);
      console.log(buffer);
      
         const options = {
            uri: "https://leadhack-test.cognitiveservices.azure.com/customvision/v3.0/Prediction/81b2aff8-0aa1-42c3-b7e0-7eca4ca5a7dd/classify/iterations/O-dori-/image",
            headers: {
               "Content-type": "application/octet-stream",
               "Prediction-Key": "1f0cd8f7237b4d598420ff1ab62ba8cc",
            },
            body: buffer,
         };

         request.post(options, function(error, response, body){
            console.log(body);
            request.post(optionsLine, function(error, res, body){
               const resBody = JSON.parse(body);

               const messageData = {
                  "replyToken" : replyToken,
                  "messages":[
                     {
                        "type":"text",
                        "text":"Message Body"
                     }
                  ]
               }

               const optionsLine = {
                  uri: 'https://api.line.me/v2/bot/message/reply',
                  headers: {
                     'Content-Type':'applucation/json',
                     'Authorization': 'Bearer' + accessToken,
                  },
                  json: messageData
               }
               request.post(optionsLine, function(error, res, body){});

            });
            
         });
      });

 });






/*app.listen(3000,function(){

});*/



(process.env.NOW_REGION) ? module.exports = app : app.listen(PORT);