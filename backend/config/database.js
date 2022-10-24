const Pool = require('pg').Pool
const pool = new Pool({
    user: 'benjamin',
    host: 'localhost',
    database: 'magasin',
    password: '1234',
    port: 5432,
})