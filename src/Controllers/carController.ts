import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/carService';

class CarController {
  private request: Request;
  private response: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(request: Request, response: Response, next: NextFunction) {
    this.request = request;
    this.response = response;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = {
      model: this.request.body.model,
      year: this.request.body.year,
      color: this.request.body.color,
      status: this.request.body.status || false,
      buyValue: this.request.body.buyValue,
      doorsQty: this.request.body.doorsQty,
      seatsQty: this.request.body.seatsQty,
    };

    try {
      const newCar = await this.service.addsNewCar(car);
      return this.response
        .status(201)
        .json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAllCars() {
    const allCars = await this.service.findAll();
    return this.response
      .status(200)
      .json(allCars);
  }

  public async findCarById() {
    const { id } = this.request.params;
    const carById = await this.service.findById(id);
    
    return this.response.status(200).json(carById);
  }
}

export default CarController;
