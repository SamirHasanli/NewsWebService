import express from 'express';
import config from 'config';
import NewsRemoveRouter from './news.remove';

const route = () => {
    const router = new express.Router();
    router.route('/news/:id').delete((req, res) => {
        NewsRemoveRouter(req, res);
    });
    return router;
}

export default {
    route,
    routePrefix: `/${config.version}/remove`
}