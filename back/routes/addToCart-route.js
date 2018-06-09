import mongoose from 'mongoose';
import product from '../models/product-schema';
import cart from '../models/cart-schema'

let express = require('express');
let addToCart = express.Router();


addToCart.post('/addToCart', function (req, res) {

    let titleName = req.body.title;
    console.log(titleName)
    product.findOne({title: titleName},{title: true, imagePath: true, price: true},(err, item) => {
            if (err) {
                res.status(500).send(err);
            } else{             
                res.status(200).send({
                    status : 'true',
                    message : 'product succesfully add to cart',
                    content: item
                });
            }  
            console.log(item);
                });
            }
    );

export default addToCart;