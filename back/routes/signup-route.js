import users from '../models/user-schema';

let express =   require('express');
let signup  =   express.Router();


signup.post('/auth/signup', function (req, res) {
    
    // Vérification de l'existance de username et password

    if(req.body.username&&req.body.password&&req.body.firstname&&req.body.lastname){
        users.findOne({username: req.body.username}, (err, result) =>{
            if (result){
                res.status(500).send({
                    success:    false,
                    message:    'Ce nom est déja utilisé! Veuillez en saisir un nouveau.'
                });
            }else{
                let newUser = new users;
                    newUser.firstname   =   req.body.firstname;
                    newUser.lastname   =   req.body.lastname;
                    newUser.username    =   req.body.username;
                    newUser.password    =   req.body.password;
                newUser.save((err, user) => {  
                        if (err) {
                            res.status(500).send(err);
                        }else{
                            res.status(200).send({
                                status : true,
                                message : 'User: '+ newUser.username + ' succesfully created',
                                content: newUser
                            });
                        }   
                    });
                }
            });
    }else{
        res.status(500).send({
            success: false, 
            message:'You should provide all the fields!'
        });
    }
});

export default signup;