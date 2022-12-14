const { Pool } = require('pg');
/* connection with the database */
const pool = new Pool({
    host: 'localhost',
    user: 'benjamin',
    database: 'magasin',
    password: '1234'
});

exports.getProduct = async (req, res) => {
    const response = await pool.query('SELECT * FROM product');
    res.render('main', { data: response.rows });
};

// Nouveau produit
exports.creatProduct = async (req, res) => {
    const { designation, price, quantity, imageproduct } = req.body;
    const response = await pool.query('INSERT INTO product (designation, price,quantity,imageProduct) VALUES ($1, $2, $3, $4)', [designation, price, quantity, imageproduct]);
    res.render('/')
};

// get by id
exports.getProductbyid = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM product WHERE idproduct = $1', [id]);
    res.render('Update_product', { data: response.rows });

};

exports.update_product = async (req, res) => {
    const id = req.params.id;
    const { designation, price, quantity, imageproduct } = req.body;
    const response = await pool.query('UPDATE product SET designation= $1, price = $2, quantity = $3, imageproduct= $4 WHERE idproduct= $5', [designation, price, quantity, imageproduct, id]);
    res.redirect('/');
};

exports.delete_product = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM product WHERE idproduct= $1', [id]);
    res.redirect('/');
};


exports.add_product = (req, res) => {
    res.render('Add_product')
}

exports.update_product_page = (req, res) => {
    res.render('Update_product')
}
