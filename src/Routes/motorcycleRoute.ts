import Router from 'express';
import MotorcycleController from '../Controllers/motorcycleController';

const motorcycleRoute = Router();

motorcycleRoute.post('/', (req, res, next) => new MotorcycleController(req, res, next)
  .create());

export default motorcycleRoute;
