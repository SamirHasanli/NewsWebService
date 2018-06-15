import crypto from 'crypto';
import config from 'config';
import jwt from 'jsonwebtoken';
import User from '../../../models/User';

const UserLoginRouter = (req, res)=>{
    const { userName, password } = req.body;
    User.findOne({ userName: userName, password: crypto.createHmac('sha512', config.passwordSecret).update(password).digest('hex')}, (error, result) => {
        if(error) res.send({ status: false, error: error});
        if(result) {
            const token = jwt.sign({_id : result._id}, config.jwtSecret)
            res.send({
                status: true,
                token: token
            });
        }else{
            res.send({
                status: false,
                error: "Username or Password wrong",
                password: crypto.createHmac('sha512', config.passwordSecret).update(password).digest('hex')
            })
        }
    });
    
}

export default UserLoginRouter;