import News from '../../models/News';

const NewscreatorRouter = (req, res) => {
    const { title, content, categroy, filename } = req.body;
    const newNews = new News({
        title: title,
        content: content,
        category: categroy,
        filename: filename,
    });
    newNews.save().then(
        (data) => {
            res.send({
                status: true,
                result: data
            });
        }, (error) => {
            res.send({
                status: false,
                error: error
            });
        }
    )
}

export default NewscreatorRouter;