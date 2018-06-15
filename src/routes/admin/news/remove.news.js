import News from '../../../models/News'

const RemoveNewsRouter = (req, res) => {
    News.deleteOne({ _id: req.params.id}, (error, result) => {
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

export default RemoveNewsRouter;