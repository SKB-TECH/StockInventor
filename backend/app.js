const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan');
const bodyParse = require('body-parser')
const path = require('path');
const RouterProduct = require('./routes/product.route')
// const connectDB = require('./Server/database/connection')

const app = express();

//appele du dossier contenant notre variable d'environnemet PORT
dotenv.config({ path: "./config/.env" })

app.use(morgan('tiny'))


//convertion des requete en format Json
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: true }));

// determination du moteur de visualisation ejs sur le projet
app.set('view engine', 'ejs')

app.set('views')


//disponibiliser les ressources du sites (style css,img,js)
app.use('/css', express.static(path.resolve(__dirname, './public/css')))
app.use('/images', express.static(path.resolve(__dirname, './public/images')))
app.use('/js', express.static(path.resolve(__dirname, './public/javascript')))

// les routes
app.use(require('./routes/product.route'))


app.listen(4200, () => {
  console.log(`Pret au port  http://localhost:4200`);
})