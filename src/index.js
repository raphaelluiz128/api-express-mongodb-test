const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//chamando função express

app.use(bodyParser.json()); //entender o json
app.use(bodyParser.urlencoded({extended: false}));//parametros
app.listen(2000);
var authCRouter = require('./controllers/authcontroller');
app.use('/authcontroller',authCRouter);



 app.get('',(req,res)=>{
    res.send('ok');
}) 

module.exports = app;