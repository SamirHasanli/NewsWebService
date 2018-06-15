import crypto from 'crypto';
import config from 'config';
import User from '../../../models/User';

const UpdateUserRouter = (req, res)=>{
    if(req.body.password){
        req.body.password = crypto.createHmac('sha512', config.passwordSecret).update(req.body.password).digest('hex');
    }
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then(
        (result) => {
            res.send({
                status: true,
                result: result,
            });
        },(error) => {
            res.send({
                status: false,
                error: error
            });
        }
    );
    
}

export default UpdateUserRouter;