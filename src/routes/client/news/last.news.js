import News from '../../../models/News'

const LastNewsRouter = (req, res)=>{
    News.findOne().sort({_id:-1}).limit(1).then(
        (result) => {
            News.findOne({ number: Number(result.number) - Number(req.params.number) + 1 }, (error, result) => {
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
        }, (error) => {

        }
    );
}

export default LastNewsRouter;