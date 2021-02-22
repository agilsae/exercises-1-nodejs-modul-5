exports.createTableProduct = function (req, res){
    req.getConnection(function(err, connect){
        var sql = `
        CREATE TABLE product(
            id_product int auto_increment primary key,
            nama_product varchar(60) not null,
            gambar_product varchar(60) not null,
            harga_product int(13) not null,
            desc_product text not null,
            createdate timestamp default now()
        )
`
        var query = connect.query(sql, function(err, results){
            if (err) {
                console.log('Error Create table', err);
            }

            res.send('Table berhasil dibuat');
        });
    });
   
}

exports.insertTableProduct = function (req, res){
    req.getConnection(function(err, connect){
        var sql = `
            INSERT INTO product(nama_product, gambar_product, harga_product, desc_product, createdate)
            VALUES 
            ('sepatu sneaker', 'sneaker.jpg', 200000, 'Kami menjual sepatu berkualitas', '2020-01-17'),
            ('sepatu pantofel', 'pantofel.png', 500000, 'Kami menjual sepatu fantopel 2020', '2020-01-30')
        `
        var query = connect.query(sql, function(err, results){
            if (err){
                console.log('Error Insert table', err);
            }

            res.status(200) 
                .json({
                    code: 1,
                    data: results,
                    status: 'success',
                    message: 'Data Berhasil ditambahkan'
                });
        });
    });

}