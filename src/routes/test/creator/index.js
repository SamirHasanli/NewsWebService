import express from 'express';
import config from 'config';
import UsercreatorRouter from './usercreator.router';
import NewscreatorRouter from './newscreator.router';

const route = () => {
    const router = new express.Router();
    router.route('/news').post((req, res) => {
        NewscreatorRouter(req, res);
    });

    router.route('/user').post((req, res) => {
        UsercreatorRouter(req, res);
    });
    return router;
}

export default {
    route,
    routePrefix : `/${config.version}/create`
}