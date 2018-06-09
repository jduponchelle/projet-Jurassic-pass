import mongoose from 'mongoose';
let Schema = mongoose.Schema;

// Définiton du schema produit

let cartSchema = new Schema({
    item:{ type: String, required: true},
    price:{ type: Number, required: true},
    // quantity:{ type: Number, required: true}
});

let cart = mongoose.model('cart', cartSchema );

export default cart;