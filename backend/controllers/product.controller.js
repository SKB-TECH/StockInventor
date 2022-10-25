const { Pool } = require('pg');
/* connection with the database */
const pool = new Pool({
    host: 'localhost',
    user: 'joshcrud',
    database: 'magasin',
    password: '0108'
});

exports.getProduct = async (req, res) => {
    const response = await pool.query('SELECT * FROM product');
    res.render('main', { data: response.rows });
};

// Nouveau produit
exports.creatProduct = async (req, res) => {
    const { designation, price, quantity, imageProduct } = req.body;
    const response = await pool.query('INSERT INTO product (designation, price,quantity,imageProduct) VALUES ($1, $2, $3, $4)', [designation, price, quantity, imageProduct]);

    console.log(response.rows);
    res.render('main', { data: response.rows });
};

// get by id
exports.getuserbyid = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM product WHERE idproduct = $1', [id]);
    res.render('main', { data: response.rows[0] });
};

exports.update_product = async (req, res) => {
    const id = req.params.id;
    const { designation, price, quantity, imageProduct } = req.body;
    const response = await pool.query('UPDATE product SET deasignation= $1, price = $2, quantity = $3, imageProduct= $4 WHERE idproduct= $5', [designation, price, quantity, imageProduct, id]);
    res.render('main');
};

exports.delete_product = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM product WHERE idproduct= $1', [id]);
    res.render('main');
};

exports.createProduct = (req, res) => {
    try {
        pool.connect(async (error, client, release) => {
            let resp = await client.query(`INSERT INTO test (name) VALUES('${req.body.add}')`)
            release()
            res.redirect('/info/get')
        })
    } catch (err) {
        console.log(err)
    }
}

exports.deleteProduct = (req, res, next) => {
    try {
        pool.connect(async (error, client, release) => {
            let resp = await client.query(`DELETE FROM test WHERE name = ('${req.body.delete}')`)
            release()
            res.redirect('/product/get')
        })
    } catch (err) {
        console.log(err)
    }
}

exports.add_product = (req, res) => {
    res.render('Add_product')
}

exports.update_product_page = (req, res) => {
    res.render('Update_product')
}
