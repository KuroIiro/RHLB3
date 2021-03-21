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

app.get('/', function (req,res) {
    res.send('Hello');
 });

 app.post('/api/post', function (req,res) {
    res.send('Heo');
    console.log(req.body);
 });

/*app.listen(3000,function(){

});*/
(process.env.NOW_REGION) ? module.exports = app : app.listen(PORT);