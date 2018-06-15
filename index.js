import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import Routers from './src/routes'

mongoose.connect('mongodb://samirhasanli:Helloworld1@ds227570.mlab.com:27570/newsapp');
mongoose.Promise = global.Promise;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors());

Routers(app);
app.get('/', (req, res) => {
    res.send({
        message: "Web service Rest API"
    });
});

app.get('/api', (req, res) => {
    res.send({
        message: "Web service Rest API"
    });
});
app.get('/*', (req, res) => {
    res.send({
        status: false,
        message: "404 Not found page"
    });
});
app.listen(3333, () => console.log("Running..."));