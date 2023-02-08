import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';

import ICar from '../Interfaces/ICar';

class CarODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      // id: { type: Number, required: true },
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });

    this.model = models.Car || model('Car', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async findAll() {
    const allCars = await this.model.find();
    return allCars;
  }

  public async findById(id: string) {
    const findById = await this.model.findById(id);
    return findById;
  }

  public async updateById(id: string, car: ICar) {
    const updatedCar = await this.model.updateOne({ _id: id }, car);
    return updatedCar;
  }
}

export default CarODM;
