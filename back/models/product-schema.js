import mongoose from 'mongoose';
let Schema = mongoose.Schema;

// Définiton du schema produit

let productSchema = new Schema({
    imagePath:{ type: String, required: true},
    title:{ type: String, required: true},
    description:{ type: String, required: true},
    price:{ type: Number, required: true}
  });
  
  let product = mongoose.model('product', productSchema);

export default product;