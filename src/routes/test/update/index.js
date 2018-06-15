import express from 'express';
import config from 'config';
import UserUpdateRouter from './user.router';
import NewsUpdateRouter from './news.router';

const route = () => {
    const router = new express.Router();
    router.route('/user/:id').put((req, res) => {
        UserUpdateRouter(req, res);
    });
    router.route('/news/:id').put((req, res) => {
        NewsUpdateRouter(req, res);
    });
    return router;
}

export default {
    route,
    routePrefix : `/${config.version}/update`
}