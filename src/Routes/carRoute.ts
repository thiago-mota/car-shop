import Router from 'express';
import CarController from '../Controllers/carController';

const carRoute = Router();

carRoute.post('/', (request, response, next) => new CarController(request, response, next)
  .create());
  
carRoute.get('/:id', (request, response, next) => new CarController(request, response, next)
  .findCarById());

carRoute.get('/', (request, response, next) => new CarController(request, response, next)
  .findAllCars());

carRoute.put('/:id', (request, response, next) => new CarController(request, response, next)
  .updateCar());
  
export default carRoute;
