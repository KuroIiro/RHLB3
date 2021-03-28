const { response } = require('express');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

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
    const data = req.body;
    console.log('req.body',data);

    const messageId = req.body['events'][0]['message']['id'];
    console.log('messageId');

    res.send('api:OK')

 });

/*app.listen(3000,function(){

});*/



(process.env.NOW_REGION) ? module.exports = app : app.listen(PORT);