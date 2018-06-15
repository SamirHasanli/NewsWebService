import News from '../../../models/News'

const CategoryIdNewsRouter = (req, res)=>{
    News.findOne({ category: req.params.category, _id: req.params.id }, (error, result) => {
        if(result) {
            res.send({
                status: true,
                message: 'Succesfull operation',
                result:result,
            });
        }else if(!error) {
            res.send({
                status: false,
                message: '404 not found page',
            })
        }else {
            res.send({
                status: false,
                message: 'Undefined error',
            });
        }
    });
}

export default CategoryIdNewsRouter;