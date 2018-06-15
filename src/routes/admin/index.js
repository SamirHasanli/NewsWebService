import express from 'express';
import config from 'config';
import { AddNewsRouter, RemoveNewsRouter, UpdateNewsRouter } from './news/index';
import { AddUserRouter, RemoveUserRouter, UpdateUserRouter } from './users/index';
import { UploadImageFileRouter } from '../extra/index';

const route = () => {
    const router = new express.Router();
    router.route('/test').get((req, res) => {
        res.send(req.tokenData._id);
    });
    router.route('/news').post((req, res) => {
        AddNewsRouter(req, res);
    });
    router.route('/news/:id').put((req, res) => {
        UpdateNewsRouter(req, res);
    });
    router.route('/news/:id').delete((req, res) => {
        RemoveNewsRouter(req, res);
    });

    router.route('/user').post((req, res) => {
        AddUserRouter(req, res);
    });
    router.route('/user/:id').put((req, res) => {
        UpdateUserRouter(req, res);
    });
    router.route('/user/:id').delete((req, res) => {
        RemoveUserRouter(req, res);
    });
    
    router.route('/extra/uploadimage').post((req, res) => {
        UploadImageFileRouter(req, res);
    });
    
    return router;
}

export default {
    route,
    routePrefix : `/api/${config.version}/admin`
}