import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/motorcycleService';

class MotorcycleController {
  private request: Request;
  private response: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(request: Request, response: Response, next: NextFunction) {
    this.request = request;
    this.response = response;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const moto: IMotorcycle = {
      model: this.request.body.model,
      year: this.request.body.year,
      color: this.request.body.color,
      status: this.request.body.status || false,
      buyValue: this.request.body.buyValue,
      category: this.request.body.category,
      engineCapacity: this.request.body.engineCapacity,
    };

    const newMoto = await this.service.addsNewMoto(moto);
    return this.response
      .status(201)
      .json(newMoto);
  }

  public async findAllMotos() {
    const allMotos = await this.service.findAll();
    return this.response
      .status(200)
      .json(allMotos);
  }
}

export default MotorcycleController;
