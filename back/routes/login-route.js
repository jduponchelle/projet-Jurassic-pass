import users from '../models/user-schema';
import auth from '../routes/middleware/token-middleware';
import  jwt from 'jsonwebtoken';

let express = require('express');
let login = express.Router();

let secretkey = 'jurassickpark';

login.post('/login', (req, res) =>{

    if (req.body.username&&req.body.password){
        users.findOne({username: req.body.username}, (err, result)=>{
            if (result){
                if(result.username===req.body.username && result.password === req.body.password){
                    let token = jwt.sign({username: result.username, firstname: result.firstname, lastname: result.lastname}, secretkey);
                    res.status(200).send({
                        status: true,
                        content: token 
                    });
                }else{
                    res.status(500).send({
                        status: false,
                        message: 'Invalid username or password'
                    });
                }
            }else{
                res.status(500).send({
                    status: false,
                    message: 'Invalid username or password'
                })
            }
        })
    }else{
        res.status(500).send({
            status: false,
            message: 'You should provide all the fields'
        });
    }
});

export default login;