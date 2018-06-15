import express from 'express';
import config from 'config';
import FindidRouter from './findid.router';
import CategoryRouter from './category.router';

const route = () => {
    const router = new express.Router();
    router.route('/:category/:id').get((req, res) => {
        FindidRouter(req, res);
    });
    router.route('/:category').get((req, res) => {
        CategoryRouter(req, res);
    });
    return router;
}

export default {
    route,
    routePrefix : `/${config.version}/news`
}