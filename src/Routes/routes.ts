import Router from 'express';
import carRoute from './carRoute';

const routes = Router();

routes.use('/cars', carRoute);

export default routes;
