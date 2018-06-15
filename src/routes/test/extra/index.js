import express from 'express';
import config from 'config';
import UploadPost from './upload.router';
import Queryfile from './queryfile.router';

const route = () => {
    const router = new express.Router();
    router.route('/fileupload').post((req, res, next) => {
        UploadPost(req, res, next);
    });
    router.route('/getfile/:filename').get((req, res) => {
        Queryfile(req, res);
    });
    return router;
}

export default {
    route,
    routePrefix : `/${config.version}/extra`
}