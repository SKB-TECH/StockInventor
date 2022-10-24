const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'dbuser',
  host: 'database.server.com',
  database: 'mydb',
  password: 'secretpassword',
  port: 3211,
})

const client = new Client({
  user: 'dbuser',
  host: 'database.server.com',
  database: 'mydb',
  password: 'secretpassword',
  port: 3211,
})





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

exports.updateProduct = (req, res, next) => {

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

