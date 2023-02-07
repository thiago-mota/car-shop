import Router from 'express';
import CarController from '../Controllers/carController';

const carRoute = Router();

carRoute.post('/', (request, response, next) => new CarController(request, response, next)
  .create());

carRoute.get('/', (request, response, next) => new CarController(request, response, next)
  .findAllCars());
  
export default carRoute;
