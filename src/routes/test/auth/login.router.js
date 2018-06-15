import crypto from 'crypto';
import config from 'config';
import User from '../../models/User';

const LoginRouter = (req, res)=>{
    const { userName, password } = req.body;
    User.findOne({ userName: userName, password: crypto.createHmac('sha512', config.passwordSecret).update(password).digest('hex')}, (error, result) => {
        if(error) res.send({ status: false, error: error});
        if(result) {
            res.send({result:result});
        }else{
            res.send({
                status: false,
                error: "Username or Password wrong",
                password: crypto.createHmac('sha512', config.passwordSecret).update(password).digest('hex')
            })
        }
    });
    
}

export default LoginRouter;