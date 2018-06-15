import express from 'express';
import config from 'config';
import LoginRouter from './login.router'

const route = () => {
    const router = new express.Router();
    router.route('/login').post((req, res) => {
        LoginRouter(req, res);
    });
    return router;
}

export default {
    route,
    routePrefix : `/${config.version}/auth`
}