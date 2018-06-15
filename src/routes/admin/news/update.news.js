import crypto from 'crypto';
import config from 'config';
import News from '../../../models/News'

const UpdateNewsRouter = (req, res)=>{
    News.findByIdAndUpdate({_id: req.params.id}, req.body).then(
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

export default UpdateNewsRouter;