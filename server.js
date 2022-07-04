var express = require('express');
var app = express();
const bodyParser = require("body-parser");
app.use(express.json());
const db = require("./models");
db.sequelize.sync();    

require('./routes/football.routes')(app);

var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:$s", host, port);
})