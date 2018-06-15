import News from '../../models/News'

const CategoryRouter = (req, res) => {
    News.find({ category: req.params.category }, (err, result) => {    
        if(result && result.length>0) {
            res.send({
                status: true,
                message: 'Succesfull operation',
                result:result,
            });
        }else if(!err) {
            res.send({
                status: false,
                message: '404 not found page',
            });
        }else {
            res.send({
                status: false,
                message: 'Undefined error',
            });
        }
    });
}

export default CategoryRouter;