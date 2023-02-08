import Router from 'express';
import carRoute from './carRoute';
import motorcycleRoute from './motorcycleRoute';

const routes = Router();

routes.use('/cars', carRoute);
routes.use('/motorcycles', motorcycleRoute);

export default routes;
