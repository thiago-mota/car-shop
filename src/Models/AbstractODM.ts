import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';

import ICar from '../Interfaces/ICar';

class AbstractODM<T> {
  protected schema: Schema;
  protected model: Model<T>;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(carData: T) {
    return this.model.create(carData);
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

export default AbstractODM;
