import Router from 'express';
import MotorcycleController from '../Controllers/motorcycleController';

const motorcycleRoute = Router();

motorcycleRoute.post('/', (req, res, next) => new MotorcycleController(req, res, next)
  .create());

motorcycleRoute.get('/', (req, res, next) => new MotorcycleController(req, res, next)
  .findAllMotos());
motorcycleRoute.get('/:id', (req, res, next) => new MotorcycleController(req, res, next)
  .findMotoById());

export default motorcycleRoute;
