import User from '../../../models/User';
import crypto from 'crypto';

const AddUserRouter = (req, res) => {
    const { userName, e_mail, firstName, lastName, password } = req.body;
    if( password.trim().length >= 8) {
        const newUser = new User({
            userName: userName,
            e_mail: e_mail,
            firstName: firstName,
            lastName: lastName,
            password: crypto.createHmac('sha512', config.passwordSecret).update(password).digest('hex'),
        });
        newUser.save().then(
            (data) => {
                res.send({
                    status: true,
                    result: data
                });
            }, (error) => {
                res.send({
                    status: true,
                    error: error
                });
            }
        );
    }else {
        res.send({
            status: false,
            error: 'Password must minimum 8 character'
        });
    }
}

export default AddUserRouter;