const { response } = require('express');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/',function(req,res){
    //res.send('Hello world!');
    res.json();
});

/*app.listen(3000,function(){

});*/
(process.env.NOW_REGION) ? module.exports = app : app.listen(PORT);