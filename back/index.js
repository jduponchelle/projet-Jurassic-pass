import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';



import users from './models/user-schema'
import settingProduct from './models/settingProduct';
import product from './models/product-schema';
import cart from './models/cart-schema';
import addToCart from './routes/addToCart-route'
import showProducts from './routes/showProduct-route';
import auth from './routes/middleware/token-middleware';
import signup from './routes/signup-route';
import login from './routes/login-route';
import gulp from './gulp-file';



let router = express.Router();
let app = express();

//Connection à la DB avec mongoose

mongoose.connect('mongodb://admin:willibemen13@ds163610.mlab.com:63610/jurassic-pass', {}).then(
  () => {
    // création du port

    let port = process.env.PORT || 1407;
    app.listen(port, (err) => {
      if (err) {
        console.log('Connection to the server failed');
      } else {
        console.log('app listen. Running on port 1407!');
        console.log('Connected to the database!');
      }
    })
  }, (err) => {
    console.log('Connection to the database failed');
  }
);

app.use('/docs', express.static(__dirname + '/docs'));

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

//CORS cross-origin
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, token');
  //intercept OPTIONS method;
  if ('OPTIONS' == req.method) {
    res.send(200);
  } else {
    next();
  }
});

app.use(signup);
app.use(login);
app.use(addToCart);
app.use(showProducts);
// app.use(auth);
// app.use(checkout);
