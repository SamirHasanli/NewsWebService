import News from '../../../models/News'

const AddNewsRouter = (req, res) => {
    const { title, content, category, filename, number } = req.body;
    const newNews = new News({
        title: title,
        content: content,
        category: category,
        filename: filename,
        number: number
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

export default AddNewsRouter;