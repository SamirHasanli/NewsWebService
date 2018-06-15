import express from 'express';
import config from 'config';
import { UserLoginRouter } from './user/index';
import { CategoryIdNewsRouter, CategoryNewsRouter, IdNewsRouter, LastNewsRouter } from './news/index';
import { QueryImageFileRouter } from '../extra/index';
const route = () => {
    const router = new express.Router();
    router.route('/test').get((req, res) => {
        res.send('Test');
    });
    router.route('/news/last/:number').get((req, res) => {
        LastNewsRouter(req, res);
    });
    router.route('/news/category/:category/last/:number').get((req, res) => {
        CategoryNewsRouter(req, res);
    });
    router.route('/news/category/:category/id/:id').get((req, res) => {
        CategoryIdNewsRouter(req, res);
    });
    router.route('/news/id/:id').get((req, res) => {
        IdNewsRouter(req, res);
    });

    router.route('/user/login').post((req, res) => {
        UserLoginRouter(req, res);
    });

    router.route('/extra/image/:filename').get((req, res) => {
        QueryImageFileRouter(req, res);
    });
    return router;
}

export default {
    route,
    routePrefix : `/api/${config.version}/client`
}