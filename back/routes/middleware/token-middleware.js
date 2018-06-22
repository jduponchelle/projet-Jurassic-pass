
import jwt from 'jsonwebtoken';

let express = require('express');
let auth = express.Router();

let secretkey = 'jurassickpark';

auth.use(function (req, res, next) {
    var token = req.headers.token;

    var decoded_token = jwt.verify(token, secretkey, function (err) {
        if(err){
            console.log(err);
            return;
        }
        else if (!decoded_token) {
            res.status(500).send({
                status: false,
                message: 'You should be authentified to access this route!'
            })
        }else{
            var decoded = jwt.decode(token, {
                complete: true
            });
        
            var usernameInToken = decoded.payload.username
        
            req.decodedUser = decoded;
            req.token = token;
            req.usernameInToken = usernameInToken
            
        
            var verifyUSer = users.includes(usernameInToken);
            next();
        }
    });
 });

export default auth;