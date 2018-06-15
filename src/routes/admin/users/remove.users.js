import User from '../../../models/User';

const RemoveUserRouter = (req, res) => {
    User.deleteOne({ _id: req.params.id}, (error, result) => {
        if (result && !error) {
            res.send({
                status: true,
                message: 'Remove succesfull'
            });
        }else {
            res.send({
                status: false,
                message: 'Remove faild'
            });
        }
    });
}

export default RemoveUserRouter;