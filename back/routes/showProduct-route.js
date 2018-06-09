import mongoose from 'mongoose';
import product from '../models/product-schema';

let express = require('express');
let showProducts = express.Router();

showProducts.get('/showProducts', function (req, res) {
    product.find({}, (err, item) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).send({
                status: true,
                content: item
            })
        }
    })
});

export default showProducts;