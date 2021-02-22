var express = require('express');
var app = express();

var produk = require('./routes/produk');

app.set('port', process.env.port || 8000);

app.listen(app.get('port'), function(){
    console.log('Server is running on port ' + app.get('port'));
});

app.get('/', function(req, res){
    res.send('Ini adalah halaman Home web Agil');
});

app.get('/product', produk.product);
app.get('/detailproduct', produk.detailProduct);