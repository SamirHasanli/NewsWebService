import AdminRouter from './admin/index';
import ClientRouter from './client/index';
import config from 'config';
const jwtMiddleware = require('express-jwt-middleware');
const jwtCheck = jwtMiddleware(config.jwtSecret);

const AppRoutes = (app) => {
    app.use(AdminRouter.routePrefix, jwtCheck, AdminRouter.route());
    app.use(ClientRouter.routePrefix, ClientRouter.route());
}

export default AppRoutes;