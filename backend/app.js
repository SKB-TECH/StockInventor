const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan');
const bodyParse = require('body-parser')
const path = require('path');
const RouterProduct = require('./routes/product.route')
// const connectDB = require('./Server/database/connection')

const app = express();

//appele du dossier contenant notre variable d'environnemet PORT
dotenv.config({ path: "./config.env" })
// const PORT = process.env.PORT || 8080

//les i(nfos des requetes
app.use(morgan('tiny'))

//connect to database
// connectDB();

//convertion des requete en format Json
app.use(bodyParse.urlencoded({ extended: true }));

// determination du moteur de visualisation ejs sur le projet
app.set('view engine', 'ejs')
app.set('views')

//le lien contenant les fichies ej
//app.set('view',path.resolve(__dirname,'/views/ejs'))

//disponibiliser les ressources du sites (style css,img,js)
app.use('/css', express.static(path.resolve(__dirname, './public/css')))
app.use('/img', express.static(path.resolve(__dirname, './public/javascript')))
app.use('/js', express.static(path.resolve(__dirname, './public/images')))

// les routes
app.use('/product', RouterProduct)


app.listen(4200, () => {
  console.log(`Pret au port  http://localhost`);
})