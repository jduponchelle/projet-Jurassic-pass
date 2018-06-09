import mongoose from 'mongoose';
let Schema = mongoose.Schema;

// Définiton du schema produit

let userSchema = new Schema({
    firstname:{ type: String, required: true},
    lastname: { type: String, required: true},
    username: { type: String, required: true},
    password: { type: String, required: true},
    cart: [{
      content: Array,  
      total: Number
    }]
  });
  
  let users = mongoose.model('users', userSchema);

export default users;