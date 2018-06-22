import users from '../models/user-schema';
import auth from '../routes/middleware/token-middleware';
import  jwt from 'jsonwebtoken';

let express = require('express');
let login = express.Router();

let secretkey = 'jurassickpark';

login.post('/checkout', (req, res) =>{

    
});

export default checkout;