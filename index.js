var express = require('express');
var app = express();

var conn = require('express-myconnection');
var mysql = require('mysql');

var perintahku = require('./routes/perintahku');

app.set('port', process.env.port || 3777);
app.use(
    conn(mysql, {
        host: 'localhost',
        user: 'root',
        password:'password',
        port:'3306',
        database:'ecommerce'
    },'single')
);

app.listen(app.get('port'), function(){
    console.log('Server is running on port ' + app.get('port'));
});

app.get('/', function(req, res){
    res.send('Server is running on port' + app.get('port'));
});

app.get('/create_table', perintahku.createTableProduct);
app.get('/insert_table', perintahku.insertTableProduct);